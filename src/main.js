import Vue from 'vue'
import VueFire from 'vuefire'
import Buefy from 'buefy'
import { db } from '@/firebase'
import '@/assets/scss/main.scss'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(Buefy)

new Vue({
  firebase: {
    tasks: {
      source: db.ref('tasks'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
