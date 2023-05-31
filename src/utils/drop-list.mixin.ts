import Vue from 'vue';

export default Vue.extend({
  watch: {
    dropListItem(id) {
      if (typeof id === 'string') {
        window.addEventListener('click', this.clickCheck);
      } else {
        window.removeEventListener('click', this.clickCheck);
      }
    }
  },
  data() {
    return {
      dropListItem: null
    };
  },
  methods: {
    toggleDropList(id: string) {
      if (this.dropListItem === id) {
        (this.dropListItem as null | string) = null;
      } else {
        (this.dropListItem as null | string) = id;
      }
    },
    clickCheck(ev: any) {
      const inFilter = ev.path.some((x: HTMLElement) => x.id === this.dropListItem);
      if (!inFilter) {
        this.dropListItem = null;
      }
    }
  },
  beforeDestroy(): void {
    window.removeEventListener('click', this.clickCheck);
  }
});
