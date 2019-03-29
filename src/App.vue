<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Life from './components/Life'
import ShowBlog from './components/ShowBlog'
import Write from './components/Write'
import About from './components/About'
import SingleBlog from './components/SingleBlog'
import SingleArticle from './components/SingleArticle'

export default {
  name: 'App',
  components: {
    Header,Life,ShowBlog,Write,About,SingleBlog,SingleArticle
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
