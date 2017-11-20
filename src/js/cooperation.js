import Vue from 'vue'
import Cooperation from '../apps/Cooperation.vue'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#cooperation',
  render: h => h(Cooperation)
})
