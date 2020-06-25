import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c723652 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _543f9246 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _ae1f467c = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _4b41ea6c = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _f3c4412c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3b18092a = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _6ab14c62 = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _18d18022 = () => interopDefault(import('../pages/collection/_id.vue' /* webpackChunkName: "pages/collection/_id" */))
const _39c3b2ac = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _0d0280c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4c723652,
    name: "about"
  }, {
    path: "/cart",
    component: _543f9246,
    name: "cart"
  }, {
    path: "/categories",
    component: _ae1f467c,
    name: "categories"
  }, {
    path: "/checkout",
    component: _4b41ea6c,
    name: "checkout"
  }, {
    path: "/contact",
    component: _f3c4412c,
    name: "contact"
  }, {
    path: "/wishlist",
    component: _3b18092a,
    name: "wishlist"
  }, {
    path: "/category/:id?",
    component: _6ab14c62,
    name: "category-id"
  }, {
    path: "/collection/:id?",
    component: _18d18022,
    name: "collection-id"
  }, {
    path: "/products-details/:id?",
    component: _39c3b2ac,
    name: "products-details-id"
  }, {
    path: "/",
    component: _0d0280c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
