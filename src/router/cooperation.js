import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import AllProjects from '../components/cooperation/AllProjects'
import ProjectDetail from '../components/cooperation/ProjectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allProjects',
      component: AllProjects
    },
    {
      path: '/detail/:project_id',
      name: 'projectDetail',
      component: ProjectDetail
    }
  ]
})
