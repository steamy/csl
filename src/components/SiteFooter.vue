<template>
  <div class="SiteFooter">
    <footer id="footer">
      <!-- 联系我们和相关链接-->
      <section id="connect-us" class="main-container">

        <div class="content row">

          <div class="col-xs-12 col-sm-offset-1 col-md-5 col-sm-5 first">
            <p class="desc bolder">相关链接</p>
            <p><a class="desc" target="_blank" href="http://www.uestc.edu.cn">电子科技大学主页</a></p>
            <p><a class="desc" target="_blank" href="http://www.ss.uestc.edu.cn/">电子科技大学信息与软件工程学院</a></p>
          </div>

          <div class="col-xs-12  col-md-5 col-sm-5 second">
            <p class="desc bolder">联系我们</p>
            <p class="desc">联系人：刘老师</p>
            <p class="desc">TEL:15208292978</p>
            <p class="desc">E-Mail:QIHELIU@UESTC.EDU.CN</p>
            <p class="desc">联系地址：四川省成都市成华区建设北路二段四号</p>
          </div>

        </div>

      </section>
      <section id="copyright">
        <p class="desc">Copyright@2017-2018.网络空间与安全实验室</p>
      </section>
    </footer>
  </div>
</template>

<script>
    export default {
      name: 'SiteFooter'
    }
</script>

<style scoped="scoped">
  @import '../assets/css/page.scss';
  @import '../assets/css/index.scss';

  #footer {
    text-align: center;
    background-color: #f1f2f3;
  }

  .desc {
    color: #373d41;
    font-size: 14px;
    font-weight: 200;
  }

  /*
  联系我们
  */
  #connect-us{
    width: 100%;
    background-color: #f0f0f0;
    padding-bottom: 1em;
    padding-top: 1.5em;
    text-align: left;
  }
  #connect-us .content {
    width: 900px;
  }

  #connect-us .desc {
    font-weight: 400;
  }
  #connect-us .bolder {
    font-weight: 500;
    padding-bottom: 0.8em;
  }
  #connect-us a {
    text-decoration: none;
  }
  #connect-us a:hover {
    color: #1a6fa6;
  }

  #copyright {
    margin: 0;
    background-color: #cacacc;
  }
  #copyright p {
    margin: 0;
    font-weight: 400;
    padding-top: 10px;
    color: #333;
    padding-bottom: 10px;
  }

  @media (max-width: 765px) {
    #connect-us .bolder {
      padding-bottom: 5px;
    }
    .first {
      margin-bottom: 10px;
    }
    .second {
      border-top: #cacacc 1px solid;
      padding-top: 10px;
    }
    #copyright p{
      font-size: 12px;
    }
  }

</style>
