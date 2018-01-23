<template>
  <div id="IndexBanner">
<!--    <img :src="bannerImg"/>-->
    <div id="banner" class="container">
      <div class="row">
        <div id="banner-discript" class=" col-xs-6">
          <p>主要研究方向</p>
          <div style="width:15%;height:1px;background-color: #F5F5F5;margin-top: 1%;margin-bottom: 3%;"></div>
          <p>网络空间安全</p>
          <p>大数据分析及智能信息处理</p>
          <p>互联网+</p>
        </div>
        <div id="banner_icon" class=" col-xs-6">
          <img src="../assets/img/index/banner_icon.jpg">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
/*  import {deviceType} from '../js/common/common'
  import bannerImgiOS from '../assets/img/index/banner-ios.jpg'
  import bannerImgAndroid from '../assets/img/index/banner-android.jpg'
  import bannerImgPc from '../assets/img/index/bannerv-pc.jpg' */
  export default {
    name: 'IndexBanner'
    /* computed: {
      bannerImg: function () {
        if (deviceType() === 'Pc') {
          return bannerImgPc
        } else if (deviceType() === 'Android') {
          return bannerImgAndroid
        } else {
          return bannerImgiOS
        }
      }
    } */
  }
</script>

<style scoped>
/*  #IndexBanner img {
    width: 100%;
  }*/
@media (max-width: 768px){
  #banner{
    display: none;
  }
}

#banner{
  background-color: #08346a;
  width:100%;
  padding-left: 25%;
  padding-right: 25%;
}

#banner-discript{
  padding-top: 5%;
  width:50%;
}

#banner_icon{
  width:50%;
}

#banner-discript p{
  color: #F5F5F5;
  font-size: 20px;
  text-align: left;
  line-height: 170%;
}

#banner img{
  width: 25em;
  margin-right: 5%;
  margin-top: 2%;
  }

</style>
