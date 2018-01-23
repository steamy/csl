/**
 * Created by steam
 */

import Vue from 'vue'
import News from '../apps/News'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#news',
  render: h => h(News)
})
