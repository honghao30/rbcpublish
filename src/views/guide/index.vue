<template>
  <div class="wrap">
    <HeaderCmp />    
    <BasicSummary /> 
  </div>
</template>

<script>

import HeaderCmp from './cmp/Header.vue'
import BasicSummary from './cmp/BasicSummary.vue'

export default {
    name: 'PubGuides',
    components: {
        HeaderCmp,
        BasicSummary
    },
    metaInfo: {
      title: 'Publishing Guides'
    }
}
</script>

<style lang="scss">
@import url('@/assets/scss/common/guide.scss');
</style>