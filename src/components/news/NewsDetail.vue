<template>
  <div id="news-detail" class="main-container">

    <div class="content">
      <section class="back">
        <p class=""><router-link to="/">新闻中心</router-link> > 详情</p>
      </section>
      <no-data v-if="noData"></no-data>

      <section class="row ">
        <div class="col-md-offset-1 col-md-10">
          <div class="news-title">
            <a>{{newsDetail.title}}</a>
          </div>
          <div>
            <p class="news-meta">作者：<span>{{newsDetail.published_by}}</span>发布时间：{{newsDetail.published_fromat_time}}</p>
          </div>
          <div class="news-html" v-html="newsDetail.html">

          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
  import NoData from '../NoData'
  import {jsonFetcher} from '../../fetchdata/fetcher'
  import {fecha, formatMasks} from '../../js/common/datefarmat'

  export default {
    components: {NoData},
    name: 'news-detail',
    data () {
      return {
        noData: false,
        newsDetail: {}
      }
    },
    mounted () {
      this.getNewsDetail()
    },
    methods: {
      getNewsDetail: async function () {
        const newsId = this.$route.params.news_id
        const url = '/api/v1/news/' + newsId
        jsonFetcher.get(url)
          .then(res => {
            const newsDetail = res.data.data[0]
            newsDetail.published_at = new Date(newsDetail.published_at)
            newsDetail.published_fromat_time = fecha.format(newsDetail.published_at, formatMasks.YMD)
            this.newsDetail = newsDetail
            if (this.newsDetail === {}) {
              this.noData = true
            }
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
  /*@import '../../assets/css/common';*/
  @import '../../assets/css/page';

  a {
    text-decoration: none;
  }
  #news-detail {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
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
  .back a:hover{
    color: #0C4E7A;
    cursor: pointer;
  }
  .news-title {
    color: #262930;
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 24px;
  }
  .news-meta {
    font-size: 13px;
    font-weight: 400;
    padding-left: 15px;
    margin-bottom: 24px;
  }

  .news-meta span {
    color: #00257A;
    outline: #00257A;
    font-weight: 600;
    padding-right: 20px;
  }
  .news-html {
    padding-left: 15px;
  }

  @media (max-width: 765px) {
    .news-title {
      font-size: 24px;
    }
  }

</style>
