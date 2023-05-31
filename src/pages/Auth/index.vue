<template>
  <div class="wrp">
    <div id="auth_pg">
      <svg class="rect r1">
        <use href="#rect"/>
      </svg>
      <svg class="rect r2">
        <use href="#rect"/>
      </svg>
      <svg class="rect r3">
        <use href="#rect"/>
      </svg>
      <div class="form">
        <div class="header">
          <div class="logo-cnt">
            <div class="logo"></div>
          </div>
          <div class="ttls">
            <template v-if="isSignUp">
              <h4>Welcome</h4>
              <div class="desc">Sign up & Get started</div>
            </template>
            <template v-else>
              <h4>Welcome Back</h4>
              <div class="desc">Sign in to continue</div>
            </template>
          </div>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    computed: {
      isSignUp() {
        return this.$route.name === 'auth.sign-up';
      }
    }
  };
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  #auth_pg {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 1rem 1rem calc(.2em + 30px);

    .rect {
      position: absolute;

      &.r1 {
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        transform: translate3d(-30px, -60px, 0);
      }

      &.r2 {
        top: 50%;
        right: 0;
        height: 50px;
        width: 50px;
        transform: rotate(45deg) translate3d(-20px, -50px, 0);
      }

      &.r3 {
        left: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        transform: rotate(5deg) translate3d(-30px, 10px, 0);
      }
    }

    .form {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-top: 6rem;
      padding-bottom: 0;

      .form-group.btn {
        margin-top: 1.3rem;
      }
    }

    .logo-cnt {
      margin-bottom: 2rem;
      --bw: 10px;

      .logo {
        width: 50px;
        height: 50px;
      }
    }

    .ttls {

      h3, h4 {
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .desc {
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 500;
        margin-bottom: 1.1em;
      }
    }

    .js-ggso {
      color: #6d6f71;
      font-size: 1em;
      background-color: #FFFFFF;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
    }

    .actions {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      padding: .1em 0;

      span, a {
        margin: auto 0;
        font-size: .85em;
        font-weight: 600;
        text-transform: uppercase;
        color: #343434;
        cursor: pointer;
      }
    }

    .pass-group {
      margin-bottom: 1.6rem;

      svg {
        color: #555555;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 30px auto auto;
        margin-right: 10px;
        height: 18px;
        width: 18px;
      }
    }

    .auth-error {
      position: absolute;
      left: 0;
      right: 0;
      color: white;
      height: 38px;
      bottom: -100px;
      background-color: #ff3442;
      display: flex;
      font-weight: 400;
      font-size: .88em;
      align-items: center;
      padding-bottom: .1em;
      justify-content: center;
      width: 100%;
      margin: auto;
      max-width: 380px;
      border-radius: 2px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
      transition: bottom .3s ease-in-out;

      &.active {
        bottom: 27px;
      }
    }
  }

  body.drk {
    #auth_pg {
      .actions span, .actions a {
        color: $text-main-drk;
        font-weight: 500;
      }
    }
  }
</style>
