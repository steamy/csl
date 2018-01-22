<template>
  <div id="team">
    <navigation></navigation>
    <index-banner></index-banner>

    <!--<teachers v-if="isteacher"></teachers>-->
    <!--<students v-else></students>-->
    <router-view></router-view>


    <br/>

    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import Banner from '../components/Banner'
  import IndexBanner from '../components/IndexBanner'
  import Teachers from '../components/team/Teachers'
  import Students from '../components/team/Students'

  export default {
    components: {
      Students,
      Teachers,
      IndexBanner,
      SiteFooter,
      Navigation,
      'app-banner': Banner},
    name: 'Team',
    mounted () {
      this.checkWho()
    },
    methods: {
      checkWho: function () {
        console.log(this.$route.params.who)
        if (this.$route.params.who === 'teachers') {
          this.isteacher = true
        } else {
          this.isteacher = false
          console.log('student')
        }
      }
    },
    data () {
      return {
        isteacher: true
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
