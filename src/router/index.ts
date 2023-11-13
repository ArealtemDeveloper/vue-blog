// Composables
import AboutVue from '@/views/About.vue'
import HomeVue from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', component: HomeVue},
    {path: '/about', component: AboutVue},
  ]
})
