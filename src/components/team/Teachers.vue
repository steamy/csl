<template>
  <div id="teachers">
    <div class="row content-container">
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
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Teachers',
    computed: {
      teachers: function () {
        var teachersJson = require('../../assets/json/teachers.json')
        console.log(teachersJson)
        for (var i = 0; i < teachersJson.length; i++) {
          var url = teachersJson[i].avatorUrl.split('/')
          teachersJson[i].avatorUrl = require('../../assets/img/teacher/' + url[url.length - 1])
        }
        return teachersJson
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/common';
  #teachers {
    margin-left:20%;
    margin-right: 20%;
    width: 60%;
    background-color: white;
  }


  .content-container {
    padding-top: 3%;
    padding-bottom: 3%;
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
