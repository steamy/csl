<template>
  <div id="trafficBigData">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <navigation></navigation>
    <img id="banner" src="../assets/img/index/1首页-banner.jpg">

    <div id="traffic-pro" class="container">
      <div class="row">
        <div id="project-info" class="col-md-9">
          <p>项目展示 > 项目详情</p>
          <div id="center">
            <p>大数据分析及智能信息处理</p>
            <p>交通大数据</p>
            <img src="../assets/img/cooperation/jtdsj.png">
          </div>
          <div id="left">
            <p>交通大数据从影响交通事故的关键特征入手，结合多源异构数据集，分析交通事故的时空规律；
              同时，通过事故时空可视化分析和展示，为交警部门掌握交通事故发生趋势规律提
              供决策支持。
            <p>根据大数据异常模式挖掘及时，及时智能化反馈异常区域信息，上报可能发生的事
              故点和相关信息，为决策者及时判断与获取第一现场信息。</p>
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
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'trafficBigData'
  }
</script>

<style>
  #trafficBigData {
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
  #traffic-pro{
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
    font-size: 14px;
    text-align: left;
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
