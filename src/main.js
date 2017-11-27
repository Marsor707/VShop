import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import OrderListPage from './pages/orderList.vue'
import DetailAnyPage from './pages/detail/analysis.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailPubPage from './pages/detail/publish.vue'
import store from './store'

Vue.use(VueRouter)
Vue.prototype.$http = Axios

let router = new VueRouter({
  mode: 'history',
  base: '/vshop/',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'analysis',
          component: DetailAnyPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }

      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: {Layout}
})
