<template>
  <div class="signup">
      <div class="signup-title__wrap--top">
        <PageTitle pagetitle="회원가입" />
        <p>회원가입 유형을 선택해주세요</p>
      </div>
      <div class="signup__wrap">
        <div class="signup-item">
          <div class="signup-item__tit">
            <p>서비스를 이용하고 있는 <span>기업 담당자</span> 인가요?</p>
          </div>
          <ul class="signup-item__des">
            <li>브랜드를 개설하고 관리할 수 있어요</li>
            <li>담당자를 초대하여 등록할 수 있어요</li>
          </ul>
          <div class="button__wrap">
            <ButtonCmp type="btn-blue btn-login">기업 담당자 회원가입</ButtonCmp>
          </div>
        </div>
        <div class="signup-item">
          <div class="signup-item__tit">
            <p>여러 서비스를 관리하고 있는 <span>대행사 담당자</span> 인가요?</p>
          </div>
          <ul class="signup-item__des">
            <li>기업 관리자로부터 브랜드 운영권한을 받아서 관리 할 수 있어요</li>
            <li>여러 회사의 서비스를 운영할 수 있어요</li>
          </ul>
          <div class="button__wrap">
            <ButtonCmp type="btn-blue btn-login">대행사 회원가입</ButtonCmp>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PageTitle from '@/components/common/PageTitle.vue';
import ButtonCmp from '@/components/common/ButtonCmp.vue' 
  export default {
    components: {
      PageTitle,
      ButtonCmp
    },
    data() {
      return {
      }
    },
    methods: {
     
    }
  }
</script>
