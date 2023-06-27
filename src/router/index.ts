import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'root',
    path: '/',
    redirect: '/Login',
    meta: {
      title: 'Root'
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
    },
    component: () => import('@/pages/auth/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
        title: '主页',
    },
    component: () => import('@/pages/main/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  next()
})

export async function setupRouter(app: App) {
    app.use(router);
    await router.isReady();
  }
  
export default router;