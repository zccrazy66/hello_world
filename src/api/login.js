import request from '@/utils/require'


// 向后台发起 axios请求，axios已在request中重新封装

//登陆
export function login(username,password) {
  return request({
    url:'/user/login',
    method:'post',
    data:{
      username,
      password
    }
  })
}

//获取人员具体信息
export function getInfo(token) {
  return request({
    url:'/user/info',
    method: 'get',
    params:{ token }
  })
}

//登出
export function logout(){
  return request({
    url:'/user/logout',
    method:'post'
  })
}
