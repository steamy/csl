<template>
  <div class="img-box" >
    <div class="icon-item" :style="backgroundImage"
         :class="firstTransform"
         ref="firstitem"></div>
    <div class="icon-item" :style="backgroundImage"
    :class="secondTransform"></div>
    <div class="icon-item" :style="backgroundImage"
    :class="thirdTransform"></div>
  </div>
</template>

<script>
  export default {
    name: 'img-box',
    props: {
      backgroundImage: {
        type: Object
      }
    },
    data () {
      return {
        firstTransform: '',
        secondTransform: '',
        thirdTransform: '',
        count: 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollHandle)
    },
    methods: {
      scrollHandle: function () {
        const bottom = this.$refs.firstitem.getClientRects()[0].bottom
        const windowHeight = window.innerHeight
        if ((windowHeight - bottom) >= 5) {
          this.firstTransform = 'first-item-ani'
          this.secondTransform = 'second-item-ani'
          this.thirdTransform = 'third-item-ani'
          window.removeEventListener('scroll', this.scrollHandle)
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .img-box {
    width: 188px;
    height: 188px;
    position: relative;
    display: block;
    margin: 0 auto;
  }
  .icon-item {
    width: 88px;
    height: 101px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -50px;
    margin-left: -44px;
  }
  .icon-item:first-child {
    background-position: 0 0;
    z-index: 1;
    /*transform: matrix(1,0,0,1,-49,42.5);*/
    /*-webkit-animation: first 2s;*/
    /*animation: first 2s;*/
  }
  .icon-item:nth-child(2) {
    background-position: 90px 0;
    /*transform: matrix(1,0,0,1,49,42.5);*/
  }
  .icon-item:nth-child(3) {
    background-position: 180px 0;
    /*transform: matrix(1,0,0,1,0,42.5);*/
  }

  /*
  动画
  */
  @keyframes first {
    from {transform: translate(0,0)}
    to {transform: translate(-49px,-42.5px)}
  }
  @-webkit-keyframes first {
    from {transform: translate(0,0)}
    to {transform: translate(-49px,-42.5px)}
  }
  .first-item-ani {
    -webkit-animation: first 1s;
    -webkit-animation-fill-mode: forwards;
    animation: first 1s;
    animation-fill-mode: forwards;
  }

  @keyframes second {
    from {transform: translate(0,0)}
    to {transform: translate(49px,-42.5px)}
  }
  @-webkit-keyframes second {
    from {transform: translate(0,0)}
    to {transform: translate(49px,-42.5px)}
  }
  .second-item-ani {
    -webkit-animation: second 1s;
    -webkit-animation-fill-mode: forwards;
    animation: second 1s;
    animation-fill-mode: forwards;
  }
  @keyframes third {
    from {transform: translate(0,0)}
    to {transform: translate(0,42.5px)}
  }
  @-webkit-keyframes third {
    from {transform: translate(0,0)}
    to {transform: translate(0,42.5px)}
  }
  .third-item-ani {
    -webkit-animation: third 1s;
    -webkit-animation-fill-mode: forwards;
    animation: third 1s;
    animation-fill-mode: forwards;
  }





</style>
