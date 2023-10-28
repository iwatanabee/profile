import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile/',
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
    },
    {
      path: '/profile/product/restaurant-finder-app',
      name: 'restaurant-finder-app',
      component: () => import('../views/RestaurantFinderAppView.vue')
    }
  ]
})

export default router
