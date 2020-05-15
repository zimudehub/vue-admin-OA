<template>
  <el-container style="height: 100%">
    <SideMenu :isCollapse="isCollapse"/>
    <el-container style="min-width: 1000px">
      <el-header style="height: 70px; padding-left: 0">
        <Header @Collapse="handleCollapse"/>
      </el-header>
      <el-main style=" background-color: #f3f5f7; overflow-x: hidden; padding: 8px">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer style=" padding: 0;">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import SideMenu from './components/sideMenu'
  import Header from './components/header'
  import Footer from './components/footer'
  import HomeEcharts from './pages/home'
    export default {

      components:{
          SideMenu, Header, Footer, HomeEcharts
      },
        name: 'admin',
        data(){
            return {
                isCollapse: false
            }
        },
        methods: {
            handleCollapse:function () {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style scoped>
  .fade-enter-active{
    transition: all 2s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-110%);
  }
  /*.fade-leave-to{*/
  /*  opacity: 1;*/
  /*  transform: translateX(100%);*/
  /*}*/
</style>
