<template>
  <div id="team">
    <navigation></navigation>
    <!--banner-->
    <div>
      <div style="padding-top: 5%;padding-bottom: 5%">
        <h1 style="color: #247fbb">Team</h1>
        <div style="width: 10%;height: 3px;background-color: #247fbb;margin-left: 45%;margin-top: 20px"></div>
      </div>
      <img src="../assets/img/academy/banner.png" style="width: 100%;height: 200px"/>
    </div>
    <!--banner-->


    <!--tab-->
    <div id="teamContain">
      <div class="row" style="padding-top: 6em">
        <div class="col-md-2">
          <div class="line-flag"></div>
        </div>
        <div class="col-md-10" style="padding-top: 0.6em">
          <p class="title-text">团队师资</p>
        </div>
      </div>

      <div class="teamTeaches" >
        <div class="teacher row" style="padding-top: 10%;padding-bottom: 5%" v-for="teacher in teachers">
          <div class="col-md-4">
            <img style="width: 13em" :src="teacher.avatorUrl">
          </div>
          <div class="">
            <p class="title-text">
              {{teacher.name}}   <span style="color: #555555">{{teacher.professionalTitle}}</span>
            </p>
            <br/>
            <p v-for="intro in teacher.simpleIntro">
              {{intro}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--tab-->
    <br/>
    <br/>
    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'Team',
    data () {
      return {
      }
    },
    computed: {
      teachers: function () {
        var teachersJson = require('../assets/json/teachers.json')
        console.log(teachersJson)
        for (var i = 0; i < teachersJson.length; i++) {
          var url = teachersJson[i].avatorUrl.split('/')
          teachersJson[i].avatorUrl = require('../assets/img/teacher/' + url[url.length - 1])
        }
        return teachersJson
      }
    },
    methods: {
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

  #teamContain {
    position: relative;
    margin-top: -50px;
    margin-left:10%;
    margin-right: 10%;
    width: 80%;
    min-height: 30em;
    background-color: white;
    border-radius: 0.3em;
    padding-bottom: 5%;
  }

  .line-flag {
    background-color: $theme-color-blue;
    margin-left: 6em;
    width: 0.4em;
    height: 4em;
  }
  p {
    text-align: left;
  }
  .professional-tile {

  }
</style>
