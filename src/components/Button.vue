<template>
  <div class="button">
    <el-row>
      <el-button type="primary">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button type="warning">按钮</el-button>
      <el-button type="info">按钮</el-button>
    </el-row>

  <br>镂空效果

    <el-row>
      <el-button type="primary" plain>按钮</el-button>
      <el-button type="success" circle class="el-icon-user"></el-button>
      <el-button type="warning" round>按钮</el-button>
      <el-button type="info" plain disabled>按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </el-row>

    <br>按钮组
    <el-row>
      <el-button-group>
        <el-button type="primary">上一页</el-button>
        <el-button type="primary">下一页</el-button>
      </el-button-group>

      <br>加载中

    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-button type="primary" size="mini">按钮</el-button>
    </el-row>
      
    </el-row>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>