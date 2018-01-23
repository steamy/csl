<template>
  <div id="cooperation">
    <!--<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <navigation></navigation>
<!--    <img id="banner-img" src="../assets/img/index/1首页-banner.jpg" style="width: 100%;height: 350px"/>-->

    <div id="banner" class="container">
      <div class="row">
        <div id="banner-discript" class="col-md-6">
          <p>主要研究方向</p>
          <div style="width:15%;height:1px;background-color: #F5F5F5;margin-top: 1%;margin-bottom: 3%;"></div>
          <p>网络空间安全</p>
          <p>大数据分析及智能信息处理</p>
          <p>互联网+</p>
        </div>
      </div>
    </div>


    <div id="content" class="container">
      <div class="row">

<!--        <div id="link-list" class="list-group col-md-3">
          <a href="#infosecurity"  class="list-group-item list-group-item-infosecurity active">信息安全</a>
          <a href="#intecomputing" class="list-group-item list-group-item-intecompute ">智能计算</a>
          <a href="#internetplus" class="list-group-item list-group-item-internetplus ">互联网+</a>
        </div>

        <div id="title" class="col-md-6">
          <p>ABOUT</p>
          <p>项目展示 > 主要成果</p>
          <div id="projects">
            <a name="infosecurity"></a>
            <p><a href="trafficBigData.html">大数据分析及智能信息处理 > 交通大数据</a><br></p>
            <p><a href="securitySituation.html">大数据分析及智能信息处理 > 网络空间安全态势</a><br></p>
            <p><a href="#">大数据分析及智能信息处理 > 网络空间安全态势剖分技术</a><br></p>
            <p><a href="#">网络空间安全 > 密网系统</a><br></p>
            <p><a href="#">网络空间安全 > RFID漏洞扫描系统</a><br></p>
            <p><a href="#">网络空间安全 > 密网系统</a><br></p>
            <a name="intecomputing"></a>
            <p><a href="#">智能信息处理 > 机器人场景-地图管理</a><br></p>
            <p><a href="#">智能信息处理 > 变压站机器人巡检控制</a><br></p>
            <p><a href="#">大数据平台 > 四川省科技成果云服务平台</a><br></p>
            <p><a href="#">人工智能 > 机场自动托运系统</a><br></p>
            <a name="internetplus"></a>
            <p><a href="#">互联网+ > 五粮液话联网营销指挥中心</a><br></p>
            <p><a href="#">互联网+ > 域通全球商业软件系统</a><br></p>
            <p><a href="#">互联网+ > 五粮液话联网营销指挥中心</a><br></p>
            <p><a href="#">互联网+ > 五粮液话联网营销指挥中心</a><br></p>
            <p><a href="#">互联网+ > 五粮液话联网营销指挥中心</a><br></p>
          </div>
        </div>
        <div id="team_pics" class="col-md-3">
          <p>团队风采</p>
          <div class="studentIntr" >
            <app-banner :listImg="listImg"></app-banner>
          </div>
&lt;!&ndash;          <img src="../assets/img/cooperation/team1.png">&ndash;&gt;
        </div>-->

        <!--  根据项目方向分类展示项目内容.项目方向分别为信息安全，智能计算及互联网+ -->
        <div id="infosecurity" class=" col-md-4">
          <div class="project-list">
            <div class="classify">
              <img src="../assets/img/cooperation/信息安全.png">
              <p>信息安全</p>
            </div>
            <div class="classify-dtil">
              <p><a href="trafficBigData.html">交通大数据</a><br></p>
              <p><a href="securitySituation.html">网络空间安全态势</a><br></p>
              <p><a href="#">网络空间安全态势剖分技术</a><br></p>
              <p><a href="#">密网系统</a><br></p>
              <p><a href="#">RFID漏洞扫描系统</a><br></p>
              <p><a href="#">密网系统</a><br></p>
            </div>
          </div>
        </div>
        <div id="intecomputing" class=" col-md-4">
          <div class="project-list">
            <div class="classify">
              <img src="../assets/img/cooperation/智能计算.png">
              <p>智能计算</p>
            </div>
            <div class="classify-dtil">
              <p><a href="#">机器人场景-地图管理</a><br></p>
              <p><a href="#">变压站机器人巡检控制</a><br></p>
              <p><a href="#">四川省科技成果云服务平台</a><br></p>
              <p><a href="#">机场自动托运系统</a><br></p>
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
              <p><a href="#">五粮液话联网营销指挥中心</a><br></p>
              <p><a href="#">域通全球商业软件系统</a><br></p>
              <p><a href="#">五粮液话联网营销指挥中心</a><br></p>
              <p><a href="#">五粮液话联网营销指挥中心</a><br></p>
              <p><a href="#">五粮液话联网营销指挥中心</a><br></p>
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
  import a from '../assets/img/cooperation/team1.png'
  import b from '../assets/img/cooperation/team2.jpg'
  export default {
    components: {
      SiteFooter,
      Navigation,
      'app-banner': Banner},
    name: 'cooperation',
    data () {
      return {
        listImg: [{
          url: a
        }, {
          url: b
        }]
      }
    }
  }
</script>

<style scoped>
/*  @import '../assets/css/common.scss';*/
  #cooperation {
    font-family: 方正兰亭黑简体;
    text-align: center;
    margin-top: 0px;
    background-color: #fafafa;
  }

  #banner{
    background-color: #08346a;
    width:100%;
  }

  #banner-discript{
    padding:5% 0 5% 30%;
  }

  #banner-discript p{
    color: #F5F5F5;
    font-size: 18px;
    text-align: left;
    line-height: 170%;
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
    height: 350px;
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
