<template>
	<div class="header__wrap">
		<header class="header">
			<div class="header__logo">
				<router-link to="/">홈으로</router-link>
			</div>
			<nav class="nav">
				<ul>
					<li v-for="(item, i) in navMenu" :key="i" class="nav__menu">
						<router-link :to="item.to">{{ item.title }}</router-link>
						<ul class="nav__menu__depth2" v-if="item.children">
							<li v-for="(subItem, i) in item.children" :key="i">
								<router-link :to="subItem.to">{{ subItem.title }}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<ul class="util">
				<li>
					<a href="">회원가입</a>
				</li>
				<li>
					<a href="">로그인</a>
				</li>
				<li>
					<router-link to="/PubGuides" class="btn__pub">퍼블 리스트 가기</router-link>
				</li>
			</ul>
		</header>
	</div>
</template>

<script>
import navMenu from './nav'

export default {
    name: 'DefaultHeader',
	data() {
		return {
			navMenu
		}
	}
}
</script>

<style>

</style>