/**
 * Created by steam on 2017/11/15.
 */

import Vue from 'vue'
import Team from '../apps/Team.vue'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#team',
  render: h => h(Team)
})
