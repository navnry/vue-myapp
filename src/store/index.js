import Vue from 'vue';
import Vuex from 'vuex';
import router from "../router";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    requireAuth: false,
    Username: false
  },
  getters: {
    requireAuth: state => state.requireAuth,
    Username: state => state.Username,

    // userInfo: state => state.userInfo,
  },

  mutations: {
    userStatus(state, obj) {
      state.requireAuth = obj.flag;
      state.Username = obj.Username;
      // state.userInfo = obj.userInfo;
    },
  },

  actions: {
    updateInfo({commit}, obj) {
      commit("userStatus", obj)
    },
  }
})

router.beforeEach((to, from, next) => {
  let getFlag = localStorage.getItem("Flag");
  // console.log(localStorage);
  if (getFlag === "isLogin") {
    store.state.requireAuth = true
    next()
    if (!to.meta.requireAuth) {
      next({
        path: '/mine'
      })
    }
  } else {
    if (to.meta.requireAuth) {
      next({
        path: '/login',
      })
      console.log('请先进行登录')
    } else {
      next()
    }
  }
});

router.afterEach(route => {
  window.scroll(0, 0);
});


export default store;
