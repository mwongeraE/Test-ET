import { IRootState } from '@/store/lib';
import { ActionTree, GetterTree, MutationTree } from 'vuex';

const types = {
  INIT_STORE: 'INIT_STORE'
};

const state: IRootState = {
  config: {},
  version: process.env.VERSION || '0.0.1',
  initialized: false
};

const getters: GetterTree<IRootState, IRootState> = {
  initialized: ({ initialized }) => initialized
};

const actions: ActionTree<IRootState, IRootState> = {
  load({ state, commit }) {
    if (!state.initialized) {
      return commit(types.INIT_STORE);
    }
  }
};

const mutations: MutationTree<IRootState> = {
  [types.INIT_STORE](state) {
    state.initialized = true;
  }
};

export const RootModule = {
  state,
  getters,
  actions,
  mutations
};
