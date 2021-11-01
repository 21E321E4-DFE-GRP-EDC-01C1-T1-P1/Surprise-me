import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b812060 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _66c13c66 = () => interopDefault(import('..\\pages\\Events.vue' /* webpackChunkName: "pages/Events" */))
const _2e1ec66c = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _3b376758 = () => interopDefault(import('..\\pages\\User.vue' /* webpackChunkName: "pages/User" */))
const _72852ab5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _6b812060,
    name: "About"
  }, {
    path: "/Events",
    component: _66c13c66,
    name: "Events"
  }, {
    path: "/Home",
    component: _2e1ec66c,
    name: "Home"
  }, {
    path: "/User",
    component: _3b376758,
    name: "User"
  }, {
    path: "/",
    component: _72852ab5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
