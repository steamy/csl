<template>
  <div id="cooperation">
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
    <site-header :page-index="3"></site-header>
    <index-banner v-if="isPc"></index-banner>
    <router-view></router-view>


    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import {deviceType} from '../js/common/common'
  import AllProjects from '../components/cooperation/AllProjects.vue'
  import SiteHeader from '../components/common/SiteHeader'
  import IndexBanner from '../components/IndexBanner'
  export default {
    components: {
      IndexBanner,
      SiteHeader,
      AllProjects,
      SiteFooter,
      Navigation},
    name: 'cooperation',
    data () {
      return {
        internetSecurityPojects: [],
        bigData: [],
        internetPlus: []
      }
    },
    mounted () {
    },
    methods: {
    },
    computed: {
      isPc: function () {
        if (deviceType() === 'Pc') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  /*  @import '../assets/css/common.scss';*/
  #cooperation {
    /*    font-family: 方正兰亭黑简体;*/
    text-align: center;
    margin-top: 0;
    background-color: #fafafa;
  }
  @media (max-width: 768px) {
    #cooperation {
      margin-top: 64px;
    }
  }

</style>

