<template>
  <div class="cascader">
    <el-cascader v-model = "value"
                          :options = "options"
                          :props="{expandTrigger : 'hover'}"
                          :show-all-levels="false">

    </el-cascader>
  </div>
</template>

<script>
export default {
  name:"Cascader",
  data(){
    return {
      value : "",
      options : [
        {
          value : 1,
          label : "二级菜单",
          children : [
            {
              value : 11,
              label : '北京',
                children : [
                  {
                    value : 111,
                    label : '朝阳区'
                  },
                  {
                    value : 112,
                    label : '尖草区'
                  }
                ]
            },
            {
              value : 12,
              label : '上海'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>