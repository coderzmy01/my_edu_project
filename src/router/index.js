import Vue from 'vue'
import VueRouter from 'vue-router'
import layoutIndex from '@/views/layout/index'
import homeIndex from '@/views/home/index'
import aboutIndex from '@/views/about/index.vue'
import errorPage from '@/views/error-page/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'layout',
    component: layoutIndex,
    children: [
      {
        path: '',
        name: 'home',
        component: homeIndex
      },
      {
        path: 'about',
        name: 'about',
        component: aboutIndex
      }
    ]
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: errorPage
  }

]

const router = new VueRouter({
  routes
})

export default router
