<template>
  <div class="wrap">
    <HeaderCmp />      
    <WorkList />   
  </div>
</template>

<script>

import HeaderCmp from '../cmp/Header.vue'
import WorkList from '../cmp/WorkList.vue'

export default {
    name: 'PubGuides',
    components: {
        HeaderCmp,
        WorkList     
    },
    metaInfo: {
      title: 'Publishing Guides'
    } 
}
</script>

<style lang="scss">
@import url('@/assets/scss/common/guide.scss');
</style>