<template>
  <ul class="tabs">
    <li v-for="tab in tabList" class="tab">
      <div v-if="!tab.linkName" @click="changeTab(tab)" class="tab__inner" :class="{active: currentTab === tab.label}">
        {{tab.label}}
      </div>
      <router-link v-else class="tab__inner" :to="getLink(tab)">{{tab.label}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      value: {
        default: null
      },
      tabList: {
        type: Array,
        required: true
      },
      onTabChange: {
        type: Function
      }
    },
    computed: {
      currentTab() {
        if (this.tabList) {
          return this.activeTab ? this.activeTab : this.tabList[0].label;
        }
      }
    },
    data() {
      return {
        activeTab: null
      };
    },
    methods: {
      getLink(tab) {
        return {
          name: tab.linkName || 'dashboard',
          params: tab.params || undefined
        };
      },
      changeTab(tab) {
        this.activeTab = tab.label;
        this.$emit('input', tab);
        if (this.onTabChange) this.onTabChange(tab);
      }
    }
  };
</script>

<style lang="scss">
  ul.tabs {
    margin-top: 6px;
    margin-bottom: 1.2rem;
    width: 100%;
    border-bottom: 2px solid #f1f1f1;
    list-style: none;

    li.tab {
      display: inline-block;
      margin: 0 22px -2px 0;
      height: 38px;
      line-height: 36px;

      .tab__inner {
        font-weight: 600;
        color: #999;
        text-transform: uppercase;
        cursor: pointer;
        font-size: .74em;
        border-bottom: none;
        display: block;

        &.router-link-active, &.active {
          border-bottom: 2px solid rgba(0, 0, 0, 0.4);
          color: #555;
        }
      }
    }
  }
</style>

