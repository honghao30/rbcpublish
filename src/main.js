import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Meta from 'vue-meta';

// name is optional
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(VueRouter)
Vue.use(Meta);

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
