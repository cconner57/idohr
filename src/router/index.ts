import { createRouter, createWebHistory } from 'vue-router'
import { About, Adopt, Donate, Home, Volunteer } from '../pages/index.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/adopt',
      component: Adopt,
    },
    {
      path: '/donate',
      component: Donate,
    },
    {
      path: '/volunteer',
      component: Volunteer,
    },
  ],
})

export default router
