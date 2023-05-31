import { Module } from 'vuex';
import { $post, client } from '@/services';
import { IHorseState } from './horse.state';
import { Context, CrudActions, CrudGetters, CrudMutations, CrudState, IRootState } from '@/store/lib';

export { MN_HORSES } from './mutation.types';

export const HorsesModule: Module<IHorseState, IRootState> = {
  namespaced: true,
  state: CrudState({
    globFilter: {
      // Overrides global filter key
      key: 'active',
      value: 'ALL'
    }
  }),
  actions: CrudActions<IHorseState, IRootState>({
    client,
    primKey: 'id',
    endpoint: 'horseList'
  }, {
    buy(ctx: Context<IHorseState>, { id }) {
      return $post(`horses/${id}/buy`);
    }
  }),
  getters: CrudGetters<IHorseState, IRootState>(),
  mutations: CrudMutations<IHorseState, IRootState>()
};
