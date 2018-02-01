<template>
  <section id="team-show">
    <div class="info-area">
      <div class="content">

        <div class="hd intro">
          <p class="desc">团队风采</p>
          <h2 class="title">我们团队是一群能持续创造的人</h2>
        </div>

        <div class="badge-list">

          <a class="badge-list-item"  href="team.html#/teachers"
             @mouseenter="itemsMouseEnter(0)" @mouseleave="itemsMouseLeave()">
            <div class="icon teacher " :class="itemsAnimation[0]"></div>
            <div class="info">
              <p class="title">师资</p>
              <p class="desc">教授、副教授6名，高级工程师1名，助理研究员3名</p>
            </div>
          </a>

          <a class="badge-list-item" @mouseenter="itemsMouseEnter(1)" @mouseleave="itemsMouseLeave()">
            <div class="icon member" :class="itemsAnimation[1]"></div>
            <div class="info">
              <p class="title">成员</p>
              <p class="desc">在读硕士、博士研究生、本科生40余名，外聘人员10余名</p>
            </div>
          </a>


          <a class="badge-list-item" href="team.html#/students"
             @mouseenter="itemsMouseEnter(2)" @mouseleave="itemsMouseLeave()">
            <div class="icon graduated" :class="itemsAnimation[2]"></div>
            <div class="info">
              <p class="title">毕业生</p>
              <p class="desc">谷歌、华为、腾讯、阿里等知名企业均有我们的身影</p>
            </div>
          </a>

        </div>
      </div>
    </div>
    <div class="img-area">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide custom-slide" v-for="img in groupImgs">
            <img class="img" :src="img"/>
          </div>
        </div>
        <div class="swiper-pagination "></div>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import groupA from '../../assets/img/student/group_1.png'
  import groupB from '../../assets/img/student/group_2.png'
  export default {
    name: 'team-show',
    data () {
      return {
        itemsAnimation: ['', '', ''],
        swiperObj: {},
        groupImgs: [groupA, groupB]
      }
    },
    mounted () {
      this.swiperObj = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 3000,
        paginationClickable: true
      })
    },
    methods: {
      itemsMouseEnter: function (index) {
        const buffer = ['', '', '']
        buffer[index] = 'items-animation'
        this.itemsAnimation = buffer
      },
      itemsMouseLeave: function () {
        this.itemsAnimation = ['', '', '']
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/index';
  #team-show {
    display: flex;
    width: 100%;
    height: 800px;
    flex-direction: row;
    background-color: #F4F3F4;
  }
  .info-area {
    width: 50%;
  }
  .info-area .content {
    width: 520px;
    margin: 0 auto;
  }
  .info-area .content .intro {
    width: 100%;
  }
  .info-area .content .badge-list{
    margin: 0 auto;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .badge-list .badge-list-item {
    display: flex;
    margin-bottom: 60px;
    text-decoration: none;
    cursor: pointer;
  }

  .badge-list .icon {
    background-image: url("../../assets/img/index/teamshow-icons.svg");
    width: 90px;
    height: 91px;
  }
  .badge-list-item .teacher {
    background-position: 0 0;
  }
  .badge-list-item .member {
    background-position: 190px 0;
  }
  .badge-list-item .graduated {
    background-position: 90px 0;
  }

  .badge-list-item .info {
    text-align: left;
    line-height: 28px;
    margin-left: 20px;
    width: 220px;
  }
  .badge-list-item .info .title {
    font-size: 18px;
  }
  .badge-list-item .info .desc {
    font-size: 14px;
    line-height: 16px;
  }

  .img-area {
    width: 50%;
    height: 800px;
    overflow: hidden;
  }
  .img-area .custom-slide .img {
    width: 100%;
    height: 800px;
  }


  @media (max-width: 768px) {
    .badge-list .badge-list-item {
      margin-bottom: 30px;
    }
    #team-show {
      flex-direction: column;
      height: auto;
    }
    .info-area, .img-area {
      width: 100%;
    }
    .img-area {
      height: 420px;
    }
    .img-area .custom-slide .img {
      height: 420px;
    }
    .info-area .content {
      width: 100%;
    }
    .swiper-pagination {
      display: none;
    }
  }

  /*
  动画
  */
  @keyframes items-scale  {
    0% {transform: scale(1,1)}
    50% {transform: scale(1.15,1)}
    100% {transform: scale(1,1)}
  }
  .items-animation {
    animation: items-scale 0.4s;
  }

</style>
