/**
 * Created by steam on 2017/11/13.
 */

import Vue from 'vue'
import Academy from '../apps/Academy.vue'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#academy',
  render: h => h(Academy)
})
