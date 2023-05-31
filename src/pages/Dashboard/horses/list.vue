<template>
  <div id="horses-list">
    <header>
      <div class="title-bar rw">
        <div class="cl-4">
          <div class="title-bar__main-group">
            <h1 class="title-bar__title">Horses</h1>
          </div>
        </div>
      </div>
      <div class="tabs-bar">
        <tabs :tabList="tabs.list" :on-tab-change="tabChange" v-model="tabs.active"></tabs>
        <div class="tab-ctas">
          <div class="filter-cta" id="filter-form">
            <div class="button">
              <span class="txt">Filter</span>
              <span class="icon-cnt">
                <svg>
                  <use href="#filter"/>
                </svg>
              </span>
            </div>
          </div>
          <div class="action-cta">
            <div class="button">
              <svg>
                <use href="#plus"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Tabs from '@/components/blocks/tabs';

export default {
  name: 'horses-list',
  components: { Tabs },
  data() {
    return {
      tabs: {
        list: [
          { label: 'ALL', v: 'ALL' },
          { label: 'ACTIVE', v: true },
          { label: 'INACTIVE', v: false }
        ],
        active: { label: 'ALL' }
      }
    };
  },
  methods: {
    tabChange(tab) {
    }
  }
};
</script>

<style lang="scss">
#horses-list {
}
</style>
