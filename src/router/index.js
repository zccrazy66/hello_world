import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../View/layout/layout'
// const _import = require()
Vue.use(Router);
export const constantRouterMap = [
  {
    path:'/', component: Layout,
    // redirect:'/login',
    hidden:true,
    children:[{
      path:'index', component: () => import('@/View/index/index'),
      meta: {title: '首页'}
    }]
  },
  {path:'/login', component: () => import('@/View/login/login')},
  {path:'/404', component: () => import('@/View/404')}
  // {path:'/401', component: () => {import('@/View')}}  先不写了
]

export default new Router({

  routes: constantRouterMap

})

export const asyncRouterMap = [
  {
    path:'/system',
    component:Layout,
    redirect: '/system/detect',
    name:'功能模块',
    meta:{title:'功能模块'},
    children: [
      {
        path:'detect',
        name:'检测',
        component: () => import('@/View/detect/detect'),
        meta:{title:'检测'},
        menu:'detect'
      }
    ]
  },
  {
    path:'/user',
    component:Layout,
    redirect:'/user/',
    name:'',
    meta:{title:'用户权限'},
    children:[
      {
        path:'', name:'用户列表', component: () => import('@/View/user/user')
      },
      {
        path:'role',
        name:'权限管理',
        component: () => import('@/View/user/role'),
        meta:{title:'权限管理'},
        menu: 'role'
      }
    ]
  },
  {path:'*', redirect:'/404', hidden:true}

]



