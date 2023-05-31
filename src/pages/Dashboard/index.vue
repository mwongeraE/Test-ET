<template>
  <div id="d">
    <top-nav></top-nav>
    <aside-nav></aside-nav>
    <div id="core">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/dashboard/top-nav.vue';
import AsideNav from '@/components/dashboard/aside-nav.vue';

export default {
  name: 'dashboard',
  components: { AsideNav, TopNav }
};
</script>

<style lang="scss">
@import "~@/assets/styles/_variables";

#d {
  height: 100%;
}

#core {
  position: absolute;
  top: $nav-height;
  left: $aside-width;
  min-height: calc(100% - #{$nav-height});
  width: calc(100% - #{$aside-width});
  background-color: #F7F7F7;
  padding: 3rem 40px;

  /*Global dashboard styles*/

  .page-title {
    font-weight: 500;
  }

  .icon {
    height: 13px;
    width: 13px;
    margin-right: .2em;
    display: inline-block;
    border: 1.4px solid #6d6f71;
    border-radius: 1px;
  }

  .inline-header-group {
    margin: 2rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .inline-header__title {
      font-size: 1.6em;
    }

    .inline-header__cta {
      font-size: .9rem;
    }
  }

  .filter-section {
    padding: 1rem 0;
    padding-bottom: 0;

    .filter-btn {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #8D8B8B;
      cursor: pointer;
      border-radius: 3px 0 0 3px;
    }

    .c-split {
      margin-bottom: 1.2em;
    }

    .filter-tabs {
      display: flex;
      align-items: center;
      border-bottom: 1.6px solid transparent;

      .tab {
        min-height: 20px;
        font-size: 1.1em;
        margin-right: .3rem;
        padding: .4rem .6rem;
        cursor: pointer;

        &.active {
          border-bottom: 1.6px solid #343434;
        }
      }
    }
  }
}
</style>
