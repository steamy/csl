<template>
  <div class="Index">
    <navigation></navigation>
    <img src="../assets/img/index/banner.jpg" style="width: 100%;">
    <div class="about-us-box">
      <p class="title-left">我们的团队</p>
      <p class="detail-left">
        网络空间安全实验室以网络空间安全、大数据分析及智能信息处理、<br>
        互联网+作为主要研究方向。承担了30余项与网络安全相关的项目，<br>
        包括：国家自然科学基金、国家“863”计划、国防 “十二五”基础预研等。<br>
        从实验室成立至今，获得四川省科技进步奖二等奖2项，相关论文发表200余篇、<br>
        专著10部、专利授权与申报30余项。
      </p>
      <img src="../assets/img/logo/logo_1.png" style="width: 30%;margin-left: 20px"/>
    </div>


  </div>
</template>

<script>
  import Navigation from './Navigation.vue'
  export default {
    components: {Navigation},
    name: 'Index'
  }
</script>

<style scoped>
  .about-us-box{
    background-color: #fafafa;
    padding-top: 10%;
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

</style>
