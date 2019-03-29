<template>
  <div id="header">
    <a href="http://localhost:8080/" class="logo">
      <img src="../assets/logo.png">
    </a>
    <ul>
      <li>
        <router-link to="/" exact>技术博客</router-link>
        <router-link to="/life" exact>生活点滴</router-link>
        <router-link to="/write" exact>写作</router-link>
        <router-link to="/about" exact>个人</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {

  },
  methods: {
      
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#header{
  width: 750px;
  height: 60px;
  margin: 0 auto;
  padding: 20px 100px;
  text-align: center;
  line-height: 1.6;
}
.logo{
  float: left;
  margin-left: 20px;
}
ul{
  float: right;
  margin: 0;
  margin-right: 80px;
  padding-right: 100px;
  padding: 0;
  list-style-type: none;
  padding-inline-start: 40px;
}
li{
  display:inline-block;
  font-family: '宋体';
  text-align: -webkit-match-parent;
  margin-top: 40px;
  padding: 19px 10px;
}
a{
  text-decoration: none;
  padding: 30px;
}
a:visited { 
  font-size: 12px; 
  color: #000000; 
  text-decoration: none; 
}  
a:hover{
  color: #cc9999;
  text-decoration: none;
  border-radius: 5px;
  text-decoration: underline; 
}
img{
  padding: 0;
  margin: 10px;
  width: 50px;
  height: 50px;
}
</style>
