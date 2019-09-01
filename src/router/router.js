import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Doc from '../pages/doc'
import Search from '../pages/search'
import Chart from '../pages/chart'
import CoralWork from '../pages/coralWork'
import Home from '../home/home'
import CoralManage from '../pages/coralManage'
import Area from '../pages/area'


import User from '../pages/user'


Vue.use(Router)

export default new Router({
	mode: "hash",
// 	base: '/tool/',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/doc',
			name: 'doc',
			component: Doc
		},
		{ //需要跳转的页面
			path: '/search',
			name: 'search',
			component: Search
		},
		{ //需要跳转的页面
			path: '/file',
			name: 'file',
			component: File
		},
		{
			path:'/user',
			name:'user',
			component:User
		},
		{
			path: '/chart',
			name: 'chart',
			component: Chart
		},
		{
			path: '/coralWork',
			name: 'coralWork',
			component: CoralWork
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/coralManage',
			name: 'coralManage',
			component: CoralManage
		},
		{
			path: '/area',
			name: 'area',
			component: Area
		},
	],
})
