<template>
  <div class="tmep__wrap">
      <div class="wsg-guide-content">
        <div class="wsg-note__wrap--gray-box">
          <ul class="wsg_desc">
            <li>Tab 요소에 대한 기본 정의 내용 입니다.</li>
          </ul>
        </div>
      </div>
      <TitleH3 titleh3="Tab" />
      <div class="wsg-guide-content">
        <TabCmp>
          <TabItem title="Tab1">
            <div>Tab1 내용</div>
          </TabItem>
          <TabItem title="Tab2">
            <div>Tab2 내용</div>
          </TabItem>
        </TabCmp>
      </div>        
  </div>
</template>

<script>
import TitleH3 from '../cmp/TitleH3.vue'
import TabCmp from '../../../components/common/TabCmp.vue'
import TabItem from '../../../components/common/TabItem.vue'

export default {
  data() {
    return {
      currentTab : 0,
    }
  },
  components: {
    TitleH3,
    TabCmp,
    TabItem
  },
  methods: {
    tabCtrl: function(num) {
        this.currentTab = num;
        this.collapseIdx = NaN
    },
  }

}
</script>

<style lang="scss">
.text {
    font-size:16px;
    max-width: 50%;
    margin:20px 0;
  }
  .long-text {
    font-size:16px;
    max-width: 40%;
    margin:20px 0;
  }
</style>