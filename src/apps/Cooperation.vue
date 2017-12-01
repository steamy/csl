<template>
  <div id="cooperation">
    <navigation></navigation>
    <img src="../assets/img/index/banner.jpg" style="width: 100%;">
    <div class="CooperativeProject" >
      <div class="project-details" style="...">
        <p class="project-name">域通全球</p>
        <p class="project-introduction">
          手机可视化导购系统。联牧场是新兴的一个理念，
          即将传统牧场与互联网结合起来，这样的结合有利于牧场管理者与牧场客户随时随地监测牧场实况。
          传统的视频监控系统只限于牧场管理者，而客户却无法方便快捷的了解牧场的实际情况，
          无法使客户确信自己购买的羊是纯天然野生放养的。本监控软件，将提供即时的视频监控功能，
          以及实时通信功能，让牧场管理者与客户通过android手机就可以随时掌握牧场实况，
          双方也可通过此软件进行交流，使客户购买更加方便，交易更加快捷。
          从而让牧场主（/投资者）以最便捷的途径获得农牧业投资回报，
          牧场客户可以享受专属的放心的农牧业消费服务。
        </p>
      </div>
      <div class="project-pic">
        <img src="../assets/img/index/3.jpg" style="...">
      </div>
    </div>
    <div class="CooperativeProject" >
      <div class="project-details" style="...">
        <p class="project-name">五粮液互联网营销</p>
        <p class="project-introduction">
          互联网项目电商项目。
        </p>
      </div>
      <div class="project-pic">
        <img src="../assets/img/index/3.jpg" style="...">
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
    name: 'cooperation'
  }
</script>

<style scoped>
  @import '../assets/css/common.scss';
  .CooperativeProject{
    background-color: #fafafa;
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 10%;
    height: 600px;
  }
  .project-details{
    float: left;
    width: 50%;
  }
  .project-name{
    line-height: 40px;
    font-size: 32px;
    color: #333;
    text-align: left;
  }
  .project-introduction{
    font-size: 17px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
    text-align: left;
  }
  .project-pic{
    float: right;
    padding-right: 15%;
  }

</style>
