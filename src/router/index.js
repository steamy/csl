import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Index from '@/components/Index'
import Academy from '@/components/Academy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/academy',
      name: 'Academy',
      component: Academy
    }
  ]
})
