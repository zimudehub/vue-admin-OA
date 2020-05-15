<template xmlns="" xmlns="">
  <el-container>
    <el-header>谭先森的博客</el-header>
    <el-main>
      <div class="icon-blog-wrap"></div>
      <div class="login-wrap">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-input type="text" prefix-icon="el-icon-user" v-model="ruleForm.userName" autocomplete="off" style="margin-bottom: 25px"></el-input>
          <el-input type="password" prefix-icon="el-icon-goods" v-model="ruleForm.password" autocomplete="off" style="margin-bottom: 25px" showPassword></el-input>
          <el-button class="left" type="primary" @click="submitForm(ruleForm)">登录</el-button>
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <div class="logo-footer-wrap">
        <p class="logo-author">presented by Tan ChengDuo</p>
        Copyright <i class="el-icon-chat-round"></i> 不断完善的博客系统
      </div>
    </el-footer>
  </el-container>
</template>

<script>
    import { loginRequest } from "../utils/requestApi";
    import qs from 'qs'
    export default {
        created(){
            // this.initData()
        },
        methods:{
            async submitForm(){
                // if (true){
                //     console.log(this.$store.state)
                //     return
                // }

                const _this = this;
                if (!_this.ruleForm.userName){
                    this.$message({
                        showClose: true,
                        message: '请输入用户名',
                        type: 'error'
                    });
                    return
                }
                if (!_this.ruleForm.password){
                    this.$message({
                        showClose: true,
                        message: '请输入密码',
                        type: 'error'
                    });
                    return
                }
                const {data} = await loginRequest(qs.stringify(_this.ruleForm));
                if (data.isLogin === 0){
                    window.sessionStorage.setItem("token","LOGIN_SUCCESS")
                    this.$router.push({
                        path:"/",
                        params:{
                            data: data.user
                        },
                    });
                }else if (data.data.isLogin === 1){
                    this.$message({
                        showClose: true,
                        message: data.err,
                        type: 'error'
                    });
                }
            },
        },
        name: 'Login',
        data () {
            return {
                ruleForm: {
                    password: '',
                    userName: '',
                },
                rules:{},
                msg: ''
            }
        }
    }
</script>

<style scoped>
  .logo-footer-wrap {
    width: 100%;
    text-align: center;
    line-height: 1.5;
  }
  .logo-footer-wrap .logo-author {
    text-align: center;
    margin-bottom: 15px;
  }
  .login-wrap .left{
    width: 100%;
    float: left;
  }
  .icon-blog-wrap{
    position: absolute;
    width: 120px;
    height: 120px;
    left: 50%;
    top: 8%;
    transform: translate(-50%, 0);
    background: url('~@/../static/blogging.png') center center no-repeat;
    background-size: 120px auto;
  }
  .login-wrap{
    position: absolute;
    padding-top: 20px;
    border-top: 2px solid #409EFF;
    width: 388px;
    height: 400px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    /*box-shadow: 0px -2px 0px rgba(64,158,255,0.5)*/
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    position: relative;
    color: #333;
    text-align: center;
    height: 720px;
  }

</style>
