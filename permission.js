import router from './router'
import store from './store'
import {getToken} from '@/utils/auth' // 验权


const whiteList = ['/login', '/404']  //白名单,不需要登录的路由

router.beforeEach((to, from, next) =>{
  if (getToken()){

    console.log("***********")
    console.log(to.path)

    if (to.path === '/login'){

      console.log("here should go '/' ? ")
      next({path:'/'})

    } else if (!store.getters.role){
      store.dispatch('GetInfo').then(() => {
        next({...to})
      })
    } else {
      next()
    }
  }
  else if (whiteList.indexOf(to.path) !== -1){
    next()
  }
  else {
    // console.log("1111111")
    store.commit('RESET_USER')
    next('/login')
  }
});
