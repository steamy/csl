<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
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
