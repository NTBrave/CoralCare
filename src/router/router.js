import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Doc from '../pages/doc'
import Search from '../pages/search'
import Chart from '../pages/chart'
import CoralWork from '../pages/coralWork'
import Home from '../home/home'
import CoralManage from '../pages/coralManage'
import Manage from '../pages/manage'
import Area from '../pages/area'


import User from '../pages/user'


Vue.use(Router)

export default new Router({
	mode: "hash",
	// 	base: '/tool/',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home,
			// children: [
			// 	{ path: 'activity', component: Activity }
			// ]
		},
		{
			path: '/manage',
			name: 'manage',
			component: Manage,
			children: [
				{
					path: '/manage/doc',
					name: 'doc',
					component: Doc
				},
				{ //需要跳转的页面
					path: '/manage/search',
					name: 'search',
					component: Search
				},
				{ //需要跳转的页面
					path: '/manage/file',
					name: 'file',
					component: File
				},
				{
					path: '/manage/user',
					name: 'user',
					component: User
				},
				{
					path: '/manage/chart',
					name: 'chart',
					component: Chart
				},
				{
					path: '/manage/coralWork',
					name: 'coralWork',
					component: CoralWork
				},
				
				{
					path: '/manage/coralManage',
					name: 'coralManage',
					component: CoralManage
				},
				{
					path: '/manage/area',
					name: 'area',
					component: Area
				},
			]
		},
		
	],
})
