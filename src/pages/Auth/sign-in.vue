<template>
  <form @submit.prevent="signIn" id="sign-in">
    <div class="desc">Sign into your account</div>
    <div class="form-group no-mg">
      <div class="button js-ggso" ref="ggso" @click="googleSignIn">Sign in with Google</div>
    </div>
    <div class="or"><span>or</span></div>
    <div class="form-group">
      <input v-model="form.email" v-validate="'required|email'" autocomplete="current-email" type="email"
             placeholder="Email" aria-label="Email Address">
    </div>
    <div class="form-group pass-group">
      <input v-model="form.password" v-validate="'required|min:6'" autocomplete="current-password" :type="passType"
             placeholder="Password" aria-label="Password">
      <svg @mousedown="passType = 'text'" @mouseup="passType = 'password'">
        <use xlink:href="#eye"></use>
      </svg>
    </div>
    <button :class="{processing}" type="submit">Sign in</button>
    <div class="form-group">
      <div class="actions">
        <router-link class="action" :to="{name: 'auth.sign-up'}">New here? Sign Up</router-link>
        <router-link class="action" :to="{name: 'auth.reset'}">Forgot your password?</router-link>
      </div>
    </div>
  </form>
</template>

<script>

  export default {
    name: 'sign-in',
    data() {
      return {
        form: {
          email: '',
          password: '',
          provider: 'email'
        },
        passType: 'password',
        processing: false
      };
    },
    methods: {
      signIn() {
        if (!this.processing) {
          this.$validator.validateAll().then((valid) => {
            if (valid) {
              this.processing = true;
              this.$store.dispatch('auth/signIn', this.form)
                .then(() => this.$router.push({name: 'horses'}))
                .catch(this.errorHandler)
                .finally(() => this.processing = false);
            }
          });
        }
      },
      googleSignIn() {
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
  #sign-in {
    button {
      margin-bottom: .8em;
    }

    .actions {
      flex-direction: row;
    }
  }
</style>
