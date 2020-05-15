<template>
  <div>
    <div style="float: left; height: 70px; line-height: 70px; width: 50px; font-size: 30px; text-align: center">
      <i class="el-icon-s-fold" @click="handleIsCollapse"></i>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="float: left; height: 70px; line-height: 70px; margin-left: 10px;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown :hide-on-click="false" style="float: right" class="avatar-wrap">
  <span class="el-dropdown-link">
     <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="position: relative; top: 15px"></el-avatar>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>用户名</el-dropdown-item>
        <el-dropdown-item disabled>谭先生</el-dropdown-item>
        <el-dropdown-item >注销</el-dropdown-item>
        <el-dropdown-item @click.native="handleLoginOut" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown :hide-on-click="false" style="float: right" class="false-wrap">
  <span class="el-dropdown-link">
    <i class="el-icon-s-opportunity el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>错误日志</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {

            }
        },
        methods:{
            handleIsCollapse:function () {
                this.$emit("Collapse")
            },
            handleLoginOut:function(){
                window.sessionStorage.removeItem("token");
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>
  .avatar-wrap{
    float: right;
    height: 70px;
    line-height: 70px;
  }
  .false-wrap{
    float: right;
    height: 70px;
    width:60px;
    text-align: center;
    font-size: 25px;
    line-height: 70px;
  }
  .false-wrap:hover{
    background-color: #f3f5f7;
    float: right;
    height: 70px;
    width:60px;
    text-align: center;
    font-size: 25px;
    line-height: 70px;
  }
</style>
