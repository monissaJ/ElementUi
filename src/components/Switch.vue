<template>
  <div class="switch">
    <el-row>
      <el-switch v-model="value"
                        active-color="#136e66"
                        inavtive-color="fff"
                        active-text="打开"
                        inactive-text="关闭">

    </el-switch>
    </el-row>

    <el-row>
      <el-switch v-model="value2"
                        active-color="#136e66"
                        inavtive-color="fff"
                        active-value="200"
                        inactive-value="0"
                        @change="switchChange">

    </el-switch>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name:"Switch",
  data(){
    return {
      value : true,
      value2 : 200
    }
  },
  methods : {
    switchChange(e){
      alert(e)
    }
  }
}
</script>

<style>

</style>