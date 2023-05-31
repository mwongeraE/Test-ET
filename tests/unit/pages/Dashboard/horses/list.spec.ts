import { createLocalVue, shallowMount, ThisTypedShallowMountOptions } from '@vue/test-utils';
import HorseList from '@/pages/Dashboard/horses/list.vue';
import Vuex, { ActionTree, Store } from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Horse List Page', () => {
  let actions: ActionTree<any, any>;
  let store: Store<any>;
  const $router = { push: jest.fn(() => true) };

  const mountOpts: ThisTypedShallowMountOptions<any> = {
    directives: {
      validate: jest.fn()
    },
    stubs: ['router-link'],
    mocks: { $router }
  };

  beforeEach(() => {
    actions = {
      'horses/fetchAll': jest.fn(() => Promise.resolve([]))
    };
    store = new Vuex.Store<any>({ actions });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch a fetch all action', (done) => {
    const wrapper = shallowMount(HorseList, Object.assign({ localVue, store }, mountOpts));

    wrapper.vm.$nextTick(() => {
      expect(actions['horses/fetchAll']).toHaveBeenCalled();
      done();
    });
  });

  it('should navigate from the horse list page after clicking a list item', (done) => {
    const wrapper = shallowMount(HorseList, Object.assign({ localVue, store }, mountOpts));

    wrapper.vm.$nextTick(() => {
      expect($router.push).toHaveBeenCalled();
      done();
    });
  });
});
