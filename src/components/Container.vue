<template>
    <el-container class="container">
        <el-header>header</el-header>

      <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
      </el-container>
        
      <el-footer>footer</el-footer>
      </el-container>
</template>

<script>
export default {
  name:'Container'
}
</script>

<style>
  .el-container{
    background-color: slateblue;
  }
  .el-header{
    background-color: slategray;
  }
  .el-aside{
    background-color: darkseagreen;
    max-width:200px;
    min-height: 150px;
  }
  .el-main{
    background-color: dodgerblue;
  }
  .el-footer{
    background-color: darkgreen;
  }
</style>