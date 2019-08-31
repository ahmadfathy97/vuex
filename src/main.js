import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js' // you must write './storage/file.js' but if it 'index.js' you can write it like that

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
