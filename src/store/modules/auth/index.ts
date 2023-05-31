import { GetterTree, Module, MutationTree } from 'vuex';
import { IRootState, Storage } from '@/store/lib';
import * as types from './mutation.types';
import { IAuthState } from './auth.state';

import actions from './actions';

const getters: GetterTree<IAuthState, IRootState> = {
  user: ({ user }) => user
};

const mutations: MutationTree<IAuthState> = {
  [types.LOAD_ADMIN](state, { user, token }) {
    state.user = user;
    state.token = token;
    state.isAuthed = true;
    Storage.set('$tkn', token);
  },
  [types.SIGN_OUT](state) {
    state.user = null;
    state.token = null;
    state.isAuthed = false;
    Storage.remove('$tkn');
  }
};

export const AuthModule: Module<IAuthState, IRootState> = {
  namespaced: true,
  state: {
    user: {
      id: '342344-012393',
      uid: 'Udkjlfjewpiknjasdfla2312',
      phone: '+254790040083',
      email: 'john.doe@mail.com',
      username: 'John Doe'
    },
    token: null,
    isAuthed: true
  },
  actions,
  getters,
  mutations
};
