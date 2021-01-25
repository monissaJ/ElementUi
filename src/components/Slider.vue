<template>
  <div class="slider">
    <el-row>
      <el-slider v-model="value"></el-slider>
    </el-row>

    <el-row>
      <el-slider v-model="value2" :show-tooltip="false"></el-slider>
    </el-row>

    <el-row>
      <el-slider v-model="value2" :format-tooltip="formatToolTip"></el-slider>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name:"Slider",
  data(){
    return {
      value : 0,
      value2 : 50
    }
  },
  methods : {
    formatToolTip(value){
      return value / 100
    }
  }
}
</script>

<style>

</style>