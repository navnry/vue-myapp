import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/tidings'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/page/Login/Login"),
      meta: {
        requireAuth: false,
      }
    },
    {
      path: '/regist',
      name: 'Regist',
      component: () => import("@/page/Regist/Regist"),
      meta: {
        requireAuth: false,
      }
    },
    {
      path: '/tidings',
      name: 'Tidings',
      component: () => import("@/page/Tidings/Tidings"),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/friends',
      name: 'Friends',
      component: () => import("@/page/Friends/Friends"),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import("@/page/Find/Find"),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import("@/page/Mine/Mine"),
      meta: {
        requireAuth: true,
      }
    },
  ]
})

