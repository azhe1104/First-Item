import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores'

// createRouter 创建路由实例
// 配置 history 模式
// 1. history模式： createWebHistory      地址栏不带 #
// 2. hash模式：    createWebHashHistory  地址栏带 #

// vite 中的环境变量 import.meta.env.BASE_URL  就是vite.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        }
      ]
    }
  ]
})

// 登录访问拦截 => 默认是直接放行
// 根据返回值决定，是放行还是拦截
// 返回值：
// 1. undefined / true 直接放行
// 2. false 拦回from的地址页面
// 3. 具体路径 或 路径对象 拦截到对应的地址
// '/login'  { name: 'login'}
router.beforeEach((to) => {
  // 如果没有token，且访问的是非登录页，拦截到登录，其他情况正常放行
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'

  return true
})
export default router
