<template>
  <div id="cooperation">
<!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
    <navigation></navigation>

    <div id="content" class="container">
      <div class="row">
        <!--  根据项目方向分类展示项目内容.项目方向分别为信息安全，智能计算及互联网+ -->
        <div id="infosecurity" class=" col-md-4">
          <div class="project-list">
            <div class="classify">
              <img src="../assets/img/cooperation/信息安全.png">
              <p>网络空间安全</p>
            </div>
            <div class="classify-dtil">
              <p v-for="project in internetSecurityPojects"><a :href="project.pushUrl">{{project.name}}</a><br></p>
            </div>
          </div>
        </div>
        <div id="intecomputing" class=" col-md-4">
          <div class="project-list">
            <div class="classify">
              <img src="../assets/img/cooperation/智能计算.png">
              <p>大数据与智能计算</p>
            </div>
            <div class="classify-dtil">
              <p v-for="project in bigData"><a :href="project.pushUrl">{{project.name}}</a><br></p>
            </div>
          </div>
        </div>
        <div id="internetplus" class=" col-md-4">
          <div class="project-list">
            <div class="classify">
              <img src="../assets/img/cooperation/互联网+.png">
              <p>互联网+</p>
            </div>
            <div class="classify-dtil">
              <p v-for="project in internetPlus"><a :href="project.pushUrl">{{project.name}}</a><br></p>
            </div>
          </div>
        </div>

      </div>
    </div>


    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import Banner from '../components/Banner'
  import {jsonFetcher} from '../fetchdata/fetcher'
  export default {
    components: {
      SiteFooter,
      Navigation,
      'app-banner': Banner},
    name: 'cooperation',
    data () {
      return {
        internetSecurityPojects: [],
        bigData: [],
        internetPlus: []
      }
    },
    mounted () {
      this.getAllProjects()
    },
    methods: {
      getAllProjects: function () {
        jsonFetcher.get('/api/v1/projects')
          .then(res => {
            const projects = res.data.data
            for (let index = 0; index < projects.length; index++) {
              const project = projects[index]
              if (project.category === '网络空间安全') {
                project.pushUrl = 'projectdetail.html?project_id=' + project.project_id
                this.internetSecurityPojects.push(project)
              } else if (project.category === '大数据与智能计算') {
                project.pushUrl = 'projectdetail.html?project_id=' + project.project_id
                this.bigData.push(project)
              } else if (project.category === '互联网+') {
                project.pushUrl = 'projectdetail.html?project_id=' + project.project_id
                this.internetPlus.push(project)
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
/*  @import '../assets/css/common.scss';*/
  #cooperation {
/*    font-family: 方正兰亭黑简体;*/
    text-align: center;
    margin-top: 0;
    background-color: #fafafa;
  }


  #content{
    padding: 2% 0 6% 0;
  }

  .project-list{
    margin: 5% 10% 0 10%;
    border-color: rgb(30, 123, 180);
    border-style: solid;
    border-radius: 2%;
    border-width: 1.5px;
    height: 370px;
  }

  .classify{
    border-style: solid;
    border-color: transparent;
    background-color: #1a6fa6;
    color: #F5F5F5;
    padding-bottom: 2%;
  }

  .classify img{
    display: inline-block;
  }

  .classify p{
    display: inline-block;
    font-size: 20px;
    text-align: center;
    padding: 2% 0 2% 0;
    margin:0;
  }

  .classify-dtil{
    padding-top: 3%;
  }

  .classify-dtil p{
    font-size: 18px;
    line-height: 150%;
    text-align: left;
    padding-left: 5%;
  }

  .classify-dtil a{
    color: #555555;
  }

  .classify-dtil a:hover{
    color: #1a6fa6;
  }

/*  #title p{
    text-align: left;
    font-size: 20px;
    line-height: 90%;
    padding-left: 2%;
  }*/

/*  #projects{
    padding-top: 6%;
  }
  #projects p{
    text-align: left;
    font-size: 16px;
    line-height: 190%;
  }

  #link-list{
    padding-top: 8%;
  }

  #projects a{
    color: #0f0f0f;
  }
#projects a:hover{
  color: #337ab7;
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

  .studentIntr{
    width:334px;

  }*/


/*  #link-list a{
    background-color:#F5F5F5;
    color: #555555;
    border-color:#337ab7;
  }

  #link-list a:hover{
    background-color: #1a6fa6;
    color: #F5F5F5;
  }*/


/*  @media (min-width: 1600px){
  .container{
    width:1484px;
  }
}*/


/*  @media (max-width: 768px) {
    #banner-title-container{
      background-color: white;
    }
    #banner-img {
      display: none;
    }
    div.col-sm-12 img {
      width: 70%;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    #banner-title-container{
      background-color: white;
    }
    #banner-img {
      display: none;
    }

    div.col-sm-12 img {
      width: 70%;
    }
  }
  @media (min-width: 992px) {
    div.col-sm-12 img {
      width: 60%;
    }
  }*/
</style>
