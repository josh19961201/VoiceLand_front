import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import FrontLayout from '@/layouts/FrontLayout.vue'
// home
import FrontHomeView from '@/views/front/HomeView.vue'
// events
import FrontShowView from '@/views/front/events/ShowView.vue'
import FrontWorkView from '@/views/front/events/WorkView.vue'
// artists
import FrontSabrinaBandView from '@/views/front/artists/SabrinaBandView.vue'
import FrontCoastalKanpaiView from '@/views/front/artists/CoastalKanpaiView.vue'
import FrontYellowFlowerView from '@/views/front/artists/YellowFlowerView.vue'
import FrontFayeHongView from '@/views/front/artists/FayeHongView.vue'
// shop
import FrontShopView from '@/views/front/ShopView.vue'
// login
import FrontLoginView from '@/views/front/LoginView.vue'

import NotFoundView from '@/views/NotFoundView.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: 'Home',
            login: false,
            admin: false
          }
        },
        {
          path: 'show',
          name: 'show',
          component: FrontShowView,
          meta: {
            title: 'Show',
            login: false,
            admin: false
          }
        },
        {
          path: 'work',
          name: 'work',
          component: FrontWorkView,
          meta: {
            title: 'Work',
            login: false,
            admin: false
          }
        },
        {
          path: 'artists/sabrinaband',
          name: 'sabrinaband',
          component: FrontSabrinaBandView,
          meta: {
            title: 'Sabrina Band',
            login: false,
            admin: false
          }
        },
        {
          path: 'artists/coastalkanpai',
          name: 'coastalkanpai',
          component: FrontCoastalKanpaiView,
          meta: {
            title: 'Coastal Kanpai',
            login: false,
            admin: false
          }
        },
        {
          path: 'artists/yellowflower',
          name: 'yellowflower',
          component: FrontYellowFlowerView,
          meta: {
            title: 'Yellow Flower',
            login: false,
            admin: false
          }
        },
        {
          path: 'artists/fayehong',
          name: 'fayehong',
          component: FrontFayeHongView,
          meta: {
            title: 'Faye Hong',
            login: false,
            admin: false
          }
        },
        {
          path: 'shop',
          name: 'shop',
          component: FrontShopView,
          meta: {
            title: 'Shop',
            login: false,
            admin: false
          }
        },
        {
          path: 'shop/products/:id',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: 'Product',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/trade/CartView.vue'),
          meta: {
            title: 'Cart',
            login: true,
            admin: false
          }
        },
        {
          path: 'orderbuild',
          name: 'orderbuild',
          component: () => import('@/views/trade/OrderBuildView.vue'),
          meta: {
            title: 'Order Complate',
            login: true,
            admin: false
          }
        },
        {
          path: 'ordercomplete',
          name: 'ordercomplete',
          component: () => import('@/views/trade/OrderCompleteView.vue'),
          meta: {
            title: 'Order Build',
            login: true,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: FrontLoginView,
          meta: {
            title: 'Login',
            login: false,
            admin: false
          }
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/UserView.vue'),
          meta: {
            title: 'User',
            login: true,
            admin: false
          }
        },
        {
          path: 'admin',
          component: () => import('@/layouts/AdminLayout.vue'),
          children: [
            {
              path: '',
              name: 'Admin-home',
              component: () => import('@/views/admin/HomeView.vue'),
              meta: {
                title: '管理員後台 | 首頁',
                login: true,
                admin: true
              }
            },
            {
              path: 'products',
              name: 'Admin-products',
              component: () => import('@/views/admin/ProductsView.vue'),
              meta: {
                title: '管理員後台 | 商品管理',
                login: true,
                admin: true
              }
            },
            {
              path: 'orders',
              name: 'Admin-orders',
              component: () => import('@/views/admin/OrdersView.vue'),
              meta: {
                title: '管理員後台 | 訂單管理',
                login: true,
                admin: true
              }
            },
            {
              path: 'shows',
              name: 'Admin-shows',
              component: () => import('@/views/admin/ShowsView.vue'),
              meta: {
                title: '管理員後台 | 演出管理',
                login: true,
                admin: true
              }
            },
            {
              path: 'works',
              name: 'Admin-works',
              component: () => import('@/views/admin/WorksView.vue'),
              meta: {
                title: '管理員後台 | 演出管理',
                login: true,
                admin: true
              }
            },
            {
              path: 'users',
              name: 'Admin-users',
              component: () => import('@/views/admin/UsersView.vue'),
              meta: {
                title: '管理員後台 | 會員管理',
                login: true,
                admin: true
              }
            }
          ]
        }

      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: 'Voice Land | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = 'Voice Land - ' + to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  if (from === START_LOCATION) {
    await user.getUser()
  }
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
