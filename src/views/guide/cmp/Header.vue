<template>
  <div class="header__wrap">
    <header class="header">
      <div class="header__logo">
		<h1>
      <router-link to="/PubGuides/">
        RBC 퍼블리싱 가이드
      </router-link>
		</h1>
      </div>
      <ul class="header__util-menu--right">
        <li>
              <router-link 
          to="/PubGuides/" 
          class="btn__pub is-active"
              >
          개요
              </router-link>
        </li>					
        <li>
            <router-link 
                to="/RullGuide" 
                class="btn__pub"
            >
                규칙 & 설계
              </router-link>
        </li>
        <li>
            <router-link 
                to="/UiGuides" 
                class="btn__pub"
            >
                UI 가이드
              </router-link>
        </li>        	
        <li>
              <router-link
                to="/PubList"
                class="btn__pub">
                  퍼블 리스트
              </router-link>
        </li>
    </ul>
	</header>
  </div>
</template>

<script>
export default {
    name: 'DefaultHeader'
}
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/common/guide.scss');
</style>