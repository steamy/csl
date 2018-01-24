<template>
  <div id="cooperation">
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
    <navigation :show-banner-props="isPc"></navigation>
    <router-view></router-view>


    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import {deviceType} from '../js/common/common'
  import AllProjects from '../components/cooperation/AllProjects.vue'
  export default {
    components: {
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

</style>

