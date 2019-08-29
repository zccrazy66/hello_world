import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar:{
      opened: !+Cookies.get('sidebarStatus')
    },
    visitedView: []
  },

  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    // ADD_VISITED_VIEWS: (state, view) => {
    //   if (state.visitedView.some(v => v.path === view.path))
    //
    // }
  },
  actions: {
    ToggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app



