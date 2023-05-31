import { detailedDiff } from 'deep-object-diff';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { BaseActions, BaseGetters, BaseMutations, IActionConfig } from './base.module';
import { BaseState, ICrudMutationTypes, ICrudState, IRootState, TYPE_DEFAULTS } from '@/store/lib';

export function CrudState<ModuleState extends ICrudState>(extend: ModuleState | any = {}): ModuleState {
  return BaseState<ModuleState>(extend);
}

export function CrudActions<ModuleState = ICrudState, R = IRootState>({endpoint, client, ixBased = true, primKey = 'id'}: IActionConfig, extend?: ActionTree<ModuleState, R>, collection?: string, types: ICrudMutationTypes = TYPE_DEFAULTS) {
  const actions = BaseActions<ICrudState, IRootState>({endpoint, client, ixBased, primKey}, {
    create({commit, dispatch}, {data, query = {}}) {
      return client.$post(endpoint, data, {query})
        .then((result: any) => dispatch('postCreate', {result}));
    },
    update({commit, state, dispatch}, {id, update, query = {}}) {
      const changes = detailedDiff(state.current, update);
      return client.$put(`${endpoint}/${id}`, changes, {query})
        .then((result: any) => dispatch('postUpdate', {id, result}));
    },
    delete({commit, dispatch}, {id, query = {select: ['id']}}) {
      return client.$delete(`${endpoint}/${id}`, {query})
        .then((result: any) => dispatch('postDelete', {id, result}));
    },
    postCreate({commit}, {result}) {
      commit(types.PUT, {item: result, primKey});
      return result;
    },
    postUpdate({commit, state}, {id, result}) {
      commit(types.PUT, {id, item: result, primKey});
      return result;
    },
    postDelete({commit}, {id, result}) {
      commit(types.DELETE, {id});
      return result;
    }
  }, collection, types);

  return Object.assign(actions, extend);
}

export function CrudGetters<ModuleState, RootState>(extend?: GetterTree<ModuleState, IRootState>): GetterTree<ModuleState, IRootState> {
  const getters = BaseGetters<ModuleState, IRootState>();

  return Object.assign(getters, extend);
}

export function CrudMutations<ModuleState = ICrudState, R = IRootState>(extend?: MutationTree<ModuleState>, types: ICrudMutationTypes = TYPE_DEFAULTS): MutationTree<ModuleState> {
  const mutations = BaseMutations<ICrudState, R>(
    {
      [types.DELETE](state, {id}) {
        state.list.items = state.list.items.filter((x: any) => x.id !== id);
      }
    }, types);

  return Object.assign(mutations, extend);
}
