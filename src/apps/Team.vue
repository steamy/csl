<template>
  <div id="team">
    <navigation :show-banner-props="isPc"></navigation>
    <router-view></router-view>


    <br/>

    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import Banner from '../components/Banner'
  import {deviceType} from '../js/common/common'

  export default {
    components: {
      SiteFooter,
      Navigation,
      'app-banner': Banner},
    name: 'Team',
    mounted () {},
    methods: {},
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

<style scoped lang="scss">
@import '../assets/css/common.scss';
#team {
  font-family: 方正兰亭黑简体;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #f0f2f5;
}



</style>
