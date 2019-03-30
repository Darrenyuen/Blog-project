<template>
  <div id="bottom">
    <div class="line"></div>
    <div class="copyright">
      <p>原创文章，版权声明 非商业性使用</p>
      <p>对博主感兴趣？欢迎关注及留言</p>
      <p>©2017-2019 ysssf | Powerd by Vue & PHP</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
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
#bottom{
  position: relative;
  margin-top: 50px;
  margin: auto;
  height: 150px;
  width: 700px;
  bottom:0px;
  left: 0;
  right: 0;
  text-align: center;
}
.line{
  margin: 20px auto;
  background-color: #dce0e8;
  width:700px;
  height:1px;
}
.copyright{

}
p{
  color: #aaa;
  font-size: 14px;
  font-weight: 100;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
