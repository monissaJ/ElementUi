<template>
  <div class="input">
    <el-row :gutter="5">
      <el-col :span="6">
        <div>
          <el-input v-model="input1" placeholder="请输入用户名" clearable></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input v-model="input2" show-password></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input type="textarea" placeholder="文本域"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input v-model="input3" maxlength="10" show-word-limit></el-input>
        </div>
      </el-col>
    </el-row>

内置图标
<el-row :gutter="5">
      <el-col :span="8">
        <div>
          <el-input placeholder="前置图标-搜索" prefix-icon="el-icon-search"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-input placeholder="后置图标-日历" suffix-icon="el-icon-date"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-input>
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
export default {
  name:'Input',
  data(){
    return{
      input1:'',
      input2:"",
      input3:""
    }
  }
}
</script>

<style>

</style>