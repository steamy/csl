<template>
  <div id="IndexBanner" class="main-container">
<!--    <img :src="bannerImg"/>-->
    <div id="banner" class="content">
      <div class="row">
        <div id="banner-discript" class="col-md-6 col-sm-6 col-xs-12">
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

  #IndexBanner{
    padding-bottom: 60px;
    padding-top: 60px;
    background-color: #08346a;
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
  color: #F5F5F5;
  font-size: 24px;
  text-align: left;
  font-weight: 400;
}

#banner img{
  width: 250px;
}

  @media (max-width: 768px) {
    #banner_icon {
      display: none;
    }
    #IndexBanner {
      padding-bottom: 30px;
      padding-top: 30px;
    }
    #banner-discript h1 {
      font-size: 36px;
      text-align: center;
    }
    #banner-discript p {
      font-size: 20px;
      text-align: center;
    }
  }



</style>
