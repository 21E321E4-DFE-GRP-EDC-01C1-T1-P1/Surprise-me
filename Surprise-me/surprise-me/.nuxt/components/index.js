export { default as Menu } from '../..\\components\\Menu.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as EventsCreate } from '../..\\components\\Events\\Create.vue'
export { default as EventsDelete } from '../..\\components\\Events\\Delete.vue'
export { default as EventsList } from '../..\\components\\Events\\List.vue'
export { default as EventsUpdate } from '../..\\components\\Events\\Update.vue'
export { default as MenuEvents } from '../..\\components\\Menu\\Events.vue'
export { default as MenuSearch } from '../..\\components\\Menu\\Search.vue'
export { default as MenuUser } from '../..\\components\\Menu\\User.vue'
export { default as UserCreate } from '../..\\components\\User\\Create.vue'
export { default as UserCriacao } from '../..\\components\\User\\Criacao.vue'
export { default as UserDelete } from '../..\\components\\User\\Delete.vue'
export { default as UserList } from '../..\\components\\User\\List.vue'
export { default as UserUpdate } from '../..\\components\\User\\Update.vue'
export { default as MenuEventsCreate } from '../..\\components\\Menu\\Events\\Create.vue'
export { default as MenuUserCreate } from '../..\\components\\Menu\\User\\Create.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
