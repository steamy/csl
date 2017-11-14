<template>
  <div id="academy">
    <navigation></navigation>
    <div>
      <div style="padding-top: 5%;padding-bottom: 5%">
        <h2 style="color: #247fbb">Achievement in Research</h2>
        <div style="width: 10%;height: 3px;background-color: #247fbb;margin-left: 45%;margin-top: 20px"></div>
      </div>
      <img src="../assets/img/academy/banner.png" style="width: 100%;height: 200px"/>
    </div>

    <div id="academyContainer">
      <ul class="tabs row">
        <li class="li-tab col-md-4" v-for="(name,index) in tabNames"
        @click="toggleTabs(index)"
        :class='{active:index==nowIndex,liTabFirst:index==0,liTabLast:index==2}'>{{name}}</li>
      </ul>
      <div class="divTab" v-show="nowIndex===0">
        <ul>
          <li style="height: 3em" v-for="(thesis,index) in thesises">
            <a class="thesisLink" target="_blank"
            :href="thesis.url">* {{thesis.name}}</a>
          </li>
        </ul>
      </div>

      <div class="divTab" v-show="nowIndex===1">专利</div>
      <div class="divTab" v-show="nowIndex===2">科研</div>
    </div>
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
        tabNames: ['论文发表', '专利', '科研'],
        nowIndex: 0,
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
