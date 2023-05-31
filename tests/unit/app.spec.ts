import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('is a valid vue instance', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
