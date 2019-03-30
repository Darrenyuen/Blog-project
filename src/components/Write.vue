<template>
  <div id="write">
    <div class="time">
      <input type="text" class="time" value="2019-3-29 20:20:00">
    </div>
    <div class="title">
      <input type="text" class="title" placeholder="标题">
    </div>
    <div>
      <textarea class="content" name=""></textarea>
    </div>
    <div class="type-label">
      <!-- 暂时没有标签 -->
      <span class="type">
        请选择类型：
          <select v-model="selected">
            <option>技术博客</option>
            <option>生活点滴</option>
          </select>
      </span>
    </div>
    <div class="button">
      <button type="reset" round>重置</button>
      <button type="submit" round>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Write',
  data () {
    selected: ""
    return {
    }
  },
  created: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#write{
  margin: 40px auto;
  width: 700px;
}
.time{
  text-align: center;
  font-size: 30px;
  height: 30px;
  width: 700px;
  border: none;
}
.title{
  width: 700px;
  font-size: 20px;
  height: 30px;
  margin: 20px auto;
}
.content{
  padding: 20px;
  margin-top: 30px;
  width: 700px;
  height: 500px;
  font-size: 18px;
  resize:none;
  border-radius: 2px;
}
.type-label{
  margin-top: 20px;
}
.button{
  text-align: center;
}
button{
  font-size: 18px;
  margin: 20px 120px;;
  width: 80px;
  height:40px;
  border-radius: 10px;
  border: none;
}
button[type="reset"]{
  background: #d84354;
}
button[type="submit"]{
  background: #4ff98e;
}
</style>