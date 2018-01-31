<template>

    <header :class="{'opened':isNavOpen}">
      <div class="mask" :class="initAnimation[1]"></div>
      <div class="nav-content">
        <a class="nav-brand" href="/" :class="[initAnimation[0], brandAnimation, mobileBrandClass]">
          <div class="logo">
            <img src="../../assets/img/logo/logo_3.png"/>
          </div>
          <h1 class="title">网络空间安全实验室</h1>
        </a>

        <div class="navigation" :class="initAnimation[1]">
          <a href="/" class="nav-item" :class="[navActives[0], initAnimation[2]]">首页</a>
          <a href="academy.html" class="nav-item" :class="[navActives[1], initAnimation[2]]">学术</a>
          <div @mouseover="dropdownTeamShow('hover')"
               @mouseout="dropdownTeamShow('hover')">
            <a class="nav-item team-item" :class="[navActives[2], initAnimation[2]]"
            @click="dropdownTeamShow('click')">团队</a>
            <div class="dropdown-nav dropdown-team" v-show="isShowDropdownTeam"
            :class="{'fade-in':isShowDropdownTeam}">
              <a href="../../team.html#/teachers" @click="openNavInMobile()">团队师资</a>
              <a href="../../team.html#/students" @click="openNavInMobile()">毕业生代表</a>
              <a href="../../team.html#/manage"  @click="openNavInMobile()">团队管理</a>
            </div>
          </div>
          <a href="cooperation.html" class="nav-item" :class="[navActives[3], initAnimation[2]]">合作</a>
          <a href="news.html" class="nav-item" :class="[navActives[4], initAnimation[2]]">新闻</a>
          <a href="http://localhost:2368" class="nav-item" :class="initAnimation[2]">博客</a>
        </div>
        <a class="menu-button" @click="openNavInMobile()">
          <nav-menu-svg v-show="!isNavOpen"></nav-menu-svg>
          <nav-exit-menu-svg v-show="isNavOpen"></nav-exit-menu-svg>
        </a>
      </div>
    </header>
</template>

<script>
  import IndexBanner from '../IndexBanner'
  import NavMenuSvg from './svg/NavMenuSvg'
  import NavExitMenuSvg from './svg/NavExitMenuSvg'

  export default {
    components: {
      NavExitMenuSvg,
      NavMenuSvg,
      IndexBanner},
    name: 'site-header',
    data () {
      return {
        navActives: ['', '', '', '', ''],
        isShowDropdownTeam: false,
        isNavOpen: false,
        isShowNavBrand: false,
        brandAnimation: '',
        initAnimation: ['', '', ''],
        mobileBrandClass: '',
        openAnimation: ['open-nav-brand', 'open-navigation', 'open-nav-items'],
        closeAnimation: ['close-nav-brand', 'close-navigation', 'close-nav-items']
      }
    },
    props: {
      pageIndex: {
        type: Number
      }
    },
    mounted () {
      this.setActive()
      if (window.innerWidth <= 768 && this.pageIndex === 0) {
        window.addEventListener('scroll', this.showNavBrand)
        this.mobileBrandClass = 'mobile-brand-hide'
      } else {
        this.mobileBrandClass = 'mobile-brand-show'
        this.openAnimation[0] = ''
        this.closeAnimation[0] = ''
      }
    },
    methods: {
      setActive: function () {
        let buffer = []
        for (let index = 0; index < 5; index++) {
          if (index === this.pageIndex) {
            buffer[index] = 'active'
          } else {
            buffer[index] = ''
          }
        }
        this.navActives = buffer
      },
      dropdownTeamShow: function (event) {
        if (window.innerWidth > 768 && event === 'hover') {
          this.isShowDropdownTeam = !this.isShowDropdownTeam
        } else if (window.innerWidth <= 768 && event === 'click') {
          this.isShowDropdownTeam = !this.isShowDropdownTeam
        }
      },
      openNavInMobile: function () {
        if (window.innerWidth <= 768) {
          this.initAnimation = !this.isNavOpen ? this.openAnimation : this.closeAnimation
          if (this.isNavOpen) {
            setTimeout(() => {
              this.isNavOpen = !this.isNavOpen
            }, 890)
          } else {
            this.isNavOpen = !this.isNavOpen
          }
        }
      },
      showNavBrand: function () {
        if (window.scrollY >= 212 && !this.isShowNavBrand) {
          console.log('show')
          this.brandAnimation = 'show-nav-brand'
          this.isShowNavBrand = !this.isShowNavBrand
        } else if (window.scrollY < 212 && this.isShowNavBrand) {
          this.brandAnimation = 'hide-nav-brand'
          this.isShowNavBrand = !this.isShowNavBrand
        }
      }
    },
    destroyed () {
      if (window.innerWidth <= 768 && this.pageIndex === 0) {
        window.removeEventListener('scroll', this.showNavBrand)
      }
    }
  }
</script>

<style  scoped="scoped" lang="scss">
  header {
    display: block;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    height: 64px;
    background-color: #0b2867 ;
  }
  .mask {
    display: none;
  }
  header .nav-content {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1320px;
    height: 64px;
    overflow: hidden;
    padding: 0;
  }
  header .nav-brand {
    margin: 10px 0 10px 0;
    display: flex;
    padding: 0 40px 0 40px;
    height: 44px;
    line-height: 44px;
  }
  header .nav-brand .title {
    margin: 0;
    color: white;
    font-size: 26px;
    font-weight: 400;
  }
  header a {
    text-decoration: none;
    cursor: pointer;
  }
  .logo {
    margin-right: 10px;
  }
  .logo img {
    width: 44px;
    height: 44px;
  }

  .navigation {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .navigation  .nav-item {
    padding: 10px 30px 10px 30px;
    font-size: 16px;
    color: #7685a6;
    transition: font-weight,color .25s;
    transition-timing-function: initial;
    transition-delay: initial;
    line-height: 44px;
    text-align: center;
  }
  .navigation .nav-item:hover {
    color: white;
    font-weight: 500;
  }
  .navigation .active {
    color: white;
    font-weight: 500;
  }
  .navigation .team-item {
    display: block;
    line-height: 44px;
  }
  .dropdown-nav {
    background: white;
    text-align: center ;
    position: absolute;
    z-index: 10;
    font-size: 16px;
    padding: 10px 0 10px 0;
    border-radius: 10px;
  }
  .dropdown-nav a {
    line-height: 30px;
    color: #7685a6;
    display: block;
  }
  .dropdown-nav a:hover {
    color: #061f54;
  }
  .dropdown-team {
    right: 260px;
    top: 64px;
    width: 150px;
    opacity: 0;
    transition: opacity 0.5s;
    transition-delay: 0.1s;
    transition-timing-function: initial;
  }
  .menu-button {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    cursor: pointer;
    width: 64px;
    height: 64px;
    padding-top: 20px;
  }
  .fade-in {
    opacity: 1;
  }

  @media (max-width: 768px) {
    header {
      position: fixed;
      width: 100%;
    }
    header .mobile-brand-show {
      display: flex;
    }
    header .mobile-brand-hide {
      display: none;
    }
    .opened {

    }
    .navigation {
      display: none;
    }
    .navigation {
      opacity: 0;
      transition: opacity 1s;
      transition-timing-function: initial;
      transition-delay: 0.1s;
    }
    .menu-button {
      display: block;
    }
    header .nav-brand .title {
      font-size: 20px;
    }
    .mask {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(6,31,84,.8);
      transition: opacity 1s;
      transition-timing-function: initial;
      transition-delay: 0.1s;
    }
    .opened .mask{
      display: block;
      opacity: 1;
    }
    .opened .navigation {
      display: flex;
      background-color: #0b2867 ;
      position: absolute;
      flex-direction: column;
      left: 0;
      top: 0;
      width: 100%;
      opacity: 1;
      padding: 120px 0 40px 0;
      /*z-index: 2;*/
    }
    header.opened .nav-brand {
      z-index: 1;
      display: flex;
    }
    .dropdown-team {
      position: relative;
      background-color: white;
      top: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 818px){
    .navigation  .nav-item {
      padding-right: 14px;
      padding-left: 14px;
    }
    .dropdown-team {
      right: 150px;
    }
  }
  @media (min-width: 818px) and (max-width: 970px) {
    .navigation  .nav-item {
      padding-right: 18px;
      padding-left: 18px;
    }
    .dropdown-team {
      right: 180px;
    }
  }

  /**
  动画
   */
  @keyframes nav-brand-in {
    from {transform: translate(0, 64px)}
    to {transform: translate(0, 0)}
  }
  @keyframes nav-brand-out {
    from {transform: translate(0, 0)}
    to {transform: translate(0, 64px)}
  }
  .execute-time {
    animation-duration: 0.9s;
  }
  .open-nav-brand {
    animation: nav-brand-in 0.9s;
    animation-fill-mode: forwards;
  }
  .close-nav-brand {
    animation: nav-brand-out 0.9s;
    animation-fill-mode: forwards;
  }
  .show-nav-brand {
    display: flex !important;
    animation: nav-brand-in 0.9s;
    animation-fill-mode: forwards;
  }
  .hide-nav-brand {
    display: flex !important;
    animation: nav-brand-out 0.9s;
    animation-fill-mode: forwards;
  }

  @keyframes navigation-in {
    from {opacity: 0}
    to {opacity: 1}
  }
  @keyframes navigation-out {
    from {opacity: 1}
    to {opacity: 0}
  }
  .open-navigation {
    animation: navigation-in 0.9s;
    animation-fill-mode: forwards;
  }
  .close-navigation {
    animation: navigation-out 0.9s;
    animation-fill-mode: forwards;
  }

  @keyframes nav-items-in {
    from {transform: translate(0, 30px)}
    to {transform: translate(0, 0)}
  }
  @keyframes nav-items-out {
    from {transform: translate(0, 0)}
    to {transform: translate(0, 30px)}
  }
  .open-nav-items {
    animation: nav-items-in 0.9s;
    animation-fill-mode: forwards;
  }
  .close-nav-items {
    animation: nav-items-out 0.9s;
    animation-fill-mode: forwards;
  }

</style>
