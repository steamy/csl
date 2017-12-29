<template>
  <div id="cooperation">
    <!--<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <navigation></navigation>
<!--    <img src="../assets/img/index/banner.jpg" style="width: 100%;">-->
    <div class="container">
      <div class="row">
        <div class="CooperativeProject" >
          <div class="project-details col-md-8" style="...">
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
          <div class="project-pic col-md-4">
            <img src="../assets/img/index/2.jpg" style="...">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="CooperativeProject" >
          <div class="project-details col-md-8" style="...">
            <p class="project-name">五粮液互联网营销</p>
            <p class="project-introduction">
              互联网项目电商项目。
            </p>
          </div>
          <div class="project-pic col-md-4">
            <img src="../assets/img/index/3.jpg" style="...">
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
  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'cooperation'
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
@media (min-width: 1600px){
  .container{
    width:1484px;
  }
}
  .CooperativeProject{
    padding:5% 0 0 0;
    min-height: 400px;
/*    margin-left: -10%;*/
  }
  .project-details{
    float: left;
/*    min-height: 20em;*/
  /*  width: 50%;*/
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
    float: left;
    padding-right:5%;
  }

</style>
