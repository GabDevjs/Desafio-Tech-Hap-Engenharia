/* Imports */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
/* Router */
import router from './router'
/* Store */
import store from './store'
/* Vuetify */
import vuetify from './plugins/vuetify'
/* fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* icons */
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import "./plugins/chart.js"

library.add(faMoon, faSun,faFolder, faImage )


/* Product */
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
