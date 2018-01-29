<template>
  <div id="IndexBanner" class="main-container">
<!--    <img :src="bannerImg"/>-->
    <div id="banner" class="content">
      <div class="row">
        <div id="banner-discript" class="col-md-6 col-sm-6 col-xs-12">
          <div class="slogan slogan-animation">
            <img src="../assets/img/logo/logo_2.png"/>
            <h1 class="title">网络空间安全实验室</h1>
          </div>
          <h1>主要研究方向</h1>
          <div></div>
          <p>网络空间安全</p>
          <p>大数据分析及智能信息处理</p>
          <p>互联网+</p>
        </div>
        <div id="banner_icon" class="col-md-6 col-sm-6 col-xs-0">
          <img src="../assets/img/index/banner_icon.jpg">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'IndexBanner'
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../assets/css/page';
  .slogan {
    display: none;
  }
  .slogan img{
    width: 100px !important;
    height: 100px;
  }

  #IndexBanner{
    padding-bottom: 60px;
    padding-top: 60px;
    background-color: #0b2867;
  }
  .content {
    width: 940px;
  }
#banner{

}

#banner-discript{

}
  #banner-discript h1 {
    color: white;
    font-size: 48px;
    margin-bottom: 10px;
    text-align: left;
    font-weight: 500;
  }

#banner_icon{
}

#banner-discript p{
  color: #7685a6;
  font-size: 24px;
  text-align: left;
  font-weight: 400;
  font-stretch: inherit;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
}

#banner img{
  width: 250px;
}

  @media (max-width: 768px) {
    .slogan {
      display: block;
      margin-bottom: 100px;
      padding-top: 50px;
    }
    #banner_icon {
      display: none;
    }
    #IndexBanner {
      padding-bottom: 30px;
      padding-top: 30px;
    }
    #banner-discript h1 {
      font-size: 24px;
      text-align: center;
    }
    #banner-discript p {
      font-size: 20px;
      text-align: center;
    }
    #IndexBanner {
      margin-top: 64px;
    }
  }

  /***
    动画
  */
  @keyframes slogan-in {
    0% {transform: scale(0.5,0.5)}
    80% {transform: scale(1.2,1.2)}
    100% {transform: scale(1,1)}
  }
  .slogan-animation {
    animation: slogan-in 0.9s;
    animation-fill-mode: forwards;
  }



</style>
