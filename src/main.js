// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VueValidator from 'vue-validator'
import store from './store'
import '@/permission'
import '@/icons'


Vue.use(VueValidator);
Vue.use(ElementUI);
window.axios = require('axios');
Vue.prototype.$http = window.axios;
Vue.prototype.$echarts = echarts;


// Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

});
