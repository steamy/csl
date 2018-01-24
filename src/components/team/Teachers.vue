<template>
  <div id="teachers">
    <div class="">
      <div class="content-container">
        <div class="line-flag"></div>
        <p class="title-main">团队 > 团队师资</p>
      </div>

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
  import {jsonFetcher} from '../../fetchdata/fetcher'

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
            this.teachers = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  /*@import '../../assets/css/common';*/
  #teachers {

  }
  #teachers>div {
    margin-left: 15%;
    margin-right: 15%;
    background-color: white;
    min-width: 920px;
    padding-bottom: 3em;
  }

  .desc{
    color: #373d41;
    font-size: 14px;
    font-weight: 400;
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
    #teachers>div {
      margin: 0;
      padding-right: 20px;
      padding-left: 20px;
      min-width: auto;
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
    div.col-sm-12 img {
      width: 70%;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title-main {
      font-size: 20px;
    }
    #teachers>div {
      margin: 0;
      padding-right: 20px;
      padding-left: 20px;
      min-width: auto;
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
      width: 70%;
    }
  }
  @media (min-width: 992px) {
    div.col-sm-12 img {
      width: 90%;
    }
  }



</style>
