<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from '../components/Index'

export default {
  components: {Index},
  name: 'app'
}
</script>

<style>
@import '../assets/css/common.scss';
#app {
  font-family: 方正兰亭黑简体;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
