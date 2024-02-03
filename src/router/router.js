import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/home.vue";
import Profile from '@/pages/profile.vue'
import Tickets from '@/pages/tickets.vue'
import Cinema from '@/pages/films/cinema.vue'


const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/films/:id',
    component: Cinema,
    props: true
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/tickets',
    component: Tickets
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
