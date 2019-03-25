import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '',
			redirect: '/Settings'
		},
		{
			path: '/Settings',
			name: 'Settings',
			component: require('@/pages/Settings').default
		},
		{
			path: '/Share',
			name: 'Share',
			component: require('@/pages/Share').default
		},
		{
			path: '/Credits',
			name: 'Credits',
			component: require('@/pages/Credits').default
		},
		{
			path: '/Help',
			name: 'Help',
			component: require('@/pages/Help').default
		}
	]
});
