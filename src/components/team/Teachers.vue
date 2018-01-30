<template>
  <div id="teachers" class="main-container">
    <div class="content">
      <section class="back">
        <p class="">团队 > 团队师资</p>
      </section>

      <div class="teamTeaches" >
        <div class="teacher row"  v-for="teacher in teachers">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <img  :src="teacher.avatar_url">
          </div>
          <div class="teacherIntr col-md-9 col-sm-12 col-xs-12">
            <p class="title-main">
              {{teacher.name}} <span>{{teacher.professional_title}}</span>
            </p>
            <br/>
            <p  class="desc" v-html="teacher.introduction">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {jsonFetcher, serverRoot} from '../../fetchdata/fetcher'

  export default {
    name: 'Teachers',
    data () {
      return {
        teachers: []
      }
    },
    created () {
      this.getTeachersInfo()
    },
    methods: {
      getTeachersInfo: function () {
        jsonFetcher.get('/api/v1/teachers')
          .then(res => {
            let teachers = res.data.data
            for (let index = 0; index < teachers.length; index++) {
              teachers[index].avatar_url = serverRoot + teachers[index].avatar_url
            }
            this.teachers = teachers
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/common';
  @import '../../assets/css/page';
  #teachers {

  }
  #teachers .content{
    background-color: white;
    padding-top: 3em;
  }
  .back {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 30px;
  }
  .back p, .back a {
    color: #247fbb;
  }

  .desc{
    text-indent: 32px;
    color: #373d41;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .title-main {
    color: #333;
    font-size: 24px;
    font-weight: 400;
  }
  .line-flag + .title-main {
    margin-left: 80px;
    padding-top: 10px;
  }


  .teacherIntr .title-main  {
     font-weight: 500;
   }

  .teacherIntr .title-main span {
    margin-left: 10px;
    font-weight: 400;
  }


  .content-container {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .line-flag {
    background-color: #247fbb;
    margin-left: 2%;
    width: 0.4em;
    height: 4em;
    float:left;
  }

  .teacherIntr{
    padding:10px 12px 0 0;
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
    .title-main {
      font-size: 20px;
    }
    .teacherIntr .title-main{
      text-align: center;
    }
    .line-flag + .title-main {
      margin-left: 55px;
      padding-top: 10px;
    }
    #teachers{
      margin: 0 auto;
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
    .teacher img {
      width: 200px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title-main {
      font-size: 20px;
    }
    .line-flag + .title-main {
      margin-left: 55px;
      padding-top: 10px;
    }
    .teacherIntr .title-main{
      text-align: center;
    }
    #teachers{
      margin: 0 auto;
    }
    .teacher{
      padding: 3em 0 0 4%;
    }
    .teacher-info {
      padding-left: 15%;
      padding-right: 15%;
    }
    div.col-sm-12 img {
      width: 200px;
    }
  }
  @media (min-width: 992px) {
    div.col-sm-12 img {
      width: 90%;
    }
  }

  @media (min-width: 980px) and (max-width: 1020px) {
    .content {
      width: 980px;
    }
  }



</style>
