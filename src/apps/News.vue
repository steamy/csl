<template>
  <div id="news">
    <navigation></navigation>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation'
  import SiteFooter from '../components/SiteFooter'

  export default {
    components: {
      SiteFooter,
      Navigation},
    name: 'news'
  }
</script>

<style scoped>

</style>
