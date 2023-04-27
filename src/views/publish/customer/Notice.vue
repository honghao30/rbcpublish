<template>
  <div class="inner">
    <PageTitle pagetitle="공지사항" />
    <div class="category-tab">
      <ul>
        <li 
          v-for="(item, i) in category" 
          :key="i"
          :class="[{active: activeTabIndex === i}]"
        >
          <a role="button" @click="tabCtrl(i)"><span>{{ item }}</span></a>
        </li>
      </ul>
    </div>
    <SearchTable />
    <div class="table__wrap">
        <table class="table table-list">
          <colgroup>
            <col width="112px">
            <col>
            <col width="210px">
          </colgroup>  
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="">공지</span>  </td>
              <td><span class="l-align">[중요] RCS 메시지 발송 규격 추가 예정 안내</span></td>
              <td><span class="date">2023.04.25</span></td>
            </tr>
          </tbody>
        </table>
      </div>  
  </div>
</template>

<script>
import PageTitle from '@/components/common/PageTitle.vue'
import SearchTable from '@/components/common/SearchTable.vue'

export default {
    name: 'NoticeView',
    data() {
      return{
        category: ['전체','이벤트','시스템', '정책'],
        activeTabIndex: 0
      }
    },  
    components: {
      PageTitle,
      SearchTable
    },
    methods: {
      tabCtrl: function(num) {
        this.activeTabIndex = num;
      }
    }
}
</script>

<style>

</style>