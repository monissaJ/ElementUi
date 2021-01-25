<template>
  <div id="layout">

    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="18">18</el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="6">18</el-col>
      <el-col :span="6">18</el-col>
      <el-col :span="6">18</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="6" :offset="1">18</el-col>
      <el-col :span="6" :offset="1">18</el-col>
      <el-col :span="6" :offset="1">18</el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name:'Layout'
}
</script>

<style>
  .el-row{
    background-color: skyblue;
    margin: 20px 0;
  }
  .el-col{
    background-color: slateblue ;
    padding: 10px 0;
    border-right:1px solid white;
  }
</style>