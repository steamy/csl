import Vue from 'vue'
import Cooperation from '../apps/Cooperation.vue'
import router from '../router/cooperation'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#cooperation',
  router,
  render: h => h(Cooperation)
})
