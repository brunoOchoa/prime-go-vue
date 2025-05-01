import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import Index from '../pages/Index.vue'
import Users from '../pages/Users.vue'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Index },
        { path: 'users', component: Users },
      ],
    },
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes,
  })