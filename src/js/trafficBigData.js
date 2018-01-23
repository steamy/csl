import Vue from 'vue'
import trafficBigData from '../apps/trafficBigData.vue'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#trafficBigData',
  render: h => h(trafficBigData)
})
