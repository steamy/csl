<template>
  <div id="team">
    <navigation></navigation>
    <!--banner-->
    <div>
      <div style="padding-top: 1%;padding-bottom: 1%" >
        <h1 style="color: #247fbb">Team</h1>
        <div style="width: 10%;height: 3px;background-color: #247fbb;margin-left: 45%;margin-top: 20px"></div>
      </div>
      <img src="../assets/img/academy/banner.png" style="width: 100%;height: 200px"/>
    </div>
    <!--banner-->


    <!--tab-->
    <div id="teamContain">
      <div class="row">
        <div class="line-flag"></div>
        <p class="title-text-1">团队师资</p>

<!--        <div class="col-md-2">
          <div class="line-flag"></div>
        </div>
        <div class="col-md-10" style="padding-top: 0.6em">
          <p class="title-text">团队师资</p>
        </div>-->
      </div>

      <div class="teamTeaches" >
        <div class="teacher row"  v-for="teacher in teachers">
          <div class="col-md-4">
            <img style="width: 60%" :src="teacher.avatorUrl">
          </div>
          <div class="teacherIntr col-md-8">
            <p class="title-text">
              {{teacher.name}}   <span style="color: #555555">{{teacher.professionalTitle}}</span>
            </p>
            <br/>
            <p v-for="intro in teacher.simpleIntro">
              {{intro}}
            </p>
          </div>
        </div>
        <div class="studentIntr" >
          <app-banner :listImg="listImg"></app-banner>
        </div>
      </div>
    </div>
    <!--tab-->


    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import Banner from '../components/Banner'
  import a from '../assets/img/student/group_pic1.jpg'
  import b from '../assets/img/student/group_pic2.jpg'

  export default {
    components: {
      SiteFooter,
      Navigation,
      'app-banner': Banner},
    name: 'Team',
    data () {
      return {
        listImg: [{
          url: a
        }, {
          url: b
        }]
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
  /*  export default {
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
  } */
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
/*    margin-left:20%;
    margin-right: 20%;
    width: 60%;*/
    min-height: 30em;
    background-color: white;
    border-radius: 0.3em;
    padding-bottom: 5%;
/*    @media screen and (min-width:1800px){
        margin-left:20%;
        margin-right: 20%;
        width: 60%;
    }
    @media screen and (min-width:1200px) and (max-width: 1400px){
      margin-left:15%;
      margin-right: 15%;
      width: 70%;
    }
    @media screen and (min-width:960px) and (max-width:1199px ){
      width: 100%;
    }*/
  }

  .row{
    padding-top: 3%;
  }

  .line-flag {
    background-color: $theme-color-blue;
    margin-left: 5%;
    width: 0.4em;
    height: 4em;
    float:left;
  }
  .title-text-1{
    padding:10px 0 0 3%;
    float: left;
    font-size: 26px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
    text-align: left;
  }
  .teacherIntr{
    padding:1em 1em 0 0;
  }
  .teacher{
    padding:4% 0 0 4%;
  }
  p {
    text-align: left;
  }
  .professional-tile {

  }

.studentIntr{
  padding:5% 10% 0 10%;
}
.swiper-container {
  width: 100%;
  height: 20em;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination-bullet {
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
  }
}
</style>
