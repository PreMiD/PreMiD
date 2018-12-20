import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Homepage from '../pages/Homepage'
import Contributorspage from '../pages/Contributorspage'
import Aboutpage from '../pages/Aboutpage'
import Storepage from '../pages/Store'
import StoreDashboard from '../pages/StoreDashboard'
import StoreInstall from '../pages/StoreInstall'
import Downloads from '../pages/downloads'
import User from '../pages/user'
import NotFound from '../pages/notfound'

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
    },
	{
      path: '/store',
      name: 'Store',
      component: Storepage,
    },
	{
      path: '/store/dashboard',
      name: 'Store Dashboard',
      component: StoreDashboard,
    },
	{
      path: '/store/install',
      name: 'Store Installer',
      component: StoreInstall,
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
