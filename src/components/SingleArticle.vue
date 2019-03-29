<template>
  <div id="single-article">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: 'SingleArticle',
  data () {
    return {
      name: "single-article"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
