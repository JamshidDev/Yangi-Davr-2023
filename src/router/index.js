import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../Layouts/LayoutPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'register',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Register/RegisterPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
