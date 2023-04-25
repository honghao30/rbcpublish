<template>
  <div class="ui-guide__wrap">
    <SubTitle pagetitle="UI 템플릿" />
    <TitleH3 titleh3="BEM 예시" />
    <TitleH3 titleh3="TypoGraphy" />
    <TypoGraphy />
    <TitleH3 titleh3="Table" />
    <TableGuide />
    <TitleH3 titleh3="버튼 & 아이콘" />
    <ButtonGuide />
    <TitleH3 titleh3="Form" />
    <FormGuide />
  </div>
</template>

<script>
import SubTitle from '@/views/guide/cmp/SubTitle.vue'
import TitleH3 from '@/views/guide/cmp/TitleH3.vue'
import TypoGraphy from '@/views/guide/ui_temp/TypoGuide.vue'
import TableGuide from '@/views/guide/ui_temp/tableCmp.vue'
import ButtonGuide from '@/views/guide/ui_temp/ButtonGuide.vue'
import FormGuide from '@/views/guide/ui_temp/FormGuide.vue'

export default {
    name: 'BasicGuide',
    components: {
        SubTitle,
        TitleH3,
        TypoGraphy,
        TableGuide,
        ButtonGuide,
        FormGuide
    }
}
</script>

<style lang="scss">
@import url('@/assets/scss/common/guide.scss');
.ui-guide__wrap {
  padding:20px;
  .wsg-guide-header {
    margin:20px 0;
  }
}
</style>