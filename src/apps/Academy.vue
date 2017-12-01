<template>
  <div id="academy">
    <navigation></navigation>

    <!--banner-->
    <div>
      <div style="padding-top: 5%;padding-bottom: 5%">
        <h2 style="color: #247fbb">Achievement in Research</h2>
        <div style="width: 10%;height: 3px;background-color: #247fbb;margin-left: 45%;margin-top: 20px"></div>
      </div>
      <img src="../assets/img/academy/banner.png" style="width: 100%;height: 200px"/>
    </div>
    <!--banner-->

    <!--tab-->
    <div id="academyContainer">
      <ul class="tabs row">
        <li class="li-tab col-md-6" v-for="(name,index) in tabNames"
        @click="toggleTabs(index)"
        :class='{active:index==nowIndex,liTabFirst:index==0,liTabLast:index==2}'>{{name}}</li>
      </ul>
      <div class="divTab" v-show="nowIndex===0">
        <ul>
          <li style="height: 3em" v-for="(thesis, index) in thesises">
            <p class="thesisLink">* {{thesis.name}}</p>
          </li>
        </ul>
      </div>

      <div class="divTab" v-show="nowIndex===1">
        <ul>
          <li style="height: 3em" v-for="(patent, index) in patents">
            <p class="thesisLink">[{{index+1}}] {{patent.name}}</p>
          </li>
        </ul>
      </div>

    </div>
    <!--tab-->
    <br/>
    <br/>
    <site-footer></site-footer>

  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'
  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'Academy',
    data () {
      return {
        tabNames: ['论文', '专利'],
        nowIndex: 0,
        patents: [
          {
            name: '刘启和. 基于深度学习的医学气体识别方法[P]. 中国: 2013105034029.'
          },
          {
            name: '周世杰. 一种对阅读器动态并行集进行调度的策略[P]. 中国: 2013106396525,.'
          },
          {
            name: '周世杰. 三维空间中的大规模RFID阅读器的部署方法[P]. 中国: 2013106399754,.'
          },
          {
            name: '周世杰. 导轨式无源RFID室内定位方法[P]. 中国: 2013106397299,.'
          },
          {
            name: '周世杰. 基于阅读器优先级的静态阅读器调度方法[P]. 中国: 201310639974X,.'
          }
        ],
        thesises: [
          {
            name: '《基于XX的XX系统》',
            url: 'http://www.baidu.com'
          },
          {
            name: '《对XX算法的改进》',
            url: 'http://www.baidu.com'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
      }
    }
  }
</script>

<style scoped>

@import '../assets/css/common.scss';
@import '../assets/css/tabbar.scss';
  #academy {
    font-family: 方正兰亭黑简体;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    background-color: #f0f2f5;
  }

  #academyContainer{
    position: relative;
    margin-top: -50px;
    margin-left:10%;
    margin-right: 10%;
    width: 80%;
    min-height: 30em;
    background-color: white;
    border-radius: 0.3em;
  }

  .thesisLink {
    font-size: 16px;
    text-decoration-line: none;
  }
  .thesisLink:hover {

  }

</style>
