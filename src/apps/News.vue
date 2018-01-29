<template>
  <div id="news">
    <site-header :page-index="4"></site-header>

    <index-banner v-if="isPc()"></index-banner>

    <router-view></router-view>

    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import {deviceType} from '../js/common/common'
  import SiteHeader from '../components/common/SiteHeader'
  import IndexBanner from '../components/IndexBanner'

  export default {
    components: {
      IndexBanner,
      SiteHeader,
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
      },
      isPc: function () {
        if (deviceType() === 'Pc') {
          return true
        } else {
          return false
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
