<template>
  <div class="navigation">

    <header class="navbar navbar-bar csl-header" style="margin-bottom: 0px">
      <div class="row" style="height: inherit;padding-left: 7%">
        <div class="navbar-header   " style="height: inherit">
          <!--logo-->
          <a class="navbar-brand " href="/">
            <span ><img src="../assets/img/logo/logo_3.png" class="lab-icon"/></span>
            <span style="color: white;margin-left: 20px;font-size: 20px;" >
                网络空间安全实验室
              </span>
          </a>
          <button class="navbar-toggle " type="button" data-toggle="collapse" data-target="#menu-navbar" aria-controls="ment-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar" ></span>
            <span class="icon-bar"></span>
          </button>
        </div> <!--navbar-header-->



        <!--menu-->
        <div id="menu-navbar" class="collapse navbar-collapse" style="height: inherit !important;">
          <ul class="nav navbar-nav navbar-right" > <!---->
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="academy.html">学术</a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">团队</a>

              <ul class="dropdown-menu team-menu">
                <li><a href="../../team.html#/teachers">团队师资</a></li>
                <li><a href="../../team.html#/students">毕业生代表</a></li>
                <li><a href="../../team.html#/manage">团队管理</a></li>
              </ul>
            </li>
            <li>
              <a href="cooperation.html">合作</a>
            </li>
            <li>
              <a href="/">通告</a>
            </li>
            <li>
              <a href="http://localhost:2368">博客</a>
            </li>
          </ul>
        </div>

      </div><!-- /.container-fluid -->
    </header>

    <index-banner v-if="showBanner"></index-banner>
  </div>
</template>

<script>
  import {deviceType} from '../js/common/common'
  import IndexBanner from './IndexBanner'

  export default {
    components: {IndexBanner},
    name: 'Navigation',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      isInIndexPage: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      showBanner: function () {
        if (deviceType() === 'Pc') {
          return true
        } else if (this.isInIndexPage) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>


  .csl-header {
    background-color: #003478 ;
  }

  .icon-bar{
    background-color: #F5F5F5;
  }
  .lab-icon {
    width: 50px;
  }

  .navbar-right{
    margin-right: 0px;
  }



  /*ul li a:hover{*/
    /*background-color: inherit;*/
  /*}*/
  ul li a{
    color:white;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

  }
  .team-menu{
    background-color: #003478;
  }

  @media (max-width: 768px) {
    .navbar-brand span img{
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    ul li a{
      padding: 40px 20px;
    }
  }
  @media (min-width: 992px) and (max-width: 1200px){
    .navbar-brand {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }

  @media (min-width: 1200px) {
    .navbar-right{
      margin-right: 4em ;
    }
    .navbar-brand {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }


</style>
