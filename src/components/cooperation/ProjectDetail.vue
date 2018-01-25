<template>
    <div id="project-detail" class="main-container">

      <no-data v-show="noData"></no-data>

      <section class="content">
        <section class="back">
          <p class=""><router-link to="/">所有项目</router-link> > {{project.category}}</p>
        </section>
        <div class="row">
          <div id="project-info" class="col-md-9">
            <div id="center">
              <p class="project-name">{{project.name}}</p>
            </div>
            <div id="left">
              <p class="main-img" v-html="project.project_des"></p>
            </div>
          </div>
          <div id="team_pics" class="col-md-3">
            <p>团队风采</p>
            <img src="../../assets/img/cooperation/team1.png">
          </div>
        </div>
      </section>

    </div>
</template>

<script>
  import {jsonFetcher} from '../../fetchdata/fetcher'
  import NoData from '../../components/NoData'
  import Navigation from '../../components/Navigation'
  import SiteFooter from '../../components/SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation,
      NoData},
    name: 'project-detail',
    data () {
      return {
        noData: true,
        project: {}
      }
    },
    mounted () {
      this.getProject()
    },
    methods: {
      getProject: async function () {
        const projectId = this.$route.params.project_id
        const url = '/api/v1/projects/' + projectId
        jsonFetcher.get(url)
          .then(res => {
            this.project = res.data.data[0]
            if (res.data.data.length !== 0) {
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

<style lang="scss">
  @import '../../assets/css/common';
  @import '../../assets/css/page';

  #project-detail {
    text-align: center;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  #banner{
    margin-top: -0.05%;
    padding-top: 0;
    width:100%;
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
    font-size: 14px;
    text-align: left;
    font-weight: 400;
    color: #555555;
  }
  .main-img  img {
    width: 200px;
    height: 200px;
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

  .back {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 30px;
    text-align: left;
  }
  .back p, .back a {
    color: #247fbb;
  }
  .back a:hover{
    color: #0C4E7A;
    cursor: pointer;
  }
  .project-name {
    color: #262930;
    font-size: 26px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    #team_pics {
      display: none;
    }
  }

</style>
