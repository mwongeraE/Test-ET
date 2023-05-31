<template>
  <nav id="top-nav">
    <div class="logo-cnt">
      <div class="logo">B</div>
    </div>
    <div class="user-cnt">
      <figure class="user-avatar" :title="`${user.username}\'s Profile`">
        <div class="let">{{ user.username.charAt(0) }}</div>
      </figure>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'top-nav',
  computed: mapGetters({
    user: 'auth/user'
  })
};
</script>

<style lang="scss">
@import "~@/assets/styles/_variables.scss";

nav#top-nav {
  display: flex;

  .logo-cnt, .name-cnt {
    width: $aside-width;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    --logo-w: 32px;

    .logo {
      width: var(--logo-w);
      height: var(--logo-w);
      min-width: var(--logo-w);
      border-radius: 2px;
      color: gray;
      display: flex;
      font-size: .875rem;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      background-color: whitesmoke;
    }
  }

  .name-cnt {
    width: calc(#{$aside-width} + 80px);

    .logo {

      svg {
        --s-w: 12px;
        width: var(--s-w);
        min-width: var(--s-w);
        height: var(--s-w);
      }
    }

    .name-form {
      width: 100%;
      display: flex;
      margin-left: 1rem;
      height: var(--logo-w);
      flex-direction: column;
      justify-content: space-between;

      input {
        border: none;
        height: 20px;
        padding: 0;
        display: flex;
        font-size: 16px;
        font-weight: 500;
        align-items: center;
        font-family: inherit;
        outline: none;
      }

      .sub-ttl {
        font-size: 10px;
      }
    }
  }

  .user-cnt {
    width: $aside-width + 20px;
    background-color: white;
    display: flex;
    margin-left: auto;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 20px;
    align-items: center;
    cursor: pointer;
    transition: background-color .2s ease;

    &:hover {
      background-color: whitesmoke;
    }

    .user-avatar {
      border: $border;
      cursor: pointer;
      border-radius: 50%;
      height: 34px;
      width: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 auto;

      .let {
        line-height: 1;
        text-transform: uppercase;
      }
    }

    .ico {
      margin-right: .875rem;
      width: 24px;
      height: 24px;
      background-color: #D4D4D4;
    }
  }
}
</style>
