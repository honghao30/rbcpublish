<template>
  <div class="wrap">
    <HeaderCmp /> 
    <PubRull />        
  </div>
</template>

<script>

import HeaderCmp from '../cmp/Header.vue'
import PubRull from '../cmp/PubRull.vue'

export default {
    name: 'PubGuides',
    components: {
        HeaderCmp,
        PubRull
    },
    metaInfo: {
      title: 'Publishing Guides'
    }    
}
</script>

<style lang="scss">
@import url('@/assets/scss/common/guide.scss');
</style>