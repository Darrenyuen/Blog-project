<template>
  <div id="life">
    <div class="search">
       <input type="text" v-model="search" placeholder="搜索">
    </div>
    <div class="single-article" v-for="article in articles">
      <router-link v-bind:to="'/article/' + article.id">
        <h3>{{article.title}}</h3>
      </router-link>
      <p class="content">{{article.content}}</p>
      <p class="time">{{article.time}}</p>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {
        articles: [
        {id: 1, title: "test", content: "因此，对于 C 这种静态语言，Type信息只用于编译器解析，除了静态检查外还影响生成：相应长度的指令 (是 movq、movl 还是 movb ?)寄存器长度的选用（是 rax、eax 还是 al ?）栈变量内存大小的确定，也可以说是 sp 的位置（ sp 表示 Stack Pointer， 它和 Base Pointer 配合管理栈内存的分配与回收，所谓“分配”栈内存只是用如 subq $32, %rsp 的指令将 sp 向低地址移动）然而，对于动态语言，Type 不仅在编译期起到上述作用，还需要保留到运行时，让动态调用得以实现，被称作 Type Encodings，对于 Objective-C 所有 Type 的编码，都可以在这个官方文档中查到，里面的编码和用 @encode() 生成的一致，比如：",time: "2019-3-29 12:00:00"},
        {id: 2, title: "testA", content: "666", time: "2019-3-29 12:00:00"}]
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
#life{
  padding-top:50px;
}
.search{
  text-align: center;
  padding: 40px 0;
  width: 100%;
}
input[type="text"]{
  padding: 8px;
  width: 40%;
}
.single-article{
  margin: 40px auto;
  width: 700px;
  height: 100px;
}
h3{
  margin-top: 50px;
  font-size: 22px;
  font-family: "Arial"
}
a{
  color: #000;
  text-decoration: none;
}
.content{
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.time{
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #949396;
}
.line{
  margin-top: 10px;
  background-color: #dce0e8;
  width:700px;
  height:1px;
}
</style>
