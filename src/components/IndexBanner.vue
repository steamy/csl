<template>
  <div id="IndexBanner">
    <img :src="bannerImg"/>
  </div>

</template>

<script>
  import {deviceType} from '../js/common/common'
  import bannerImgiOS from '../assets/img/index/banner-ios.jpg'
  import bannerImgAndroid from '../assets/img/index/banner-android.jpg'
  import bannerImgPc from '../assets/img/index/bannerv-pc.jpg'
  export default {
    name: 'IndexBanner',
    computed: {
      bannerImg: function () {
        if (deviceType() === 'Pc') {
          return bannerImgPc
        } else if (deviceType() === 'Android') {
          return bannerImgAndroid
        } else {
          return bannerImgiOS
        }
      }
    }
  }
</script>

<style scoped>
  #IndexBanner {

  }
  #IndexBanner img {
    width: 100%;
  }

</style>
