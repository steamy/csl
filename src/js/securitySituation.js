import Vue from 'vue'
import securitySituation from '../apps/securitySituation.vue'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#securitySituation',
  render: h => h(securitySituation)
})
