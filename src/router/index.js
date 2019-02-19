import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import user from '@/components/user'
import shopcart from '@/components/shopcart'
import category from '@/components/category'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
		{
		  path: '/home',
		  name: 'home',
		  component: home
		},
		{
		  path: '/user',
		  name: 'user',
		  component: user
		},
		{
		  path: '/shopcart',
		  name: 'shopcart',
		  component: shopcart
		},
		{
		  path: '/category',
		  name: 'category',
		  component: category
		}
  ]
})
