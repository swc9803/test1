import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Test2 from '../pages/Test2'
import Ttest from '../pages/Ttest'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/ttest',
    name: 'Ttest',
    component: Ttest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
