import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (to.hash) { //先判断目标路由有没有hash值
      return {selector: to.hash}
    }
  },
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
        index:1,
        title:"登录"
      }
    },
    {
      path: '/regist',
      name: 'Regist',
      component: () => import("@/page/Regist/Regist"),
      meta: {
        requireAuth: false,
        index:2,
        title:"注册"
      }
    },
    {
      path: '/tidings',
      name: 'Tidings',
      // component: () => import("@/page/Tidings/Tidings"),
      component:resolve => require(['@/page/Tidings/Tidings'],resolve),
      meta: {
        requireAuth: true,
        index: 3,
        title:"消息"
      },
      beforeEnter(to, from, next) {
        document.getElementById('pageTitle').innerHTML = "消息"
        next()
      }
    },
    {
      path: '/friends',
      name: 'Friends',
      component: () => import("@/page/Friends/Friends"),
      meta: {
        requireAuth: true,
        index: 4,
        title:"朋友"
      },
      beforeEnter(to, from, next) {
        document.getElementById('pageTitle').innerHTML = "朋友"
        next()
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import("@/page/Find/Find"),
      meta: {
        requireAuth: true,
        index: 5,
        title:"发现"
      },
      beforeEnter(to, from, next) {
        document.getElementById('pageTitle').innerHTML = "发现"
        next()
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import("@/page/Mine/Mine"),
      children: [{
        path: '/mine/mineset',
        component: () => import("@/page/Mine/SetInfo"),
        meta: {
          requireAuth: true,
          index: 7,
          title:"个人信息"
        },
      }],
      meta: {
        requireAuth: true,
        index: 6,
        title:"我的"
      },
      beforeEnter(to, from, next) {
        document.getElementById('pageTitle').innerHTML = "我的"
        next()
      }
    },
  ]
})

