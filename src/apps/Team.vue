<template>
  <div id="team">
    <navigation></navigation>
    <!--banner-->
    <div>
      <div id="banner-title-container" style="padding-top: 1%;padding-bottom: 1%;" >
        <h1 style="color: #247fbb">Team</h1>
        <div style="width: 10%;height: 3px;background-color: #247fbb;margin-left: 45%;margin-top: 20px"></div>
      </div>
      <img id="banner-img" src="../assets/img/academy/banner.png" style="width: 100%;height: 200px"/>
    </div>
    <!--banner-->


    <!--tab-->
    <div class="teamContain">
      <div class="row">
        <div class="line-flag"></div>
        <p class="title-text-1">团队师资</p>
      </div>

      <div class="teamTeaches" >
        <div class="teacher row"  v-for="teacher in teachers">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <img  :src="teacher.avatorUrl">
          </div>
          <div class="teacherIntr col-md-8 col-sm-12 col-xs-12">
            <p class="title-text">
              {{teacher.name}}   <span style="color: #555555">{{teacher.professionalTitle}}</span>
            </p>
            <br/>
            <p  class="teacher-info" v-for="intro in teacher.simpleIntro">
              {{intro}}
            </p>
          </div>
        </div>

        <br/>

        <div class="row">
          <div class="line-flag"></div>
          <p class="title-text-1">学生风采</p>
        </div>
        <div class="studentIntr" >
          <app-banner :listImg="listImg"></app-banner>
        </div>
      </div>
    </div>
    <!--tab-->
    <br/>


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

  .teamContain {
    position: relative;
    margin-top: -50px;
    margin-left:20%;
    margin-right: 20%;
    width: 60%;
    /*min-height: 30em;*/
    background-color: white;
    border-radius: 0.3em;
    padding-bottom: 5%;
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

@media (max-width: 768px) {
  #banner-title-container{
    background-color: white;
  }
  #banner-img {
    display: none;
  }
  .teamContain{
    margin-top: 0;
    margin: 0;
    padding-top: 1em;
    width: 100%;
  }
  .teacher{
    padding: 3em 0 0 4%;
  }
  .title-text {
    text-align: center;
    font-size: 22px;
  }
  .teacher-info {
    padding-left: 15%;
    padding-right: 15%;
  }
  div.col-sm-12 img {
    width: 70%;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  #banner-title-container{
    background-color: white;
  }
  #banner-img {
    display: none;
  }
  .teamContain{
    margin-top: 0;
    margin: 0;
    padding-top: 1em;
    width: 100%;
  }
  .teacher{
    padding: 3em 0 0 4%;
  }
  .title-text {
    text-align: center;
    font-size: 22px;
  }
  .teacher-info {
    padding-left: 15%;
    padding-right: 15%;
  }
  div.col-sm-12 img {
    width: 70%;
  }
}
  @media (min-width: 992px) {
    div.col-sm-12 img {
      width: 60%;
    }
  }


</style>
