// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import '@/assets/css/font-awesome.min.css'
import '@/assets/css/ie8.css'
import '@/assets/css/main.css'

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBcgmHf87ekMW9cBU3jMzajkpoUzVduHjg',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
