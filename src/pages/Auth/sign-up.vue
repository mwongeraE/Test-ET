<template>
  <form @submit.prevent="signUp" id="sign-up">
    <div class="form-group no-mg">
      <div class="button js-ggso" ref="ggso" @click="googleSignUp">Continue with Google</div>
    </div>
    <div class="or"><span>or</span></div>
    <div class="form-group">
      <input class="r" autocomplete="username" v-validate="'required|min:4'" name="username" v-model="form.username"
             type="text" placeholder="Name">
    </div>
    <div class="form-group">
      <input v-model="form.email" v-validate="'required|email'" name="email" autocomplete="current-email" type="email"
             placeholder="Email">
    </div>
    <div class="form-group pass-group">
      <input autocomplete="current-password" name="password" v-model="form.password"
             :type="passType" v-validate="'required|min:8'"
             placeholder="Password (min 8 characters)">
      <svg @mousedown="passType = 'text'" @mouseup="passType = 'password'">
        <use xlink:href="#eye"></use>
      </svg>
    </div>
    <div class="form-group">
      <input type="checkbox" id="mail-opt" v-model="form.mailOptIn">
      <label for="mail-opt">Send me updates</label>
    </div>
    <div class="form-group">
      <button :class="{processing}" type="submit">Sign Up</button>
    </div>
    <div class="form-group disclaimer">
      By registering an account you agree to our
      <a href="https://inter.brr.ng/privacy" target="_blank">Privacy Policy</a> and <a
        href="https://inter.brr.ng/terms" target="_blank">Terms of Service</a>
    </div>
    <div class="rw center-xs">
      <div class="cl-8">
        <div class="actions">
          <router-link :to="{name: 'auth.sign-in'}">Already have an account? Sign In</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'sign-up',
    data() {
      return {
        passType: 'password',
        form: {
          username: '',
          email: '',
          password: '',
          mailOptIn: false,
          provider: 'email'
        },
        processing: false
      };
    },
    methods: {
      signUp() {
        if (!this.processing) {
          this.$validator.validateAll().then((valid) => {
            if (valid) {
              this.processing = true;
              this.$store.dispatch('auth/signUp', this.form)
                .then(() => this.$router.push({name: 'horses'}))
                .catch(this.errorHandler)
                .finally(() => this.processing = false);
            }
          });
        }
      },
      googleSignUp() {
        if (!this.processing) {
          this.processing = true;
          this.$store.dispatch('auth/authWithGoogle', true)
            .then(() => this.$router.push({name: 'horses'}))
            .catch(this.errorHandler)
            .finally(() => this.processing = false);
        }
      }
    }
  };
</script>

<style lang="scss">
  #sign-up {
    input {
      &.l {
        border-radius: 0 4px 4px 0;
      }

      &.r {
        border-radius: 4px 0 0 4px;
      }
    }

    input[type=checkbox] + label {
      color: #555555;
      font-weight: 500;
      font-size: .9em;
    }

    input[type=checkbox] + label:before {
      width: 18px;
      height: 18px;
      min-width: 18px;
      min-height: 18px;
      border-color: #9ba4ac;
    }

    input[type=checkbox] + label:after {
      left: 4px;
      top: 8px;
      background: #fff;
      width: 2px;
      height: 2px;
    }

    .disclaimer {
      margin-top: .8em;
      font-size: .86em;
      font-weight: 400;
      text-align: center;
      line-height: 1.6;

      a {
        font-size: .96em;
        text-decoration: underline;
      }
    }
  }
</style>
