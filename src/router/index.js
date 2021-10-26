import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import('../views/AddCurrency')
      },
      {
        path: '/addCurrency',
        component: () => import('../views/AddCurrency')
      },
      {
        path: '/currencyTable',
        component: () => import('../views/CurrencyTable')
      },
      {
        path: '/currencyConvert',
        component: () => import('../views/CurrencyConvert')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
