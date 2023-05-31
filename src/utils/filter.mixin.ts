import Vue from 'vue';

type Group = 'horses';

interface IFilterForm {
  by: string;
  value: string;
  operator: string;
}

export default Vue.extend({
  watch: {
    'filter.open'(open) {
      if (open) {
        window.addEventListener('click', this.clickMon);
      } else {
        window.removeEventListener('click', this.clickMon);
      }
    }
  },
  data() {
    return {
      elId: null,
      filter: {
        open: false,
        opts: {
          horses: [
            {label: 'Name', v: 'name', ops: 'eq'},
            {label: 'Active', v: 'active', ops: 'eq'}
          ]
        },
        ops: [],
        form: {
          by: '',
          operator: 'eq',
          value: ''
        },
        active: []
      }
    };
  },
  mounted() {
    this.elId = (this as any)._uid;
  },
  methods: {
    byChange(opt: { ops: string | string[], v: string }) {
      if (typeof opt.ops === 'string') {
        (this.filter.ops as string[]) = [opt.ops];
      } else if (Array.isArray(opt.ops)) {
        (this.filter.ops as string[]) = opt.ops;
      }

      if (this.filter.ops.length === 1) {
        this.filter.form.operator = this.filter.ops[0];
      }
      this.filter.form.by = opt.v;
    },
    selectOp(op: string) {
      this.filter.form.operator = op;
    },
    async addFilter(group: Group) {
      const {form, active} = this.filter as { active: IFilterForm[], form: IFilterForm };

      if (!form.by || !form.operator || !form.value) {
        return;
      }

      active.push(form);

      const filter: any = {};
      active.forEach((f: { operator: string, by: string, value: string }) => {
        if (!filter.hasOwnProperty(f.operator)) {
          filter[f.operator] = {[f.by]: f.value};
        } else {
          filter[f.operator][f.by] = f.value;
        }
      });

      this.$store.dispatch(`${group}/fetchAll`, {filter});

      this.filter.form = {
        by: '',
        operator: 'eq',
        value: ''
      };
    },
    clear(group: Group) {
      this.filter.active = [];
      this.$store.dispatch(`${group}/fetchAll`);
    },
    clickMon(ev: any) {
      const inFilter = ev.path.some((x: HTMLElement) => x.id === `flt-${this.elId}`);
      if (!inFilter) {
        this.filter.open = false;
      }
    },
    beforeDestroy(): void {
      window.removeEventListener('click', this.clickMon);
    }
  }
});
