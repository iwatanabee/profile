import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/profile/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue')
    }
  ]
})

export default router
