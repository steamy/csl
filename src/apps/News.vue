<template>
  <div id="news">
    <navigation :show-banner-props="isShowBanner"></navigation>

    <router-view></router-view>

    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import {deviceType} from '../js/common/common'

  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'news',
    data () {
      return {
        isShowBanner: true
      }
    },
    created () {
      this.isDetail()
    },
    methods: {
      isDetail: function () {
        if (this.$route.name === 'detail') {
          this.isShowBanner = false
        } else if (deviceType() === 'Pc') {
          this.isShowBanner = true
        } else {
          this.isShowBanner = false
        }
      }
    },
    watch: {
      $route () {
        this.isDetail()
      }
    }
  }
</script>

<style  lang="scss" >
  @import "../assets/css/common.scss";
  #news {

  }



</style>
