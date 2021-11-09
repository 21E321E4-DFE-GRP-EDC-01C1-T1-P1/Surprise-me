import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0aae001c = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _3424b59a = () => interopDefault(import('..\\pages\\Events.vue' /* webpackChunkName: "pages/Events" */))
const _40b6fca0 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _4dcf9d8c = () => interopDefault(import('..\\pages\\User.vue' /* webpackChunkName: "pages/User" */))
const _9a1889fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0aae001c,
    name: "About"
  }, {
    path: "/Events",
    component: _3424b59a,
    name: "Events"
  }, {
    path: "/Home",
    component: _40b6fca0,
    name: "Home"
  }, {
    path: "/User",
    component: _4dcf9d8c,
    name: "User"
  }, {
    path: "/",
    component: _9a1889fe,
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
