<template>
    <div class="iconlink">
      <i class="el-icon-edit">笔</i>
      <el-button type="primary" class="el-icon-search">搜索</el-button>

      <br>

      <el-link type="primary">链接</el-link>
      <el-link type="success">链接</el-link>
      <el-link type="danger">链接</el-link>
      <el-link href="http://www.baidu.com" src="百度" type="warning">链接</el-link>
      <el-link type="info">链接</el-link>
    </div>
</template>

<script>
export default {
  name:"IconLink"
}
</script>

<style>
  .el-icon-edit, .el-icon-search{
    font-size:30px;
    color:gray;
  }
  
</style>