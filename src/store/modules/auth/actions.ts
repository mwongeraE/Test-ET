import { ActionTree } from 'vuex';
import { IRootState } from '@/store/lib';
import { IAuthState } from './auth.state';
import * as types from './mutation.types';
import { $post, FireAuth, FireFuncs, googleAuthProvider } from '@/services';

declare const mixpanel: {
  track: (ev: string, obj: any) => void;
  reset: () => void;
};

interface IAuthenticatedUser {
  token: string;
}

const VagueErrorMsg = 'Oops, An issue occurred, please try again later.';

const actions: ActionTree<IAuthState, IRootState> = {

  // AUTHENTICATION STATE INITIALIZER

  load({ dispatch, state }) {
    return new Promise(((resolve, reject) => {
      if (state.isAuthed) {
        resolve();
      } else {
        const unsub = FireAuth.onAuthStateChanged(async user => {
          if (user) {
            const token = await user.getIdToken();
            await dispatch('getUserData', { token });
            unsub();
            resolve();
          } else {
            reject({ code: 401, message: 'Unauthorized' });
          }
        });
      }
    }));
  },


  // FEDERATED AUTHENTICATION

  authWithGoogle({ dispatch }) {
    return new Promise((resolve, reject) => {
      FireAuth.signInWithPopup(googleAuthProvider)
        .then(async (res) => {
          if (res.user) {
            const token = await res.user.getIdToken();
            const user: IAuthenticatedUser = await dispatch('getUserData', { token });
            resolve(user);
          } else {
            reject(VagueErrorMsg);
          }
        })
        .catch(reject);
    });
  },


  // EMAIL AND PASS AUTHENTICATION

  signIn({ dispatch }, { email, password }) {
    return new Promise((resolve, reject) => {
      FireAuth.signInWithEmailAndPassword(email, password)
        .then(async (res) => {
          if (res.user) {
            const token = await res.user.getIdToken();
            const user: IAuthenticatedUser = await dispatch('getUserData', { token });
            resolve(user);
          } else {
            reject(VagueErrorMsg);
          }
        }).catch(reject);
    });
  },
  async signUp({ commit, dispatch }, form) {
    return new Promise(async (resolve, reject) => {
      const create = FireFuncs.httpsCallable('accountCreate');
      let data: { token: string };

      try {
        const result = await create(form);
        data = result.data;
      } catch (e) {
        return reject(e.message);
      }

      if (!data.token) {
        return reject(VagueErrorMsg);
      }

      const userCredential = await FireAuth.signInWithCustomToken(data.token);
      if (userCredential.user) {
        const user: IAuthenticatedUser = await dispatch('getUserData', { token: await userCredential.user.getIdToken() });
        resolve(user);
      } else {
        reject(VagueErrorMsg);
      }
    });
  },
  resetPassword({ commit }, email) {
    return FireAuth.sendPasswordResetEmail(email);
  },


  // GENERAL AUTHENTICATION ACTIONS

  getUserData({ commit }, { token }) {
    return $post('auth', { token }, { skipToken: true })
      .then(res => {
        if (res.admin) {
          commit(types.LOAD_ADMIN, res);
          return res.admin;
        } else {
          throw VagueErrorMsg;
        }
      }).catch(err => {
        throw err.message || err;
      });
  },
  signOut({ commit }) {
    if (typeof mixpanel !== 'undefined') {
      mixpanel.reset();
    }
    return FireAuth.signOut().then(() => commit(types.SIGN_OUT));
  }
};

export default actions;
