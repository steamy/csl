<template>
  <section id="projects-show" class="main-container">
    <div class="content">
      <div class="hd-left">
        <p class="desc">项目展示</p>
        <h2 class="title">先赌为快我们的项目</h2>
      </div>

      <section id="project-list" ref="projectlist" >
        <div class=" project-list-item"   v-for="(project,index) in allProjects"
        :class="[initAnimationClass[index], {'hidden-item':index>=3}]">
            <a :href="project.pushUrl">
              <picture>
                <img :src="project.showImg"/>
              </picture>
              <div class="text-bg">
              </div>
              <p class="project-title">{{project.show_title}}</p>
              <p class="project-detail">{{project.show_detail}}</p>
            </a>
        </div>
      </section>
      <br/>
      <br/>
      <more-button :data-source="{name: '全部项目',hrefLink: 'cooperation.html'}"></more-button>
    </div>
  </section>

</template>

<script>
  import ProjectListItem from '../common/ProjectListItem'
  import {serverRoot, jsonFetcher} from '../../fetchdata/fetcher'
  import MoreButton from '../common/MoreButton'

  export default {
    components: {
      MoreButton,
      ProjectListItem},
    name: 'projects-show',
    data () {
      return {
        allProjects: [],
        tabNames: ['网络空间安全', '大数据与智能计算', '互联网+'],
        initAnimationClass: ['', '', '', '', '', '', '', '', ''],
        animationClass: ['project-animation-1', 'project-animation-2', 'project-animation-3', 'project-animation-4', 'project-animation-5', 'project-animation-6', 'project-animation-7', 'project-animation-8', 'project-animation-9']
      }
    },
    mounted () {
      this.getPojects()
      window.addEventListener('scroll', this.beginList)
    },
    methods: {
      getPojects: function () {
        jsonFetcher.get('/api/v1/projects/index')
          .then(res => {
            const projects = res.data.data
            const projectAll = []
            for (let index = 0; index < this.tabNames.length; index++) {
              projectAll[index] = []
            }

            for (let i = 0; i < projects.length; i++) {
              const project = projects[i]
              project.showImg = this.createImage(project.show_img)
              project.pushUrl = '../../cooperation.html#/detail/' + project.project_id
              for (let index = 0; index < this.tabNames.length; index++) {
                if (project.category === this.tabNames[index]) {
                  projectAll[index].push(project)
                }
              }
            }
            this.allProjects = [].concat.apply([], projectAll)
          })
          .catch(err => {
            console.log(err)
          })
      },
      createImage: function (path) {
        return serverRoot + path
      },
      beginList: function () {
        const windowHeight = window.innerHeight
        const listTop = this.$refs.projectlist.getClientRects()[0].top
        if ((windowHeight - listTop) >= 60) {
          console.log('动画')
          this.initAnimationClass = this.animationClass
          window.removeEventListener('scroll', this.beginList)
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  @import '../../assets/css/page';
  @import '../../assets/css/index';
  .content {
    width: 960px;
  }
  #projects-show {
    background-color: #f5f8ff;
    padding-bottom: 60px;
  }
  #project-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  .project-list-item {
    margin: 0 auto;
    width: 236px;
    padding-top: 30px;
    padding-bottom: 30px;
    transition: padding .25s;
    transition-timing-function: initial;
    transition-delay: initial;
    transform: translate(0, 30px);
    opacity: 0;
  }
  .project-list-item:hover {
    padding-top: 10px;
    padding-bottom: 50px;
  }
  .project-list-item a {
    display: block;
    position: relative;
    width: 236px;
    height: 177px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,.08);
    transition: box-shadow .25s;
    transition-timing-function: initial;
    transition-delay: initial;
    text-decoration: none;
  }
  .project-list-item:hover a {
    box-shadow: 0 10px 15px rgba(0,0,0,.08);
  }
  .project-list-item a img{
    width:  236px;
    border-radius: 6px;
    height: 177px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  .text-bg {
    background-color: white;
    filter: blur(10px);
    position: absolute;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    height: 50px;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .project-title {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    top: 127px;
    z-index: 2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #333;
  }
  .project-detail {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 151px;
    color: #7685a6;
    z-index: 2;
  }
  @media (max-width: 768px) {
    #project-list .hidden-item{
      display: none;
    }
  }


  /*
  动画
  */
  @keyframes first-project {
    from {transform: translate(0, 100px); opacity: 0.2;}
    to {transform: translate(0, 0); opacity: 1;}
  }
  .project-animation-1 {
    animation: first-project 1.5s;
    animation-fill-mode: forwards;
  }
  .project-animation-2 {
    @extend .project-animation-1;
    animation-delay: 0.1s;
  }
  .project-animation-3 {
    @extend .project-animation-1;
    animation-delay: 0.4s;
  }
  .project-animation-4 {
     @extend .project-animation-1;
     animation-delay: 0.4s;
   }
  .project-animation-5 {
     @extend .project-animation-1;
     animation-delay: 0.5s;
   }
  .project-animation-6 {
    @extend .project-animation-1;
    animation-delay: 0.6s;
  }
  .project-animation-7 {
    @extend .project-animation-1;
    animation-delay: 0.7s;
  }
  .project-animation-8 {
    @extend .project-animation-1;
    animation-delay: 0.8s;
  }
  .project-animation-9 {
    @extend .project-animation-1;
    animation-delay: 0.9s;
  }



</style>
