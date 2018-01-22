<template xmlns="http://www.w3.org/1999/html">
  <div class="Index">
    <navigation></navigation>
    <index-banner></index-banner>

    <!-- 团队概述-->
    <section id="teamintro">
      <p class="title-main">团队概况</p>
      <p class="desc">网络安全空间实验室以网络空间安全、大数据分析及智能信息处理、互联网+作为主要方向</p>
      <div class="row our-achieves">
        <div class="col-xs-2 achievement" v-for="achieve in intro">
          <img class=" achieve-icon" :src="achieve.icon_url"/>
          <p class="desc">{{achieve.category}}</p>
          <p class="desc">{{achieve.detail}}</p>
        </div>
      </div>
    </section>

    <!--项目展示-->
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
            <div class="project-cell">
              <img class="project-img" :src="project.show_img">
              <p class="desc" >{{project.show_title}}<br><span style="font-weight: 300">{{project.show_detail}}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div id="more-button">
        <button onclick="window.location.href='cooperation.html'">查看更多</button>
      </div>

    </section>

    <!--合作伙伴-->
    <section id="partner">

      <p class="title-main">合作伙伴</p>
      <p class="desc">卓越工程师计划实施-实习实训</p>

      <div id="partner-show" class="row">
        <div class="col-xs-3" v-for="imgUrl in coImgUrls">
          <img :src="imgUrl.url"/>
        </div>
      </div>
    </section>

    <!-- 联系我们和相关链接-->
    <section id="connect-us">

      <div class="row">
        <div class="col-xs-7">
          <p class="desc bolder">相关链接</p>
          <p><a class="desc" target="_blank" href="http://www.uestc.edu.cn">电子科技大学主页</a></p>
          <p><a class="desc" target="_blank" href="http://www.ss.uestc.edu.cn/">电子科技大学信息与软件工程学院</a></p>
        </div>

        <div class="col-xs-5">
          <p class="desc bolder">联系我们</p>
          <p class="desc">联系人：刘老师</p>
          <p class="desc">TEL:15208292978</p>
          <p class="desc">E-Mail:QIHELIU@UESTC.EDU.CN</p>
          <p class="desc">联系地址：四川省成都市成华区建设北路二段四号</p>
        </div>
      </div>

    </section>


    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from './Navigation'
  import SiteFooter from './SiteFooter'
  import {isPC} from '../js/common/common'
  import IndexBanner from './IndexBanner'
  import {jsonFetcher} from '../fetchdata/fetcher'

  export default {
    components: {
      IndexBanner,
      SiteFooter,
      Navigation},
    name: 'Index',
    computed: {
      isPC: isPC
    },
    mounted () {
      this.getPojects()
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
        this.projectNow = this.projectAll[index]
      },
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
        projectAll: [
          [
            {
              show_title: '网络空间',
              show_detail: '安全态势',
              show_img: require('../assets/img/index/1.jpg')
            },
            {
              show_title: '智能计算',
              show_detail: '垃圾邮件识别',
              show_img: require('../assets/img/index/2.jpg')
            },
            {
              show_title: '云安全',
              show_detail: '密码学',
              show_img: require('../assets/img/index/3.jpg')
            }
          ],
          [
            {
              show_title: '智能计算',
              show_detail: '熊猫动漫',
              show_img: require('../assets/img/index/3.jpg')
            },
            {
              show_title: '智能计算',
              show_detail: '交通仿真',
              show_img: require('../assets/img/index/2.jpg')
            },
            {
              show_title: '朗驰',
              show_detail: 'PG网关',
              show_img: require('../assets/img/index/1.jpg')
            }
          ],
          [
            {
              show_title: '域通全球',
              show_detail: '商业项目',
              show_img: require('../assets/img/index/3.jpg')
            },
            {
              show_title: '五粮液',
              show_detail: '互联网营销',
              show_img: require('../assets/img/index/2.jpg')
            },
            {
              show_title: '卧龙',
              show_detail: '智慧旅游',
              show_img: require('../assets/img/index/1.jpg')
            }
          ]
        ],
        intro: [
          {
            icon_url: require('../assets/img/index/project_icon.png'),
            category: '项目',
            detail: '30余项项目'
          },
          {
            icon_url: require('../assets/img/index/award_icon.png'),
            category: '奖项',
            detail: '获进步奖2项'
          },
          {
            icon_url: require('../assets/img/index/theses_icon.png'),
            category: '论文',
            detail: '200余篇论文'
          },
          {
            icon_url: require('../assets/img/index/public_icon.png'),
            category: '专著',
            detail: '10余部专著'
          },
          {
            icon_url: require('../assets/img/index/patent_icon.png'),
            category: '专利',
            detail: '30余项专利'
          }
        ],
        coImgUrls: [
          {url: require('../assets/img/index/yutongquanqiu.png')},
          {url: require('../assets/img/index/guojiadianwang.png')},
          {url: require('../assets/img/index/langchi.png')},
          {url: require('../assets/img/index/wulianye.png')}
        ],
        tabNames: ['信息安全', '智能计算', '互联网+'],
        nowIndex: 0

      }
    }
  }
</script>

<style  scoped="scoped" lang="scss">





  /*
    首页通用样式
  */

  .desc {
    color: #373d41;
    font-size: 14px;
    font-weight: 200;
  }
  .title-main {
    color: #333;
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

  #teamintro .title-main+.desc {
    margin-top: 0.5em;
  }
  .our-achieves {
    @extend .detail-container;
    margin-top: 3em;
  }
  .achievement {
    width: 20%;
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
    background-color: #f1f2f3;
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
    margin-left: 45%;
    margin-right: 45%;
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

  #more-button button {
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
    width: 100%;
    background-color: white;
    padding-bottom: 3em;
    padding-top: 3em;
  }
  #partner .title-main + .desc {
    margin-top: 0.5em;
  }
  #partner-show{
    @extend .detail-container;
    margin-top: 2em;
    margin-bottom: 10px;
  }

  #partner-show img {
    width: 100%;
  }
  /*
  联系我们
  */
  #connect-us{
    width: 100%;
    background-color: #f1f2f3;
    padding-bottom: 3em;
    padding-top: 3em;

    text-align: left;
  }

  #connect-us > div {
    @extend .detail-container
  }

  #connect-us .desc {
    padding-top: 4px;
    font-weight: 400;
  }
  #connect-us .bolder {
    font-weight: 500;
    padding-bottom: 1em;
  }
  #connect-us a {
    text-decoration: none;
  }
  #connect-us a:hover {
    color: #1a6fa6;
  }


  @media (max-width: 768px){

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
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .cell-container{
      padding: 0 5px;
    }

  }

</style>
