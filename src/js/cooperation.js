import Vue from 'vue'
import Cooperation from '../apps/Cooperation.vue'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#cooperation',
  render: h => h(Cooperation)
})
