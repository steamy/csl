<template>
  <div class="Index">
    <navigation></navigation>
    <img src="../assets/img/index/banner.jpg" style="width: 100%;">
    <div class="row about-us-box">
      <div class="col-md-6" style="width: 50%;margin-top: 30px">
        <p class="title-left">我们的团队</p>
        <p class="detail-left">
          网络空间安全实验室以网络空间安全、大数据分析及智能信息处理、
          互联网+作为主要研究方向。承担了30余项与网络安全相关的项目，
          包括：国家自然科学基金、国家“863”计划、国防 “十二五”基础预研等。
          从实验室成立至今，获得四川省科技进步奖二等奖2项，相关论文发表200余篇、
          专著10部、专利授权与申报30余项。
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/img/logo/logo_1.png" style="width: 50%;"/>
      </div>
    </div> <!--about-us-box-->

    <div class="project-info-box">
      <p class="title-left">我们的项目</p>
      <div class="project-collection row">
        <div class="project-cell col-md-3">
          <img class="project-img" src="../assets/img/index/1.jpg">
          <p class="project-title">安全态势感知</p>
        </div>
        <div class="project-cell col-md-3 col-md-offset-1">
          <img class="project-img" src="../assets/img/index/2.jpg">
          <p class="project-title">域通全球</p>
        </div>
        <div class="project-cell col-md-3 col-md-offset-1">
          <img class="project-img" src="../assets/img/index/3.jpg">
          <p class="project-title">五粮液</p>
        </div>
      </div>
    </div><!--project-info-box-->


    <div class="co-partner-box">
      <p class="title-left">合作伙伴</p>
      <div class="row cp-partner-collection">
        <div class="col-md-3" v-for="imgUrl in coImgUrls">
          <a class="thumbnail" style="padding: 0;border: 0">
            <img :src="imgUrl.url" style="width: 100%"/>
          </a>
        </div>
      </div>
    </div><!--co-partner-box-->

    <div class="bottom-nav-box">
      <div class="row">
        <div class="col-md-6"style="border-right: #555555 solid 1px">
          <p class="bottom-nav-title">相关链接</p>
          <p class="detail-left ">
            <a class="sitemap-link" href="http://www.uestc.edu.cn">电子科技大学主页</a>
            <br/>
            <a class="sitemap-link" href="http://www.ss.uestc.edu.cn/">电子科技大学信息与软件工程学院</a>
          </p>
        </div>
        <div class="col-md-6" style="padding-left: 10%">
          <p class="bottom-nav-title">联系我们</p>
          <p class="detail-left" style="white-space:pre;line-height: 26px">联系人：刘老师     TEL:15208292978<br/>E-Mail:QIHELIU@UESTC.EDU.CN<br/>联系地址：四川省成都市成华区建设北路二段四号
          </p>
        </div>
      </div>
    </div><!--bottom-nav-->

    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from './Navigation.vue'
  import SiteFooter from './SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'Index',
    data () {
      return {
        coImgUrls: [
          {url: require('../assets/img/logo/ebay.png')},
          {url: require('../assets/img/logo/huawei.png')},
          {url: require('../assets/img/logo/baidu.png')},
          {url: require('../assets/img/logo/wangyi.png')},
          {url: require('../assets/img/logo/tengxun.png')},
          {url: require('../assets/img/logo/intel.png')},
          {url: require('../assets/img/logo/maipu.png')},
          {url: require('../assets/img/logo/xiaomi.png')}
        ]
      }
    }
  }
</script>

<style scoped>
  .about-us-box{
    background-color: #fafafa;
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 10%;
  }
  .title-left{
    text-align: left;
    line-height: 40px;
    font-size: 32px;
    color: #333;
  }
  .detail-left{
    text-align: left;
    font-size: 17px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
  }
  .project-info-box{
    background-color: white;
    padding-top: 5%;
    padding-left: 10%;
    padding-bottom: 5%;
  }
  .project-collection,.cp-partner-collection{
    margin-top: 5%
  }
  .project-cell{
    background-color: #fafafa;
    height: 420px;
    border-radius: 20px;
    padding: 0;
  }
  .project-img {
    border-radius: 20px 20px 0 0;
    width: 100%;
  }
  .project-title{
    margin-top: 20px;
    font-size: 17px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
  }
  .co-partner-box{
    background-color: #fafafa;
    padding-top: 5%;
    padding-left: 10%;
    padding-bottom: 5%;
    padding-right:10%;
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

</style>
