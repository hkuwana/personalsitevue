import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( /* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import( /* webpackChunkName: "Proejcts" */ '../views/Projects.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import( /* webpackChunkName: "MissingPage" */ '../views/MissingPage.vue')
  },

];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router