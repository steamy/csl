<template>
    <div id="students">
      <section id="location">
        <div class="line-flag"></div>
        <p class="title-main">团队概括 > 毕业生代表</p>
      </section>
      <br/>
      <br/>
      <br/>
      <no-data v-show="noData"></no-data>
      <section class="row students-show">
        <div class="col-md-5 col-sm-12 col-xs-12 student"
             v-for="(student, index) in students" :class="{'col-md-offset-1':(index%2)!=0}">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <img class="student-avator" :src="student.avatar_url"/>
            </div>

            <div class="col-md-8 col-sm-8 col-xs-8 student-intro">
              <p>{{student.name}}   <span class="desc">（{{student.admission_year}}级）</span></p>
              <p class="desc" v-for="carrer in student.stu_careers">{{carrer.start_year}}-{{carrer.end_year}}，<b>{{carrer.position}}</b>，{{carrer.institution}}</p>
            </div>
          </div>
        </div>
      </section>


    </div>



</template>

<script>
  import {jsonFetcher} from '../../fetchdata/fetcher'
  import NoData from '../NoData'
  export default {
    components: {NoData},
    name: 'students',
    data () {
      return {
        noData: true,
        students: []
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

<style scoped="scoped">
  #students {
    text-align: left;
    background-color: white;
    padding-left: 15%;
    padding-right: 15%;
    min-height: 400px;
  }

  #students > #location {
    padding-top: 3em;
  }

  .desc{
    color: #373d41;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .title-main {
    color: #333;
    font-size: 24px;
    font-weight: 400;
  }
  .line-flag {
    background-color: #247fbb;
    margin-left: 2%;
    width: 0.4em;
    height: 4em;
    float:left;
  }
  .line-flag + p {
    margin-left: 80px;
    padding-top: 10px;
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

  .student-avator {
    height: 180px;
  }

  @media (max-width: 768px) {
    #students {
      padding-left: 20px;
      padding-right: 20px;
    }
    .students-show {
      padding: 0;
      padding-left: 10px;
    }
    .student-avator {
      height: 170px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    #students {
      padding-left: 20%;
      padding-right: 20%;
    }
    .students-show {
      padding: 0;
      padding-left: 30px;
    }
    .student-avator {
      height: 170px;
    }
  }
  @media (min-width: 992px) and (max-width: 1130px){
    #students {
      padding: 0;
    }
  }
  @media (min-width: 1130px) and (max-width: 1400px) {
    #students {
      padding-left: 8%;
      padding-right: 5%;
    }
    .student-avator {
      /*height: 160px;*/
    }
  }
</style>
