import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_bootstrapvue_e6d5c69e from 'nuxt_plugin_bootstrapvue_e6d5c69e' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_08cf87ac from 'nuxt_plugin_cookieuniversalnuxt_08cf87ac' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_f7c83efc from 'nuxt_plugin_axios_f7c83efc' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ../plugins/axios (mode: 'client')
import nuxt_plugin_vuecarousel_6c010c3d from 'nuxt_plugin_vuecarousel_6c010c3d' // Source: ../plugins/vue-carousel (mode: 'client')
import nuxt_plugin_vuebacktotop_5f7b8136 from 'nuxt_plugin_vuebacktotop_5f7b8136' // Source: ../plugins/vue-backtotop (mode: 'client')
import nuxt_plugin_vuetoastification_bd752598 from 'nuxt_plugin_vuetoastification_bd752598' // Source: ../plugins/vue-toastification (mode: 'client')
import nuxt_plugin_vueperslides_e3097022 from 'nuxt_plugin_vueperslides_e3097022' // Source: ../plugins/vueperslides (mode: 'client')
import nuxt_plugin_vueinfinitescroll_dfa87a04 from 'nuxt_plugin_vueinfinitescroll_dfa87a04' // Source: ../plugins/vue-infinitescroll (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"fr"},"title":"Nour-M Boutique","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Bolster is a clean and modern purse Vue Nuxt.js eCommerce template. This is built on Vue.js, Nuxt.js, Vuex, Firebase, Sass and Bootstrap 4. Bolster has included with an easy checkout feature. It has responsive beautiful design layouts with amazing Retina Ready visual UX\u002F UI experience."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_e6d5c69e === 'function') {
    await nuxt_plugin_bootstrapvue_e6d5c69e(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_08cf87ac === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_08cf87ac(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_f7c83efc === 'function') {
    await nuxt_plugin_axios_f7c83efc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecarousel_6c010c3d === 'function') {
    await nuxt_plugin_vuecarousel_6c010c3d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuebacktotop_5f7b8136 === 'function') {
    await nuxt_plugin_vuebacktotop_5f7b8136(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetoastification_bd752598 === 'function') {
    await nuxt_plugin_vuetoastification_bd752598(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueperslides_e3097022 === 'function') {
    await nuxt_plugin_vueperslides_e3097022(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueinfinitescroll_dfa87a04 === 'function') {
    await nuxt_plugin_vueinfinitescroll_dfa87a04(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
