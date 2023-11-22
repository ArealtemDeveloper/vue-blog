// Composables
import AboutVue from '@/views/AboutView/AboutView.vue'
import HomeVue from '@/views/HomeView/HomeView.vue'
import LoginVue from '@/views/LoginView/LoginView.vue'
import RegisterVue from '@/views/RegisterView/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component: HomeVue, alias: '/'},
    {path: '/about', component: AboutVue},
    {path: '/login', component: LoginVue},
    {path: '/register', component: RegisterVue},
  ]
})
