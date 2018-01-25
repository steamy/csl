<template xmlns="http://www.w3.org/1999/html">
  <div class="Index">
    <navigation :show-banner-props="true"></navigation>

    <!-- 团队概述-->
    <team-intro></team-intro>

    <section id="teamintro" class="main-container">
      <div class="content">
        <button onclick="window.location.href='academy.html'">
          更多
        </button>
      </div>

    </section>

    <!--项目展示-->

    <projects-show></projects-show>

    <section id="project">
      <p class="title-main">项目展示</p>
      <br/>
      <div id="project-show">

        <ul class="tabs row project-tabs">
          <li class="col-md-4 col-xs-4 col-sm-4 desc" v-for="(name,index) in tabNames"
              @click="toggleTabs(index)"
              :class='{active:index==nowIndex,liTabFirst:index==0,liTabLast:index==2}'>{{name}}
              <div class="bottom-line" v-show="index==nowIndex"></div>
          </li>
        </ul>
        <br/>
        <br/>

        <div  class="row">
          <div class="cell-container col-xs-4 col-sm-4" v-for="project in projectNow">
            <a :href="project.pushUrl">
              <div class="project-cell">
                <img class="project-img" :src="project.show_img">
                <p class="desc" >{{project.show_title}}<br><span style="font-weight: 300">{{project.show_detail}}</span></p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="more-button">
        <button onclick="window.location.href='cooperation.html'">查看更多</button>
      </div>

    </section>

    <!--合作伙伴-->
    <section id="partner" class="main-container">
      <div class="content">
        <p class="title-main">合作伙伴</p>
        <p class="desc">卓越工程师计划实施-实习实训</p>

        <div id="partner-show" class="row">
          <div class="col-md-3 col-xs-5 col-sm-3 col-sm-offset-0 " v-for="(imgUrl, index) in coImgUrls"
          :class="{'col-xs-offset-1':(index%2)===0}">
            <img :src="imgUrl.url"/>
          </div>
        </div>
      </div>
    </section>



    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from './Navigation'
  import SiteFooter from './SiteFooter'
  import IndexBanner from './IndexBanner'
  import {jsonFetcher} from '../fetchdata/fetcher'
  import {isMobile} from '../js/common/common'
  import Moresvg from './index/moresvg'
  import ProjectsShow from './index/ProjectsShow'
  import TeamIntro from './index/TeamIntro'

  export default {
    components: {
      TeamIntro,
      ProjectsShow,
      Moresvg,
      IndexBanner,
      SiteFooter,
      Navigation},
    name: 'Index',
    computed: {},
    mounted () {
      this.getPojects()
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
        this.projectNow = this.projectAll[index]
      },
      isMobile: isMobile,
      getPojects: function () {
        jsonFetcher.get('/api/v1/projects/index')
          .then(res => {
            const projects = res.data.data
            this.projectAll = []
            for (let index = 0; index < this.tabNames.length; index++) {
              this.projectAll[index] = []
            }

            for (let i = 0; i < projects.length; i++) {
              const project = projects[i]
              for (let index = 0; index < this.tabNames.length; index++) {
                if (project.category === this.tabNames[index]) {
                  this.projectAll[index].push(project)
                }
                project.pushUrl = '../../cooperation.html#/detail/' + project.project_id
              }
            }
            this.projectNow = this.projectAll[0]
          })
          .catch(err => {
            console.log(err)
            this.toggleTabs(0)
          })
      }
    },
    data () {
      return {
        projectNow: [],
        projectAll: [],
        intro: [
          {
            icon_url: require('../assets/img/index/project_icon.png'),
            category: '项目',
            detail: '<span style="color: #00257A; font-weight: 500;font-size: 15px">30</span>余项项目'
          },
          {
            icon_url: require('../assets/img/index/award_icon.png'),
            category: '奖项',
            detail: '获进步奖<span style="color: #00257A; font-weight: 500;font-size: 15px">2</span>项'
          },
          {
            icon_url: require('../assets/img/index/theses_icon.png'),
            category: '论文',
            detail: '<span style="color: #00257A; font-weight: 500;font-size: 15px">200</span> 余篇论文'
          },
          {
            icon_url: require('../assets/img/index/public_icon.png'),
            category: '专著',
            detail: '<span style="color: #00257A; font-weight: 500;font-size: 15px">10</span>余部专著'
          },
          {
            icon_url: require('../assets/img/index/patent_icon.png'),
            category: '专利',
            detail: '<span style="color: #00257A; font-weight: 500;font-size: 15px">30</span>余项专利'
          }
        ],
        coImgUrls: [
          {url: require('../assets/img/index/yutongquanqiu.png')},
          {url: require('../assets/img/index/guojiadianwang.png')},
          {url: require('../assets/img/index/langchi.png')},
          {url: require('../assets/img/index/wulianye.png')}
        ],
        tabNames: ['网络空间安全', '大数据与智能计算', '互联网+'],
        nowIndex: 0

      }
    }
  }
</script>

<style  scoped="scoped" lang="scss">


  @import '../assets/css/page';




  /*
    首页通用样式
  */
  a {
    text-decoration: none;
  }

  .desc {
    color: #7685a6;
    font-size: 14px;
    font-weight: 200;
  }
  .title-main {
    color: #061f54;
    font-size: 24px;
    font-weight: 400;
  }
  .detail-container {
    padding-left: 20%;
    padding-right: 20%;
  }


  /*
    团队概述
  */

  #teamintro {
    width: 100%;
    background-color: white;
    padding-bottom: 3em;
    padding-top: 3em;
  }
  #teamintro .content {
    width: 900px;
  }

  #teamintro .title-main+.desc {
    margin-top: 0.5em;
  }
  .our-achieves {
    margin-top: 3em;
  }
  .achievement .desc {
    font-weight: 400;
  }
  .achieve-icon {
    width: 3.5em;
  }
  .achieve-icon + .desc {
    margin-top: 1em;
  }

  /*
    project
  */
  #project {
    width: 100%;
    background-color: #f5f8ff;
    padding-bottom: 3em;
    padding-top: 3em;
  }
  #project-show {
    @extend .detail-container;
  }
  .project-tabs {
    padding-right: 10%;
    padding-left: 10%;
  }
  .project-tabs .desc {
    font-weight: 400;
  }
  .active {
    color: #247fbb;
    /*border-bottom: 1px solid #247fbb;*/
  }
  .bottom-line {
    margin-top: 3px;
    margin-left: 40%;
    margin-right: 40%;
    height: 1px;
    background-color: #247fbb;
  }

  .cell-container{
    padding: 0 3em;
  }

  .project-img {
    width: 100%;
    border-radius: 0.5em 0.5em 0 0;
  }

  .project-cell{
    padding-bottom: 2em;
    background-color: white;
    border-radius: 0.5em;
    text-align: center;
  }

  .project-cell .desc {
    margin-top: 10px;
    font-weight: 400;
  }

  #more-button{
    padding-top: 4em;
    margin: 0 auto;
  }

  .achieve-detail {
    @extend #more-button;
  }

  button {
    width: 160px;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    border-color: #333;
    border-radius: 5px;

    color: #333;
    font-weight: 400;
    font-size: 14px;
  }

  /*
    合作伙伴
  */
  #partner{
    background-color: white;
    padding-bottom: 3em;
    padding-top: 3em;
  }
  #partner .content {
    width: 900px;
  }
  #partner .title-main + .desc {
    margin-top: 0.5em;
  }
  #partner-show{
    margin-top: 2em;
    margin-bottom: 10px;
  }

  #partner-show img {
    width: 100%;
  }
  .last {

  }




  @media (max-width: 768px){

    .achieve-detail button{
      width: inherit;
    }

    .cell-container{
      padding: 0 5px;
    }
    .cp-partner-img{
      width: 64px;
      height: 30px;
    }

    .detail-container{
      padding-left: 0;
      padding-right: 0;
    }
    .achievement {
      margin-bottom: 10px;
    }
    .achieve-detail {
      padding-top: 0px;
    }
    .achieve-detail button{
      margin: 0;
      border: 0;
      padding-top: 5px;
      width: 80px;
    }
    .achieve-detail button p {
      color: #373d41;
      font-size: 14px;
      font-weight: 500;
      margin-top: 10px;
      margin-left: 3px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .cell-container{
      padding: 0 5px;
      text-align: center;
    }

  }

</style>
