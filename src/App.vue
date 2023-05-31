<template>
  <main>
    <symbols></symbols>
    <router-view></router-view>
  </main>
</template>

<script>
  import Symbols from './components/symbols';

  export default {
    name: 'app',
    components: {Symbols}
  };
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>
