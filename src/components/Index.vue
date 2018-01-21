<template xmlns="http://www.w3.org/1999/html">
  <div class="Index">
    <navigation></navigation>
    <!--<img src="../assets/img/index/banner.jpg" style="width: 100%;">-->
    <div class=" container about-us-box">
      <div class="col-xs-12 col-md-6" style="margin-top: 30px">
        <p class="title-left">我们的团队</p>
        <p class="detail-left">
          网络空间安全实验室以网络空间安全、大数据分析及智能信息处理、
          互联网+作为主要研究方向。承担了30余项与网络安全相关的项目，
          包括：国家自然科学基金、国家“863”计划、国防 “十二五”基础预研等。
          从实验室成立至今，获得四川省科技进步奖二等奖2项，相关论文发表200余篇、
          专著10部、专利授权与申报30余项。
        </p>
      </div>
      <div class="col-md-6 team-logo" style="text-align: center">
        <img  src="../assets/img/logo/logo_1.png" style="width: 18em;"/>
      </div>
    </div> <!--about-us-box-->

    <div style="background-color: #fafafa">

      <div class="container project-info-box">
        <p class="title-left">我们的项目</p>

        <div id="proj-container-md">
          <ul class="tabs row">
            <li class="li-tab col-md-4 col-xs-4 col-sm-4" v-for="(name,index) in tabNames"
                @click="toggleTabs(index)"
                :class='{active:index==nowIndex,liTabFirst:index==0,liTabLast:index==2}'>{{name}}</li>
          </ul>

          <div  class="divTab project-collection row" v-show="nowIndex===0">
            <div class="cell-container col-xs-4 col-sm-4" v-for="(project,index) in securityProj">
              <div class="project-cell">
                <img class="project-img" :src="project.url">
                <p class="proj-title" >{{project.comName}}<br><span style="color: gray">{{project.projName}}</span></p>
              </div>
            </div>
          </div>

          <div  class="divTab project-collection row" v-show="nowIndex===1">
            <div class="cell-container col-md-4  col-xs-4 col-sm-4" v-for="(project,index) in IntelliComputeProj">
              <div class="project-cell">
                <img class="project-img" :src="project.url">
                <p class="proj-title" >{{project.comName}}<br>{{project.projName}}</p>
              </div>
            </div>
          </div>

          <div  class="divTab project-collection row" v-show="nowIndex===2">
            <div class="cell-container col-md-4 col-xs-4 col-sm-4" v-for="(project,index) in internetPlusProj">
              <div class="project-cell">
                <img class="project-img" :src="project.url">
                <p class="proj-title" >{{project.comName}}<br>{{project.projName}}</p>
              </div>
            </div>
          </div>

        </div><!--proj-container-md-->

      </div><!--project-info-box-->

    </div>

    <div class="co-partner-box">
      <div class="container">
        <p class="title-left">合作伙伴</p>


        <div class="row cp-partner-collection">
          <div class="col-md-3 col-sm-3 col-xs-3" v-for="imgUrl in coImgUrls">
            <a class="thumbnail"  style="padding: 0;border: 0">
              <img :src="imgUrl.url" class="cp-partner-img"/>
            </a>
          </div>
        </div>
      </div>
    </div><!--co-partner-box-->

    <div class="bottom-nav-box">
      <div class="row">
        <div class="col-md-6 col-xs-12  col-sm-12">
          <p class="bottom-nav-title">相关链接</p>
          <p class="detail-left ">
            <a class="sitemap-link" target="_blank" href="http://www.uestc.edu.cn">电子科技大学主页</a>
            <br/>
            <a class="sitemap-link" target="_blank" href="http://www.ss.uestc.edu.cn/">电子科技大学信息与软件工程学院</a>
          </p>
        </div>

        <div class="col-md-6 col-xs-12 col-sm-12" ><!--style="padding-left: 10%"-->
          <p class="bottom-nav-title">联系我们</p>
          <p class="detail-left" style="white-space:pre;line-height: 26px">联系人：刘老师     TEL:15208292978<br/>E-Mail:QIHELIU@UESTC.EDU.CN<br/>联系地址：四川省成都市成华区建设北路二段四号
          </p>
        </div>
      </div>
    </div>
    <!--bottom-nav-->

    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from './Navigation'
  import SiteFooter from './SiteFooter'
  import {isPC} from '../js/common/common'

  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'Index',
    computed: {
      isPC: isPC
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
      }
    },
    data () {
      return {
        coImgUrls: [
          {url: require('../assets/img/logo/yutongquanqiu.jpg')},
          {url: require('../assets/img/logo/langchi.jpg')},
          {url: require('../assets/img/logo/guojiadianwang.png')},
          {url: require('../assets/img/logo/wuliangye.png')}
        ],
        tabNames: ['信息安全', '智能计算', '互联网+'],
        nowIndex: 0,
        securityProj: [
          {
            comName: '网络空间',
            projName: '安全态势',
            url: require('../assets/img/index/1.jpg')
          },
          {
            comName: '智能计算',
            projName: '垃圾邮件识别',
            url: require('../assets/img/index/2.jpg')
          },
          {
            comName: '云安全',
            projName: '密码学',
            url: require('../assets/img/index/3.jpg')
          }
        ],
        IntelliComputeProj: [
          {
            comName: '智能计算',
            porjName: '熊猫动漫',
            url: require('../assets/img/index/3.jpg')
          },
          {
            comName: '智能计算',
            projName: '交通仿真',
            url: require('../assets/img/index/2.jpg')
          },
          {
            comName: '朗驰',
            projName: 'PG网关',
            url: require('../assets/img/index/1.jpg')
          }
        ],
        internetPlusProj: [
          {
            comName: '域通全球',
            projName: '商业项目',
            url: require('../assets/img/index/3.jpg')
          },
          {
            comName: '五粮液',
            projName: '互联网营销',
            url: require('../assets/img/index/2.jpg')
          },
          {
            comName: '卧龙',
            projName: '智慧旅游',
            url: require('../assets/img/index/1.jpg')
          }
        ]
      }
    }
  }
</script>

<style  scoped>

  .about-us-box{
    /*background-color: #fafafa;*/
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .title-left{
    text-align: left;
    line-height: 40px;
    font-size: 32px;
    color: #333;
  }
  .detail-left{
    margin-top: 0.6em;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
  }
  .project-info-box{
    background-color: #fafafa;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .cp-partner-collection {
    margin-top: 3em;
  }
  .project-collection{
    background-color: #f5f5f5;
    margin: 0;
    padding-top: 3em;
    padding-bottom: 3em;
    padding-left: 0em !important;
  }
  .cell-container{
    padding: 0 3em;
  }
  .project-cell{
    padding-bottom: 2em;
    background-color: white;
    border-radius: 0.5em;
    text-align: center;
  }
  .project-img {
    width: 100%;
    border-radius: 0.5em 0.5em 0 0;
  }
  .proj-title{
    margin-top: 2em;
    font-size: 16px;
    color: #333;
  }
  .co-partner-box{
    background-color: white;
    padding-top: 4em;
    padding-bottom: 4em;
  }

  .bottom-nav-box{
    background-color: #f5f5f5;
    padding-top: 5%;
    padding-left: 10%;
    padding-right:10%;
  }
  .bottom-nav-title{
    text-align: left;
    line-height: 40px;
    font-size: 26px;
    color: #333;
  }

  .sitemap-link{
    text-decoration: none;
    font-size: 16px;
    color: #333;
  }
  .sitemap-link:hover {
    color: #1a6fa6;
  }
  #proj-container-md{
    position: relative;
    border-radius: 0.3em;
    margin-top: 1em;
  }


  /*tabs*/
  .tabs {
    width: 100%;
/*    height: 6em;
    margin: 0;*/
    margin:0 0 1em 0;
  }
  .li-tab{
/*    background-color: white;*/
    height: inherit;
    font-size: 20px;
    padding-top: 20px;
    color: #333;
  }


  .active{
    color: #247fbb;
  }

  .cp-partner-img{
    width: 260px;
    height: 110px;
  }
  .divTab {
    text-align: left;
    padding-top: 3em;
    padding-left: 6em;
  }


  @media (max-width: 768px){
    .team-logo{
      display: none;
    }
    .title-left,.title-left + .detail-left{
      text-align: center;
    }
    .detail-left{
      padding: 0px 10px;
    }
    .cell-container{
      padding: 0 5px;
    }
    .proj-title{
      font-size: 14px;
    }
    .cp-partner-img{
      width: 64px;
      height: 30px;
    }
    .bottom-nav-title + .detail-left {
      font-size: 14px;
    }
    .bottom-nav-title{
      font-size: 22px;
    }
    .sitemap-link{
      font-size: 14px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .team-logo{
      display: none;
    }
    .title-left{
      text-align: center;
    }
    .cell-container{
      padding: 0 5px;
    }
    .proj-title{
      font-size: 14px;
    }
    .cp-partner-img{
      width: 64px;
      height: 30px;
    }
  }

</style>
