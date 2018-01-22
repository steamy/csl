import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Teachers from '../components/team/Teachers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:who',
      name: 'Teacher',
      component: Teachers
    }
  ]
})
