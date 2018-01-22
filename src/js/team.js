/**
 * Created by steam on 2017/11/15.
 */

import Vue from 'vue'
import Team from '../apps/Team.vue'
import router from '../router/team'
import 'jquery/dist/jquery.min'
import '../assets/css/bootstrap/css/bootstrap.css'
import '../assets/css/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#team',
  router,
  render: h => h(Team)
})
