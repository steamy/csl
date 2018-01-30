<template>
    <div id="students" class="main-container">
      <div class="content">
        <section class="back">
          <p class="">团队 > 学生代表</p>
        </section>
        <br/>
        <br/>
        <no-data v-if="noData"></no-data>
        <section class="row students-show">
          <div class="col-md-5 col-sm-12 col-xs-12 student"
               v-for="(student, index) in students" :class="{'col-md-offset-1':(index%2)!=0}">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-4 avatar">
                <img class="student-avator" :src="serverRoot + student.avatar_url"/>
              </div>

              <div class="col-md-8 col-sm-8 col-xs-8 student-intro">
                <p>{{student.name}}   <span class="desc">（{{student.admission_year}}级）</span></p>
                <p class="desc career" v-for="carrer in student.stu_careers">{{carrer.start_year}}-{{carrer.end_year}}，<b>{{carrer.position}}</b>，{{carrer.institution}}</p>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>



</template>

<script>
  import {jsonFetcher, serverRoot} from '../../fetchdata/fetcher'
  import NoData from '../NoData'
  export default {
    components: {NoData},
    name: 'students',
    data () {
      return {
        noData: true,
        students: [],
        serverRoot: serverRoot
      }
    },
    mounted () {
      this.getStudents()
    },
    methods: {
      getStudents: async function () {
        jsonFetcher.get('/api/v1/students')
          .then(res => {
            this.students = res.data.data
            if (this.students.length !== 0) {
              this.noData = false
            }
            console.log(this.noData)
          }).catch(err => {
            console.log(err)
            this.noData = true
          })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">

  @import '../../assets/css/page';
  .avatar {
    padding: 0;
    padding-left: 6px;
  }

  #students {
    padding-top: 60px;
    text-align: left;
    background-color: white;
    min-height: 400px;
  }

  .back {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
  .back p, .back a {
    color: #247fbb;
  }

  .desc{
    color: #373d41;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .students-show {
    padding-left: 3em;
  }


  .student {
    height: 200px;
    border-radius: 5px;
    border: #F1F2F3 1px solid;
    -moz-box-shadow:2px 2px 12px #F1F2F3;
    -webkit-box-shadow:2px 2px 12px #F1F2F3;
    box-shadow:2px 2px 12px #F1F2F3;
    padding-top: 9px;
    margin-bottom: 30px;
    /*min-width: 350px;*/
  }
  .student p {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .student-intro {
    padding-top: 5px;
  }
  .career {
    line-height: 14px;
  }
  .student-avator {
    height: 180px;
  }

  @media (max-width: 768px) {
    #students {
      padding-top: 30px;
    }

    .students-show {
      padding: 0;
      padding-left: 10px;
    }
    .student-avator {
      height: 170px;
    }
    .line-flag + p {
      padding-left: 30px;
    }
    .career {
      line-height: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {

    .students-show {
      padding: 0;
      padding-left: 30px;
    }
    .student-avator {
      height: 170px;
    }
    .line-flag + p {
      padding-left: 30px;
    }
  }
  @media (min-width: 992px) and (max-width: 1020px){
    .content {
      width: 980px;
    }

  }
  @media (min-width: 1130px) and (max-width: 1400px) {
    .student-avator {
      /*height: 160px;*/
    }
  }
</style>
