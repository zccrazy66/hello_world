// 封装   axios
import axios from 'axios'
import store from '../store'
import {Message, MessageBox} from "element-ui";
// import {getToken} from '@/utils/auth'


//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,  //api 的 base_url
  timeout: 10000
})

//request 拦截器
service.interceptors.request.use( config => {
  if (store.getters.token){
    config.headers['X-token'] = getToken()
  }
  return config
  }, error => {
  console.log(error)
  Promise.reject(error)          //返回拒绝原因 promise 函数 可以then起来
})



//response 拦截器
service.interceptors.response.use(
  response => {
  const res = response.data;
  console.log(res)
  console.log("from response" + res);

  if (res.code == 200) {

      // console.log("ok~~~~");
      return res.info;

  }//  todo
  else if (res.code == "20011") {
    Message({
      showClose: true,
      message: res.msg,
      type: 'error',
      duration: 500,
      onClose: () => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
    });
    return Promise.reject("未登录")
  } else {
    Message({
      message: res.info.msg,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(res)
  }
  },
  error => {
    console.error('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)


export default service
