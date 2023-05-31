import { createLocalVue, shallowMount, ThisTypedShallowMountOptions } from '@vue/test-utils';
import HorseView from '@/pages/Dashboard/horses/view.vue';
import Vuex, { ActionTree, Store } from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const mountOpts: ThisTypedShallowMountOptions<any> = {
  directives: {
    validate: jest.fn()
  },
  stubs: ['router-link'],
  mocks: {
    $router: {
      push: jest.fn(() => true)
    }
  }
};

describe('Horse View Page', () => {
  let actions: ActionTree<any, any>;
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      'horses/fetchOneLocal': jest.fn(() => Promise.resolve({}))
    };
    store = new Vuex.Store<any>({ actions });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch a fetch one action', (done) => {
    const wrapper = shallowMount(HorseView, Object.assign({ localVue, store }, mountOpts));

    wrapper.vm.$nextTick(() => {
      expect(actions['horses/fetchOneLocal']).toHaveBeenCalled();
      done();
    });
  });
});
