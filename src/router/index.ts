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
    { path: '/adopt', name: 'adopt-list', component: Adopt },
    {
      path: '/adopt/:id',
      name: 'adopt-pet',
      component: Adopt,
      props: true,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
