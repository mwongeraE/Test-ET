import Vue from 'vue';
import { SteadClient } from '@stead/request';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IBaseState, IBaseMutationTypes, TYPE_DEFAULTS } from '@/store/lib';

export interface IActionConfig {
  client: SteadClient;
  endpoint: string;
  primKey?: string;
  ixBased?: boolean;
}

export function BaseState<ModuleState extends IBaseState = IBaseState>(extend?: ModuleState | any): ModuleState {
  const state: IBaseState = {
    current: null,
    currentIx: null,
    list: {
      start: 0,
      perPage: 16,
      items: []
    },
    globFilter: {
      key: 'status',
      value: 'ALL'
    },
    filters: []
  };

  return Object.assign(state, extend);
}

export function BaseActions<ModuleState, RootState>({endpoint, client, ixBased = true, primKey = 'id'}: IActionConfig, extend?: ActionTree<ModuleState, RootState>, collection?: string, types: IBaseMutationTypes = TYPE_DEFAULTS): ActionTree<ModuleState, RootState> {
  const actions: ActionTree<IBaseState, RootState> = {
    async load({commit}) {
      if (!collection) return;
      const result = await Vue.prototype.$db[collection].getItem('state');
      if (result) commit(types.LOAD, result);
    },
    fetchAll({commit, state}, {query = {limit: 16, offset: 0}} = {}) {
      return client.$get(endpoint, {query})
        .then((items: any[]) => {
          const pagedList = {start: query.offset || 0, perPage: query.limit || 16, items};
          commit(types.SET_LIST, pagedList);
          return pagedList;
        });
    },
    fetchOne({commit, state}, {id, query = {}}) {
      return client.$get(`${endpoint}/${id}`, {query})
        .then((item: any) => {
          if (!item) throw 'No item found';

          if (ixBased) {
            commit(types.PUT, {id, item, primKey});
            commit(types.SET_CURRENT_IX, item._ix);
          } else {
            commit(types.SET_CURRENT, item);
          }

          return item;
        });
    },
    async fetchOneLocal({commit, state, dispatch}, {key = primKey, value}) {
      let itemIx: any;

      if (value) {
        itemIx = state.list.items.findIndex((x: any) => x[key] === value);
      } else {
        throw new Error('Item value should be passed');
      }

      if (itemIx === -1) {
        throw new Error('No such item exists');
      }

      if (ixBased) {
        commit(types.SET_CURRENT_IX, itemIx);
      } else {
        commit(types.SET_CURRENT, state.list.items[itemIx]);
      }

      return state.list.items[itemIx];
    },
    fetchIndexed({commit, state}, {key, value, ...query}) {
      return client.$get(endpoint, {
        query: {
          limit: 1,
          filter: {
            eq: {[key]: value}
          },
          ...query
        }
      }).then((item: any) => {
        if (!item.length) throw 'No item found';
        // Pick the first
        item = item[0];

        if (ixBased) {
          commit(types.PUT, {id: item.id, item, primKey});
          commit(types.SET_CURRENT_IX, item._ix);
        } else {
          commit(types.SET_CURRENT, item);
        }

        return item;
      });
    },
    globFilter({commit}, {value = 'ALL'}) {
      commit(types.SET_GLOBAL_FILTER, {value});
    },
    putFilter({commit}, {key, value}) {
      commit(types.PUT_FILTER, {key, value});
    },
    delFilter({commit}, {key}) {
      commit(types.DEL_FILTER, {key});
    },
    reset({commit}, current = false) {
      commit(current ? types.RESET_CURRENT : types.RESET);
    }
  };

  return Object.assign(actions, extend);
}

export function BaseGetters<ModuleState, RootState>(extend?: GetterTree<ModuleState, RootState>): GetterTree<ModuleState, RootState> {
  const getters: GetterTree<IBaseState, RootState> = {
    list: ({list, globFilter, filters}) => {
      let items = list.items;

      // Simple fuzzy filter
      filters.forEach((filter: any) => {
        const match = new RegExp(`${filter.value}`, 'gi');
        items = items.filter((x: any) => match.test(x[filter.key]));
      });

      if (globFilter.value !== 'ALL') {
        return items.filter((x: any) => x[globFilter.key] === globFilter.value);
      }

      return items;
    },
    rawList: ({list}) => list,
    current: ({list, currentIx, current}) => currentIx === null ? current : list.items[currentIx],
    filters: ({filters}) => filters
  };

  return Object.assign(getters, extend);
}

export function BaseMutations<ModuleState, RootState>(extend?: MutationTree<ModuleState>, types: IBaseMutationTypes = TYPE_DEFAULTS): MutationTree<ModuleState> {
  const mutations: MutationTree<IBaseState> = {
    [types.SET_CURRENT](state, data) {
      state.current = data;
    },
    [types.SET_CURRENT_IX](state, ix) {
      state.currentIx = ix;
    },
    [types.SET_LIST](state, items) {
      state.list = items;
    },
    [types.SET_GLOBAL_FILTER](state, {value}) {
      state.globFilter.value = value;
    },
    [types.PUT_FILTER](state, {key, value}) {
      const ix = state.filters.findIndex((x: any) => x.key === key);
      if (ix === -1) {
        state.filters.push({key, value});
      } else {
        state.filters[ix].value = value;
      }
    },
    [types.DEL_FILTER](state, {key}) {
      const ix = state.filters.findIndex((x: any) => x.key === key);
      if (ix === -1) {
        state.filters.splice(ix, 1);
      }
    },
    [types.PUT](state, {id = null, item, primKey = 'id'}) {
      const ix = state.list.items.findIndex((x: any) => x[primKey] === id || item[primKey]);

      if (ix === -1) {
        item._ix = state.list.items.push(item) - 1;
      } else {
        state.list.items[ix] = item;
      }
    },
    [types.RESET_CURRENT](state) {
      state.current = null;
      state.currentIx = null;
    },
    [types.RESET](state) {
      state.current = null;
      state.list = {
        start: 0,
        perPage: 16,
        items: []
      };
    }
  };

  return Object.assign(mutations, extend);
}
