<template>
  <div id="app">
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from './components/layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
  data() {
    return {
    };
  },
  watch: {
    
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/common/base.scss";
</style>
