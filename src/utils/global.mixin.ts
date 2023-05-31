import { VueConstructor } from 'vue';
import { slugify } from '@/utils';

interface IGeneralMixin {
  drk: boolean;
  mobMq: MediaQueryList | null;
  drkMq: MediaQueryList | null;
  isOnline: boolean;
  isMobile: boolean;
}

export function registerGlobalMixin(Vue: VueConstructor) {
  const extension = Vue.extend<IGeneralMixin, any, any>({
    data() {
      return {
        drk: true,
        mobMq: null,
        drkMq: null,
        isOnline: true,
        isMobile: false
      };
    },
    mounted() {
      if (typeof window !== 'undefined') {
        this.mobMq = window.matchMedia('(max-width: 740px)');
        this.drkMq = window.matchMedia('(prefers-color-scheme: dark)');

        const onlineHandler = () => this.isOnline = true;
        const offlineHandler = () => this.isOnline = false;
        const isMobileHandler = () => this.isMobile = this.mobMq.matches;

        isMobileHandler();
        this.prefersDark();
        window.addEventListener('online', onlineHandler);
        window.addEventListener('offline', offlineHandler);
        if (this.mobMq) this.mobMq.addEventListener('change', isMobileHandler);

        this.$once('hook:beforeDestroy', () => {
          window.removeEventListener('online', onlineHandler);
          window.removeEventListener('offline', offlineHandler);
          if (this.mobMq) this.mobMq.removeEventListener('change', isMobileHandler);
        });
      }
    },
    methods: {
      prefersDark() {
        // this.drk = this.drk_st.matches;
        document.body.classList[this.drk ? 'add' : 'add']('drk');
        // document.body.classList[this.drk ? 'add' : 'remove']('drk');
      },
      duplicate(obj: object) {
        return Object.assign({}, obj);
      },
      slugify({ target }: any, obj: any, key?: string) {
        const value = target.value;
        if (value) return obj[key || 'slug'] = slugify(value);
      },
      unSpace({ target }: any, obj: any, key?: string) {
        const value = target.value;
        if (value) return obj[key || 'slug'] = value.replace(/ /g, '');
      },
      toArray({ target }: any, obj: any, key: string) {
        const value = target.value;
        if (value) return obj[key] = value.replace(/ /g, '').split(',');
      }
    }
  });

  Vue.mixin(extension);
}
