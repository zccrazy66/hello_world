import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'
import getter from './getter'
// import app from './modules/app'



Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    app,
    permission,
    user
  },
  getters: getter
});

export default store

