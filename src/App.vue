<template>
  <div id="app">
    <component :is="layout" />
    <!-- <DefaultLayout /> -->
  </div>
</template>

<script>
import DefaultLayout from './components/layout/DefaultLayout.vue'
import GuideLayout from './components/layout/GuideLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
    GuideLayout
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "DefaultLayout";
      }
    },
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/common/base.scss";
  @import "./assets/scss/common/_variables.scss";
  @import "./assets/scss/components/ui/table.scss";  
  @import "./assets/scss/components/ui/typography.scss";  
  @import "./assets/scss/components/ui/form.scss";  
  @import "element-ui/lib/theme-chalk/index.css";
</style>
