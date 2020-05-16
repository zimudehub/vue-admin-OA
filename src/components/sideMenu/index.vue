<template>
  <el-aside width="initial" style="height: 100%;  " >
    <el-scrollbar style="height: 100%; ">
      <el-menu default-active="7777"
             class="el-menu-vertical-demo"
             style="height: 100%; padding-right: 0"
             :collapse="isCollapse"
             :collapse-transition="false"
             router
             text-color="#000000"
             active-text-color="#ffd04b"
      >
        <el-menu-item key="7777" style="min-width: 200px; height:70px; text-align: center; padding: 0; font-size: 16px; font-weight:600; line-height: 70px; color: #000000">
          <span>这应该有个Logo</span>
        </el-menu-item>
        <selfMenu :menu-list="menuList" :isCollapse="isCollapse"/>
    </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
  import selfMenu from './menu'
    export default {
        name: "SideMenu",
        components:{
            selfMenu
        },
        props:["isCollapse"],
        data(){
            return{

            }
        },
        computed:{
            menuList(){
                return this.$store.state.menuMap
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
  .el-menu-item-wrap{
    margin: 15px 0 15px 0;
  }
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
