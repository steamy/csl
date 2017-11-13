<template>
  <div class="navigation">

      <header class="navbar navbar-static-top csl-header" style="margin-bottom: 0px">

        <div class="container">
          <div class="navbar-header" style="margin-left: 80px">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#menu-navbar" aria-controls="ment-navbar" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <!--logo-->
            <a class="navbar-brand" href="/">
              <span><img src="../assets/img/logo/logo_3.png" class="lab-icon"/></span>
              <span style="color: white;font-family: 方正兰亭黑简体;margin-left: 20px;font-size: xx-large">网络空间安全实验室</span>
            </a>
          </div> <!--navbar-header-->

            <!--menu-->
          <nav id="menu-navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav" style="margin-top: 25px;margin-left: 120px;"> <!---->
              <li>
                <a href="/">学术</a>
              </li>
              <li>
                <a href="/">团队</a>
              </li>
              <li>
                <a href="/">合作</a>
              </li>
              <li>
                <a href="/">通告</a>
              </li>
              <li>
                <a href="/">博客</a>
              </li>
            </ul>
          </nav>
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
