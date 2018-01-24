<template>
  <div class="all-news">
    <no-data v-show="noData"></no-data>

    <section class="news-entry" v-for="news  in allNews"
             :class="{'top-border':news.show_topborder,'more-padding-top':news.show_timeflag}">
      <div class="row container-md">
        <div class="col-md-4  col-sm-12 date">
          <div class="year" v-show="news.show_timeflag">
            {{news.published_at.getFullYear()}} 年
          </div>
          <div class="month" v-show="news.show_timeflag">
            {{news.published_at.getMonth()+1}} 月
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <h2 class="news-title">
            <router-link :to="news.push_url">{{news.title}}</router-link>
          </h2>
          <p class="meta">{{news.published_format_time}}
          </p>
          <p class="news-plaint">
            {{news.plaintext}}
          </p>

        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import {jsonFetcher} from '../../fetchdata/fetcher'
  import {fecha, formatMasks} from '../../js/common/datefarmat'
  import NoData from '../NoData'

  export default {
    components: {NoData},
    name: 'all-news',
    mounted () {
      this.getAllNews()
    },
    data () {
      return {
        noData: false,
        allNews: []
      }
    },
    methods: {
      getAllNews: function () {
        jsonFetcher.get('/api/v1/news')
          .then(res => {
            const resData = res.data.data
            if (resData.length === 0) {
              this.noData = true
              return
            }
            let nowDate = new Date(resData[0].published_at)
            for (let index = 0; index < resData.length; index++) {
              const news = resData[index]
              const date = new Date(news.published_at)
              resData[index].published_at = date
              resData[index].show_topborder = false
              if (date.getFullYear() !== nowDate.getFullYear() || date.getMonth() !== nowDate.getMonth()) {
                resData[index].show_timeflag = true
                nowDate = date
                if (index !== 0) {
                  resData[index].show_topborder = true
                }
              } else if (index === 0) {
                resData[index].show_timeflag = true
              } else {
                resData[index].show_timeflag = false
              }
              resData[index].published_format_time = fecha.format(date, formatMasks.default)
              resData[index].push_url = '/detail/' + resData[index].news_id
            }
            this.allNews = resData
          })
          .catch(err => {
            console.log(err)
            this.noData = true
          })
      }

    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/common.scss';
  .all-news {
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .news-entry {
    display: flex;
    align-items:center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .container-md {
    width: 1040px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }
  .date {
    /*float: left;*/
  }
  .year {
    font-size: 16px;
    line-height: 16px;
    font-weight: 300;
    color: #b1b1b1;
  }
  .month {
    font-size: 36px;
    line-height: 36px;
    font-weight: 300;
    color: #b1b1b1;
  }
  .news-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .news-title a:hover {
    color: #1a6fa6;
  }
  .meta {
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    color: #3e3e3e;
    margin-bottom: 10px;
  }
  .news-plaint {
    color: #3e3e3e;
    font-size: 17.2px;
    font-weight: 300;
    line-height: 30px;
  }
  .top-border {
    border-top: #F1F2F3 1px solid;
  }
  .more-padding-top {
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    .year {
      font-size: 36px;
      line-height: 36px;
      display: inline;
    }
    .month {
      display: inline;
    }
  }
  @media (min-width: 768px)  and (max-width: 1200px){
    .container-md {
      width: 921px;
    }
    .year {
      font-size: 36px;
      line-height: 36px;
      display: inline;
    }
    .month {
      display: inline;
    }
  }
</style>
