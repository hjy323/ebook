import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/store'
    }
    ,
    {
      path: '/store',
      redirect: '/store/home',
      component: () => import("./views/store/index.vue"),
      children: [{
        path: 'home',
        component: () => import("./views/store/StoreHome.vue")
      },{
        path: 'list',
        component: () => import("./views/store/StoreList.vue")
      },{
        path: 'detail',
        component: () => import("./views/store/StoreDetail.vue")
      }]
    },
  ]
})
