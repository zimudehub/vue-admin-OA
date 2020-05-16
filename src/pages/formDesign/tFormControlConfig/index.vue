<template>
  <el-form  label-width="80px" :model="config" class="control-config-form" >
    <el-form-item label="输入框宽">
      <el-input v-model="config.width"></el-input>
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item label="活动区域">
      <el-input v-model="config.placeholder"></el-input>
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item label="活动形式">
      <el-input v-model="config.defaultValue"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="config.defaultValue"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "tFormControlConfig",
        props:{
            config:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
