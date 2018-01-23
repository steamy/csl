<template>
    <div id="team-manager">
      <section>
        <div class="line-flag"></div>
        <p class="title-main">团队 > 团队管理</p>
      </section>
      <br/>
      <br/>
      <section id="manage-system" class="row">
        <div class="col-md-5 col-xs-6 col-sm-6">
          <img src="../../assets/img/team/img_left.png"/>
        </div>
        <div class="col-md-offset-2 col-md-5 col-xs-6 col-sm-6">
          <img src="../../assets/img/team/img_right.png"/>
        </div>
      </section>
      <p class="desc">以制度促管理、以管理促发展</p>

      <section id="award-rule">
        <table>
          <thead>
          <tr>
            <th v-for="thead in tableHead">{{thead}}</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(content, index) in tableBody">
            <td :class="[{'even-td':(index%2)!=0}, 'odd-td']">{{content.cause}}</td>
            <td :class="[{'even-td':(index%2)!=0}, 'odd-td']">{{content.income}}</td>
          </tr>
          </tbody>
        </table>
      </section>
      <p class="desc">实验室奖励制度</p>
    </div>

</template>

<script>
  export default {
    name: 'team-manager',
    data () {
      return {
        tableHead: ['事由', '奖金'],
        tableBody: [
          {
            cause: '  CCF A类期刊或者会议、JCR分区1区和2区的期刊（导师认可其贡献量≥2/3）',
            income: '10000'
          },
          {
            cause: 'CCF B 类期刊或者会议（导师认可其贡献量≥2/3）',
            income: '5000'
          },
          {
            cause: 'CCF C 类会议（导师认可其贡献量≥2/3）',
            income: '1000'
          },
          {
            cause: '省级优秀硕士学位论文',
            income: '5000'
          },
          {
            cause: 'SCI 论文（导师认可其贡献量≥2/3',
            income: '5000'
          },
          {
            cause: '纵向项目申报书（撰写500，立项后追加1500）',
            income: '2000'
          },
          {
            cause: '每月标准劳务费',
            income: '按实际参与项目发放'
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  #team-manager {
    text-align: left;
    background-color: white;
    padding-left: 20%;
    padding-right: 20%;
    min-height: 400px;
    padding-top: 3em;
    padding-bottom: 3em;
  }

  .desc{
    color: #373d41;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .title-main {
    color: #333;
    font-size: 24px;
    font-weight: 400;
  }
  .line-flag {
    background-color: #247fbb;
    margin-left: 2%;
    width: 0.4em;
    height: 4em;
    float:left;
  }
  .line-flag + p {
    margin-left: 80px;
    padding-top: 10px;
  }
  #manage-system img {
    width: 100%;
  }
  #manage-system + p, #award-rule + p {
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }

  #award-rule {
    margin-top: 3em;
  }

  .table-unit-height {
    height: 3em;
    width: 50%;
  }

  #award-rule table {
    border: #F1F2F3 2px solid;
  }

  #award-rule th {
    @extend .table-unit-height;
    text-align: center;
    background-color: #6699cc;
    color: white;
    border: white 1px solid;
  }

  #award-rule td {
    @extend .table-unit-height;
    @extend .desc;
    border: white 1px solid;
    padding-left: 3px;
    padding-right: 3px;
  }
  .odd-td {
    background-color: #ffffff;
  }
  .even-td {
    background-color: #99ccff;
  }



  @media (max-width: 768px) {
    #team-manager{
      padding-left: 50px;
      padding-right: 50px;
    }
    .line-flag + p {
      margin-left: 30px;
    }
    #manage-system + p, #award-rule + p {
      font-size: 14px;
    }
    .title-main {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .title-main {
      font-size: 20px;
    }
    .line-flag + p {
      margin-left: 30px;
    }
  }

  @media (min-width: 992px) and (max-width: 1130px){
    .line-flag + p {
      margin-left: 30px;
    }
  }

  @media (min-width: 1130px) and (max-width: 1400px) {

  }



</style>
