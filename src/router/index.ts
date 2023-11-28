// Composables
import { Links, PathNames } from '@/constants/route.constants'
import AboutVue from '@/views/AboutView/AboutView.vue'
import BlogListVue from '@/views/BlogListView/BlogListView.vue'
import HomeVue from '@/views/HomeView/HomeView.vue'
import LoginVue from '@/views/LoginView/LoginView.vue'
import PostVue from '@/views/PostView/PostView.vue'
import UserVue from '@/views/UserView/UserView.vue'
import RegisterVue from '@/views/RegisterView/RegisterView.vue'
import CreatePostVue from '@/views/CreatePostView/CreatePostView.vue'
import { RouteLocationNormalizedLoaded, createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
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
            title: 'Home',
            link: Links.HOME
          },
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
            title: `Post ${route.params.id}` as string
          }
        ]
      }
    },
    {
      path: Links.BLOG, 
      name: PathNames.BLOG,
      component: BlogListVue,
      meta: {
        title: 'Blog',
        breadcrumb: () => [
          {
            title: 'Home',
            link: Links.HOME
          },
          {
            title: 'Blog',
          }
        ]
      }
    },
    {
      path: Links.USER, 
      name: PathNames.USER,
      component: UserVue,
      meta: {
        title: 'User',
        requiredAuth: true,
        breadcrumb: () => [
          {
            title: 'Home',
            link: Links.HOME
          },
          {
            title: 'User',
          }
        ]
      }

    },
    {
      path: Links.CREATEPOST, 
      name: PathNames.CREATEPOST,
      component: CreatePostVue,
      meta: {
        title: 'Create Post',
        requiredAuth: true,
        breadcrumb: () => [
          {
            title: 'Home',
            link: Links.HOME
          },
          {
            title: 'Create Post',
          }
        ]
      }

    },
    {
      path: '/login', 
      name: PathNames.LOGIN,
      component: LoginVue
    },
    {
      path: '/register', 
      name: PathNames.REGISTER,
      component: RegisterVue
  },
  ],
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  if (to.meta.requiredAuth && !user) {
    next({ name: PathNames.LOGIN });
  } else {
    next();
  }
});
