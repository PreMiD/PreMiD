import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '',
			redirect: '/Installed'
		},
		{
			path: '/Installed',
			name: 'Installed',
			component: require('@/pages/Installed').default
		},
		{
			path: '/Updated',
			name: 'Updated',
			component: require('@/pages/Updated').default
		}
	]
});
