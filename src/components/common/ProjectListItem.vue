<template>
  <div id="project-list-item"
  :style="dataSource.backgroundImage">
    <a>
      <div class="text-box">

      </div>
    </a>
  </div>

</template>

<script>
  export default {
    name: 'project-list-item',
    props: {
      dataSource: Object
    }
  }
</script>

<style scoped="scoped" lang="scss">



</style>
