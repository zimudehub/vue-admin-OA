<template>
  <div class="menu-bug-wrap">
    <template v-for="(item,i) in menuList">
      <el-menu-item v-if="!item.children" :index="item.path" :key="item.path" class="el-menu-item-wrap">
        <i :class="item.icon?item.icon:''"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      <el-submenu v-if="item.children" :index="i + ''" :key="i+44" >
        <template slot="title">
          <i :class="item.icon?item.icon:''"></i>
          <span slot="title" :style="isCollapse?'visibility: hidden':''" id="menu-span">{{item.name}}</span>
        </template>
        <self-Menu :menu-list="item.children"/>
      </el-submenu>
    </template>
  </div>
</template>

<script>
    export default {
        name: "self-Menu",
        props:["menuList", "isCollapse"],
        watch:{
            isCollapse:{
                a(newValue){
                    return newValue
                }
            }
        },
        created() {

        }
    }
</script>

<style >
  .el-menu-item-wrap{
    margin: 15px 0 15px 0;
  }
  .el-menu--collapse>.menu-bug-wrap>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
</style>
