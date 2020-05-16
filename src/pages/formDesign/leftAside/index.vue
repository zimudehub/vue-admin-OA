<template>
  <el-form  label-width="80px" :model="layoutData" class="left-form">
    <el-form-item label="名称">
      <el-input v-model="layoutData.layout"></el-input>
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item label="活动区域">
      <el-input v-model="layoutData.layout"></el-input>
    </el-form-item>
    <el-divider></el-divider>
    <el-form-item label="活动形式">
      <el-input v-model="layoutData.layout"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "leftAside",
        props:{
            layoutData:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped>

</style>
