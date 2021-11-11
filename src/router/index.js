import Vue from 'vue'
import VueRouter from 'vue-router'
import Zajezdy from '../views/Zajezdy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Informace',
    name: 'Informace',
    
    component: () => import('../views/Informace.vue')
  },
  {
    path: '/',
    name: 'Zajezdy',
    component: Zajezdy
  },
  {
    path: '/Destinace',
    name: 'Destinace',
    
    component: () => import('../views/Destinace.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    
    component: () => import('../views/Registration.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
