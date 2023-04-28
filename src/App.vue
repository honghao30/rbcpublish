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
      layout: DefaultLayout,
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
  @import "./assets/scss/components/ui/button.scss";  
  @import "./assets/scss/components/ui/form.scss";  
  @import "./assets/scss/components/ui/modal.scss";
  @import "./assets/scss/components/ui/tab.scss";  
  @import "./assets/scss/views/layout.scss";
  @import "./assets/scss/views/customer.scss";
  @import "./assets/scss/views/login.scss";
  @import "./assets/scss/views/join.scss";
  @import "element-ui/lib/theme-chalk/index.css";
</style>
