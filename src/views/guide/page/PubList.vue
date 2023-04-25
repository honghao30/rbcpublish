<template>
    <WorkList />  
</template>

<script>
import WorkList from '../cmp/WorkList.vue'

export default {
    name: 'PubGuides',
    components: {        
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