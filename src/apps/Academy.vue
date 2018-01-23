<template>
  <div id="academy">
    <navigation></navigation>

    <!--banner-->

    <!--tab-->
    <section id="container">
      <ul class="tabs row">
        <li class="li-tab col-md-4 col-xs-4 col-sm-4" v-for="(name,index) in tabNames"
        @click="toggleTabs(index)"
        :class='{active:index==nowIndex,liTabFirst:index==0,liTabLast:index==1}'>{{name}}</li>
      </ul>

      <no-data v-show="noData"></no-data>

      <div id="content">
        <ul class="list-group">
          <li class="list-group-item no-border" v-for="(content, index) in showNow" v-html="content.show_text">
          </li>
        </ul>
      </div>

    </section>
    <!--tab-->
    <br/>
    <br/>
    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  import IndexBanner from '../components/IndexBanner'
  import NoData from '../components/NoData'
  import {jsonFetcher} from '../fetchdata/fetcher'

  export default {
    components: {
      NoData,
      IndexBanner,
      SiteFooter,
      Navigation},
    name: 'Academy',
    data () {
      return {
        noData: false,
        tabNames: ['论文', '专利', '科研课题'],
        showNow: [],
        nowIndex: 0,
        patents: [],
        theses: [],
        subjects: []
      }
    },
    computed: {
    },
    mounted () {
      this.getPatents()
      this.getThesis()
      this.getSubjects()
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index

        if (index === 0) {
          this.showNow = this.theses
        } else if (index === 1) {
          this.showNow = this.patents
        } else {
          this.showNow = this.subjects
        }
        this.noData = (this.showNow.length === 0)
      },

      getPatents: async function () {
        jsonFetcher.get('/api/v1/patents')
          .then(res => {
            this.patents = res.data.data
            for (let index = 0; index < this.patents.length; index++) {
              const patent = this.patents[index]
              this.patents[index].show_text = '【' + (index + 1) + '】' + patent.authorized_person + '.' + patent.name + '[P]. 中国:' + patent.search_number
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      getThesis: async function () {
        jsonFetcher.get('/api/v1/theses')
          .then(res => {
            this.theses = res.data.data
            for (let index = 0; index < this.theses.length; index++) {
              const thesis = this.theses[index]
              this.theses[index].show_text = '【' + (index + 1) + '】' + thesis.author + '. 《' + thesis.title + '》.' + thesis.press + '.' + thesis.deadline
            }
            this.toggleTabs(0)
          })
          .catch(err => {
            console.log(err)
          })
      },
      getSubjects: async function () {
        jsonFetcher.get('/api/v1/subjects')
          .then(res => {
            this.subjects = res.data.data
            console.log(typeof this.subjects[0].end_date)
            for (let index = 0; index < this.subjects.length; index++) {
              const subject = this.subjects[index]
              const startDate = new Date(subject.start_date)
              const endDate = new Date(subject.end_date)
              this.subjects[index].show_text = '【' + (index + 1) + '】<b>' + subject.name + '</b>-' + subject.provider + '   ' + startDate.getFullYear() + '至' + endDate.getFullYear()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>

@import '../assets/css/common.scss';
/*@import '../assets/css/tabbar.scss';*/
  #academy {
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    background-color: #f0f2f5;
  }

  #container{
    margin-left: 20%;
    margin-right: 20%;
    background-color: white;
    min-height: 400px;
  }

  #content {
    margin-top: 2em;
    text-align: left;
    padding-bottom: 20px;
  }

  .no-border {
    margin: 0;
    border: none;
    font-weight: 400;
    font-size: 14px;
  }



.tabs {
  width: 100%;
/*  height: 6em;*/
  margin: 0;
  border-radius: 0.3em;
}
.li-tab{
  background-color: #F5F5F5;
  height: inherit;
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 1em;
  font-weight: 500;
}
.active{
  color: #247fbb;
  background-color: white;
}




@media (max-width: 768px) {
  #container{
    margin: 0;
  }

  #banner-title-container h1 {
    font-size: 24px;
  }
  .tabs {
    height: 3em;
  }
  .li-tab {
    font-size: 16px;
    padding-top: 0.8em;
  }
}

@media (min-width: 768px) and (max-width: 992px) {

  #container{
    margin: 0;
  }
  #banner-title-container h1 {
    font-size: 24px;
  }
  .tabs {
    height: 3em;
  }
  .li-tab {
    font-size: 16px;
    padding-top: 0.8em;
  }
}
@media (min-width: 992px) {

}

</style>
