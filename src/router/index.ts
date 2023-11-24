// Composables
import { Links, PathNames } from '@/constants/route.constants'
import AboutVue from '@/views/AboutView/AboutView.vue'
import HomeVue from '@/views/HomeView/HomeView.vue'
import LoginVue from '@/views/LoginView/LoginView.vue'
import PostVue from '@/views/PostView/PostView.vue'
import RegisterVue from '@/views/RegisterView/RegisterView.vue'
import { RouteLocationNormalizedLoaded, createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: Links.HOME, 
      name: PathNames.HOME,
      component: HomeVue, 
      alias: '/',
      meta : {
        title: 'Home',
        breadcrumb: () => [
          {
            title: 'Home',
          }
        ]
      }
    },
    {
      path: Links.ABOUT, 
      name: PathNames.ABOUT,
      component: AboutVue,
      meta: {
        title: 'About',
        breadcrumb: () => [
          {
            title: 'About',
          }
        ]
      }

    },
    {
      path: `${Links.POSTS}/:id`,
      name: PathNames.POST,
      component: PostVue,
      meta:{
        title: 'Post',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: Links.HOME
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },
    {path: '/login', component: LoginVue},
    {path: '/register', component: RegisterVue},
  ]
})
