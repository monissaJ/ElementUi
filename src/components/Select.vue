<template>
  <div class="select">
    <el-row>
      <el-col :span="6">
        <el-select placeholder="请选择" v-model="value">
          <el-option v-for="item in options" 
                            :key="item.value" 
                            :label="item.label" 
                            :value="item.value">

          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-select placeholder="请选择" v-model="value">
          <el-option v-for="item in options" 
                            :key="item.value" 
                            :label="item.label" 
                            :value="item.value"
                            :disabled="item.value === 2">

          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-select placeholder="请选择（可多选）" v-model="value" clearable multiple>
          <el-option v-for="item in options" 
                            :key="item.value" 
                            :label="item.label" 
                            :value="item.value">

          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-select placeholder="请选择(添加搜索功能）" v-model="value" filterable>
          <el-option v-for="item in options" 
                            :key="item.value" 
                            :label="item.label" 
                            :value="item.value">

          </el-option>
        </el-select>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name:"Select",
  data(){
    return {
      value:"",   // 默认选中的值
      options : [
        {
          value : 1,
          label : "北京"
        },
        {
          value : 2,
          label : "上海"
        },
        {
          value : 3,
          label : "广州"
        }
      ]


      
    }
  }
}
</script>

<style>

</style>