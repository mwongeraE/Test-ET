import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VeeValidate from 'vee-validate';
import { registerGlobalMixin } from './utils/global.mixin';
import { registerGlobalFilter } from './utils/global.filter';

//  MIXINS, FILTERS AND PLUGINS
registerGlobalMixin(Vue);
registerGlobalFilter(Vue);
Vue.use(VeeValidate);

// VUE SETUP
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h: any) => h(App)
}).$mount('main');
