import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppLayout from '../views/layouts/AppLayout'

export const routerMap = [

  {
    path: '/',
    name: 'Root',
    component: AppLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home' }
      },

      {
        path: '/notification',
        name: 'Notification',
        component: () => import('@/views/notification/index'),
        meta: { title: 'Notification' }
      },

      {
        path: '/save',
        name: 'Save',
        component: () => import('@/views/save/index'),
        meta: { title: 'Save' }
      },

      {
        path: '/connections',
        name: 'Connections',
        component: () => import('@/views/connections/index'),
        meta: { title: 'Connections' }
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('@/views/product/index'),
        meta: { title: 'Product' }
      }
    ]
  }
]

export default new Router({
  routes: routerMap,
  mode: 'history'
})
