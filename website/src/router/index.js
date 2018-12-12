import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Homepage from '../pages/Homepage'
import Contributorspage from '../pages/Contributorspage'
import Aboutpage from '../pages/Aboutpage'

Vue.use(Router)
Vue.use(Head, { separator: '-', complement: 'PreMiD' })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: Contributorspage,
    },
    {
      path: '/about',
      name: 'About',
      component: Aboutpage,
    }
  ]
})
