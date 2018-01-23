import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Teachers from '../components/team/Teachers'
import Students from '../components/team/Students'
import TeamManagement from '../components/team/TeamManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teachers',
      name: 'Teacher',
      component: Teachers
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/manage',
      name: 'students',
      component: TeamManagement
    }
  ]
})
