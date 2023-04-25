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
        <div class="tab__wrap">
          <ul class="tab-list">
            <li v-for="(item, i) in loginTab" :key=i class="tab-item" :class="[{active: currentTab === i}]">
                <a role="button" 
                    @click="tabCtrl(i)" 
                    :tabindex="[currentTab === i ? 0 : -1]"
                    >
                    {{ item }}
                </a>
            </li>
          </ul>
          <div class="tab-contents" v-if="currentTab == 0">
              tab1 내용
          </div>
          <div class="tab-contents" v-if="currentTab == 1">
              tab2 내용
          </div>
        </div>      
      </div>        
  </div>
</template>

<script>
import TitleH3 from '../cmp/TitleH3.vue'

export default {
  data() {
    return {
      currentTab : 0,
      loginTab: ['아이디 찾기', '비밀번호 찾기']
    }
  },
  components: {
    TitleH3
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