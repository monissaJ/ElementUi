<template>
  <dia class="datepicker">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-date-picker v-model="value" type="datetime"></el-date-picker>
      </el-col>

      <el-col :span="8">
        <el-date-picker v-model="value" type="date"></el-date-picker>
      </el-col>

      <el-col :span="8">
        <el-date-picker v-model="value2" type="monthrange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  format="yyyy年MM月dd日"></el-date-picker>
      </el-col>
    </el-row>

  </dia>
</template>

<script>
export default {
  name:"DatePicker",
  data(){
    return {
      value : '',
      value2 : ''
    }
  }
}
</script>

<style>

</style>