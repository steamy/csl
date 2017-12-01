<template>
  <div class="navigation">

      <header class="navbar navbar-static-top csl-header" style="margin-bottom: 0px">

        <div class="row" style="height: inherit;padding-left: 7%">
          <div class="navbar-header col-md-6" style="height: inherit">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#menu-navbar" aria-controls="ment-navbar" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!--logo-->
            <a class="navbar-brand" href="/">
              <span><img src="../assets/img/logo/logo_3.png" class="lab-icon"/></span>
              <span style="color: white;font-family: 方正兰亭黑简体;margin-left: 20px;font-size: xx-large">
                网络空间安全实验室
              </span>
            </a>
          </div> <!--navbar-header-->

            <!--menu-->
          <div id="menu-navbar" class="collapse navbar-collapse col-md-6" style="height: inherit !important; padding-top: 25px">
            <ul class="nav navbar-nav"> <!---->
              <li>
                <a href="academy.html">学术</a>
              </li>
              <li>
                <a href="team.html">团队</a>
              </li>
              <li>
                <a href="cooperation.html">合作</a>
              </li>
              <li>
                <a href="/">通告</a>
              </li>
              <li>
                <a href="/">博客</a>
              </li>
            </ul>
          </div>

        </div><!-- /.container-fluid -->
      </header>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>

  .csl-header {
    background-color: #003478 ;
    border: none;
    height: 100px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  .lab-icon {
    width: 80px;
    margin-top: -5px;
  }

  ul li{
    margin-left: 30px;
  }
  ul li a:hover{
    background-color: inherit;
  }
  ul li a{
    color: white;
    font-size: larger;
  }
</style>
