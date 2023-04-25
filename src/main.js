import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Meta from 'vue-meta';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko'

// name is optional
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(VueRouter)
Vue.use(Meta);
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
