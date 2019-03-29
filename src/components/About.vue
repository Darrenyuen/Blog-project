<template>
  <div id="about">
    <img src="../assets/me.png">
    <div class="introduction">
      <p><strong>站主简介</strong></p>
      <p>袁盛峰</p>
      <p>状态：疯狂打码中</p>
      <p>Motto:Aspiring people have become a success.</p>
      <span>其他链接：</span>
      <ul>
        <li>
          <a href="https://blog.csdn.net/weixin_41897234">CSDN</a>
          <a href="https://github.com/Ysssf">Github</a>
          <a href="https://home.cnblogs.com/u/yuansssf/">博客园</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    	name: "about"
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
#about{
  margin: 40px auto;
  width: 100%;
  margin-top: 100px;
}
img{
  margin-left: 550px;
  float: left;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.introduction{
  float: left;
  margin-left: 50px;
  margin-top: 10px;
}
p{
  margin-bottom: 8px;
  font-family: '宋体';
}
ul{
  display:inline;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li{
  display:inline-block;
  font-family: '宋体';
  text-align: -webkit-match-parent;
}
a{
  text-decoration: none;
  margin: 0 5px;
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
</style>
