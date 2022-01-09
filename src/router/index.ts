import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { trackRouter } from 'vue-gtag-next'
import HomeView from '../views/HomeView.vue'
import ReposView from '../views/ReposView.vue'
import NotFoundView from '../views/_NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'nfp',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/repos',
    name: 'repos',
    component: ReposView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

trackRouter(router)

export default router