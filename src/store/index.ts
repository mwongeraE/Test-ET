import Vue from 'vue';
import Vuex from 'vuex';

// STORE MODULES
import { RootModule } from './root';
import { AuthModule } from './modules/auth';
import { HorsesModule } from './modules/horses';

Vue.use(Vuex);

export default new Vuex.Store({
  ...RootModule,
  modules: {
    auth: AuthModule,
    horses: HorsesModule
  }
});
