<template xmlns="http://www.w3.org/1999/html">
  <div class="Index">
    <!--<navigation :show-banner-props="true"></navigation>-->
    <site-header :page-index="0"></site-header>

    <index-banner></index-banner>
    <!-- 团队概述-->
    <team-intro></team-intro>


    <!--项目展示-->

    <projects-show></projects-show>

    <team-show></team-show>

    <!--合作伙伴-->
    <section id="partner" class="main-container">
      <div class="content">
        <div class="hd-right">
          <p class="desc">合作伙伴</p>
          <h2 class="title">卓越工程师计划实施-实习实训</h2>
        </div>

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
  import {serverRoot} from '../fetchdata/fetcher'
  import {isMobile} from '../js/common/common'
  import Moresvg from './index/moresvg'
  import ProjectsShow from './index/ProjectsShow'
  import TeamIntro from './index/TeamIntro'
  import SiteHeader from './common/SiteHeader'
  import TeamShow from './index/TeamShow'

  export default {
    components: {
      TeamShow,
      SiteHeader,
      TeamIntro,
      ProjectsShow,
      Moresvg,
      IndexBanner,
      SiteFooter,
      Navigation},
    name: 'Index',
    computed: {},
    mounted () {},
    methods: {
      isMobile: isMobile,
      createImage: function (path) {
        return serverRoot + path
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
  @import '../assets/css/index';

  /*
    首页通用样式
  */
  a {
    text-decoration: none;
  }




  /*
    合作伙伴
  */
  #partner{
    background-color: white;
    padding-bottom: 60px;
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
