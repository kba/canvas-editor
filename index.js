import XrxVue from './App.vue'
export {XrxVue}
export default {
    install(Vue) {
        Vue.component('xrx-vue', XrxVue)
        Vue.config.devtools = true
    }
}
