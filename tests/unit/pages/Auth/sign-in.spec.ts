import { createLocalVue, shallowMount, ThisTypedShallowMountOptions } from '@vue/test-utils';
import SignIn from '@/pages/Auth/sign-in.vue';
import Vuex, { ActionTree, Store } from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const mountOpts: ThisTypedShallowMountOptions<any> = {
  directives: {
    validate: jest.fn()
  },
  stubs: ['router-link'],
  data() {
    return {
      processing: false,
      form: {}
    };
  },
  mocks: {
    $validator: {
      validateAll: jest.fn(() => Promise.resolve(true))
    },
    $router: { push: jest.fn(() => true) }
  }
};

describe('Sign In Page', () => {
  let actions: ActionTree<any, any>;
  let store: Store<any>;

  beforeEach(() => {
    actions = {
      'auth/signIn': jest.fn(() => Promise.resolve({ onBoarded: true })),
      'auth/authWithGoogle': jest.fn(() => Promise.resolve({ onBoarded: true }))
    };
    store = new Vuex.Store<any>({ actions });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch sign in action', (done) => {
    const wrapper = shallowMount(SignIn, Object.assign({ localVue, store }, mountOpts));

    wrapper.find('button').trigger('submit');

    wrapper.vm.$nextTick(() => {
      expect(actions['auth/signIn']).toHaveBeenCalled();
      done();
    });
  });

  it('should not sign in if form is invalid', (done) => {
    const wrapper = shallowMount(SignIn, Object.assign({ localVue, store, ...mountOpts }, {
      mocks: {
        $validator: {
          validateAll: jest.fn(() => Promise.resolve(false))
        }
      }
    }));

    wrapper.find('button').trigger('submit');

    wrapper.vm.$nextTick(() => {
      expect(actions['auth/signIn']).not.toHaveBeenCalled();
      done();
    });
  });

  it('should dispatch authenticate With Google action', (done) => {
    const wrapper = shallowMount(SignIn, Object.assign({ localVue, store }, mountOpts));

    wrapper.findComponent({ ref: 'ggso' }).trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(actions['auth/authWithGoogle']).toHaveBeenCalled();
      done();
    });
  });
});
