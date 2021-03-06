import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Test2 from '../pages/Test2'
import Test3 from '../pages/Test3'
import Test4 from '../pages/Test4'
import Test5 from '../pages/Test5'
import Test6 from '../pages/Test6'
import Test7 from '../pages/Test7'
import Test8 from '../pages/Test8'
import Test9 from '../pages/Test9'

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
    path: '/test3',
    name: 'Test3',
    component: Test3
  },
  {
    path: '/test4',
    name: 'Test4',
    component: Test4
  },
  {
    path: '/test5',
    name: 'Test5',
    component: Test5
  },
  {
    path: '/test6',
    name: 'Test6',
    component: Test6
  },
  {
    path: '/test7',
    name: 'Test7',
    component: Test7
  },
  {
    path: '/test8',
    name: 'Test8',
    component: Test8
  },
  {
    path: '/test9',
    name: 'Test9',
    component: Test9
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
