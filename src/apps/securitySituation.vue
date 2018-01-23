<!--
<template>
  <div id="securitySituation">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <navigation></navigation>
    <img id="banner" src="../assets/img/index/1首页-banner.jpg">

    <no-data v-show="noData"></no-data>
    <div id="security-pro" class="container">
      <div class="row">
        <div id="project-info" class="col-md-9" v-for='(project,5) in projects'>
          <p>项目展示 > 项目详情</p>
          <div id="center">
            <p>{{projects.category}}</p>
            <p>{{projects.name}}</p>
            <img src="{{projects.img_url}}">
          </div>
          <div id="left">
            <p>{{projects.project_des}}</p>
          </div>
        </div>
        <div id="team_pics" class="col-md-3">
          <p>团队风采</p>
          <img src="../assets/img/cooperation/team1.png">
        </div>
      </div>
    </div>

    <site-footer></site-footer>
  </div>
</template>

<script>
  import {jsonFetcher} from '../../fetchdata/fetcher'
  import NoData from '../NoData'
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation,
      NoData},
    name: 'securitySituation',
    data () {
      return {
        noData: true,
        projects: []
      }
    },
    mounted () {
      this.getProjects()
    },
    methods: {
      getProjects: async function () {
        jsonFetcher.get('/api/v1/projects')
          .then(res => {
            this.projects = res.data.data
            if (this.projects.length !== 0) {
              this.noData = false
            }
            console.log(this.noData)
          }).catch(err => {
            console.log(err)
            this.noData = true
          })
      }
    }
  }
</script>

<style>
  #securitySituation {
    font-family: 方正兰亭黑简体;
    text-align: center;
    margin-top: 0px;
    background-color: #fafafa;
  }

  #banner{
    margin-top: -0.05%;
    padding-top: 0%;
    width:100%;
  }
  #security-pro{
    padding-top: 3%;
    padding-bottom: 6%;
  }

  #project-info{
    font-size: 24px;
    text-align: left;
  }
  #center{
    font-size: 20px;
    text-align: center;
    padding-top: 1%;
    padding-bottom: 2%;
  }

  #center img{
    width:60%;
    padding: 2% 0 2% 0;
  }
  #left{
    font-size: 18px;
    text-align: left;
    line-height: 160%;
    color: #555555;
  }

  #team_pics{
    padding-top: 5%;
    float: left;
  }

  #team_pics p{
    background-color: #337ab7;
    font-size: 16px;
    line-height: 35px;
    color: #F5F5F5;
    text-align: center;
    width:334px;
  }

</style>
-->
