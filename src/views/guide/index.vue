<template>
   <BasicSummary /> 
</template>

<script>
import BasicSummary from './cmp/BasicSummary.vue'

export default {
    name: 'PubGuides',
    components: {        
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