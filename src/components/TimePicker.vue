<template>
  <div class="time-picker">
    
    <el-row :gutter="10">
      <el-col :span="8">
        <el-time-select v-model="value"
                                  :picker-options="{
                                    start:'08:30',
                                    step:'00:15',
                                    end:'18:30'
                                  }" placeholder="选择时间">

        </el-time-select>
      </el-col>

      <el-col :span="8">
        <el-time-picker v-model="value2" arrow-control
                                  :picker-options="{
                                   selectableRange : '18:00:00 - 20:00:00'
                                  }" placeholder="选择时间">

        </el-time-picker>
      </el-col>

      <el-col :span="8">
        <el-time-picker v-model="value3" arrow-control
                                  is-range range-separator="至"
                                  start-placeholder="开始时间"
                                  end-placeholder="结束时间">

        </el-time-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"TimePicker",
  data(){
    return {
      value : '',
      value2 : new Date(2010, 1, 1, 1, 1, 1),
      value3 : ''
    }
  }
}
</script>

<style>

</style>