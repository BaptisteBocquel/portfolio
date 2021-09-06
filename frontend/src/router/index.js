import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Apropos from '../views/Apropos.vue'
import Portfolio from '../views/Portfolio.vue'
import Formation from '../views/Formation.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/apropos',
    name: 'Apropos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Apropos
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/formation',
    name: 'Formation',
    component: Formation
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
