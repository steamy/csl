<template>
    <section id="more-button">
      <a class="button" @click="clickEvent()">
        {{dataSource.name}}
        <i class="arrow" :style="[arrowSvgUrl]"></i>
      </a>

    </section>
</template>

<script>
  import {serverRoot} from '../../fetchdata/fetcher'

  export default {
    name: 'more-button',
    props: {
      dataSource: {
        type: Object
      }
    },
    data () {
      return {
        arrowSvgUrl: {backgroundImage: 'url("' + serverRoot + '/images/icons/small-icons.svg'}
      }
    },
    methods: {
      clickEvent: function () {
        window.location.href = this.dataSource.hrefLink
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  #more-button a {
    text-decoration: none;
  }
  #more-button {
    margin: 0 auto;
  }
  .button {
    width: 120px;
    position: relative;
    padding: 0;
    display: inline-block;
    line-height: 44px;
    height: 44px;
    border-radius: 22px;
    color: white;
    background-color: #569ffc;
    box-shadow: 0 2px 4px rgba(86,159,252,.2);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: padding .3s,color .3s,background .3s;
    transition-timing-function: initial;
    transition-delay: initial;
  }
  .button .arrow {
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -6px;
    width: 16px;
    height: 12px;
    opacity: 0;
    pointer-events: none;
    transition: transform .3s, opacity .3s;
    transition-timing-function: initial;
    transition-delay: initial;
    background-position: 0, 0;
  }
  .button:hover {
    padding-right: 20px;
    background-color: #6faeff;
  }
  .button:hover .arrow {
    opacity: 1;
  }

</style>
