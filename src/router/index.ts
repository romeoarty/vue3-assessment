import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DashboardPage
    }
  ]
})

export default router
