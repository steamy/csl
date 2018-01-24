import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import AllProjects from '../components/cooperation/AllProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allprojects',
      component: AllProjects
    }
  ]
})
