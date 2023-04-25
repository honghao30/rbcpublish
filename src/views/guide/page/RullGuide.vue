<template>
  <PubRull /> 
</template>

<script>
import PubRull from '../cmp/PubRull.vue'

export default {
    name: 'PubGuides',
    components: {        
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