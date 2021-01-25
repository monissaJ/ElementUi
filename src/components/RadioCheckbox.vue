<template>
  <div class="radiocheckbox">
    <el-row>
      <el-radio v-model="sex" label="1">男</el-radio>
      <el-radio v-model="sex" label="2">女</el-radio>
    </el-row>

    <br>单选框组<br>
    <el-row>
      <el-radio-group v-model="city">
        <el-radio :label="1">北京</el-radio>
        <el-radio :label="2">上海</el-radio>
        <el-radio :label="3">广州</el-radio>
      </el-radio-group>
    </el-row>

    <br>单选框组<br>
    <el-row>
      <el-radio-group v-model="city" size="mini" @change="onChange">
        <el-radio-button :label="1">北京</el-radio-button>
        <el-radio-button :label="2">上海</el-radio-button>
        <el-radio-button :label="3">广州</el-radio-button>
      </el-radio-group>
    </el-row>

    <br>复选框组<br>
    <el-row>
      <el-checkbox-group v-model="checkList" :max="2">
        <el-checkbox-button label="体育">体育</el-checkbox-button>
        <el-checkbox label="音乐">音乐</el-checkbox>
        <el-checkbox label="电脑">电脑</el-checkbox>
      </el-checkbox-group>
    </el-row>

  </div>
</template>

<script>
export default {
  name:'RadioCheckbox',
  data(){
    return{
      sex:'1',
      city:1,
      checkList : ['音乐', '体育']
    }
  },
  methods : {
    onChange(e){
      alert(e)
    },
    onChangeCheckbox(){
      alert(this.checkList)
    }
  }
}
</script>

<style>

</style>