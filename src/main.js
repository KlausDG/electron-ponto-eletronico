import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Components
Vue.component("my-button", require("./components/Button.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
