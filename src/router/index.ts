import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/PodcastView.vue')
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import('../views/PagesView.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('../views/AppsView.vue')
    },
    {
      path: '/layouts',
      name: 'layout',
      component: () => import('../views/LayoutsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router
