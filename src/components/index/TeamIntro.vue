<template>
  <section id="team-intro" class="main-container">
    <div class="content">
      <div class="hd-right">
        <p class="desc">团队概括</p>
        <h2 class="title">在科研路上的探索</h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12 intro-detail-box" v-for="intro in intros">
          <img-box :background-image="svgUrl"></img-box>
          <div class="text-box">
            <h3>{{intro.category}}</h3>
            <p class="desc">{{intro.detail}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import AwardSvgOne from '../svg/index/AwardSvgOne'
  import ImgBox from '../common/ImgBox'
  import {serverRoot} from '../../fetchdata/fetcher'

  export default {
    components: {
      ImgBox,
      AwardSvgOne},
    name: 'team-intro',
    data () {
      return {
        svgUrl: {
          backgroundImage: 'url("' + serverRoot + '/images/index/awards.svg")'
        },
        intros: [
          {
            category: '已获获奖13项',
            detail: '包含2次科技进步奖、6次教学成果奖'
          },
          {
            category: '发表论文30余篇、专著10余部',
            detail: '在国外顶级期刊SCI、IEEE上发布论文12篇，国内顶级期刊上发布论文20余篇'
          },
          {
            category: '获得专利30余项',
            detail: '在网络仿真、文本识别、模式识别、阅读器调度等方面均获得多项发明专利'
          },
          {
            category: '拥有30余项项目',
            detail: '涉及网络安全、人工智能、大数据、移动互联网、密码学等多个方面'
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/page';
  @import '../../assets/css/index';

  .content {
    /*width: 900px;*/
  }

  #team-intro {
    background-color: white;
  }
  .intro-detail-box {
    padding-bottom: 80px;
  }

  .text-box {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .text-box h3 {
    margin-bottom: 10px;
  }
  .text-box p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }



</style>
