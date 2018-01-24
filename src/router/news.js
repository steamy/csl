import Vue from 'vue'
import Router from 'vue-router'
import AllNews from '../components/news/AllNews'
import NewsDetail from '../components/news/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allnews',
      component: AllNews
    },
    {
      path: '/detail/:news_id',
      name: 'detail',
      component: NewsDetail
    }
  ]
})
