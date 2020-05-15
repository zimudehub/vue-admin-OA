<template>
  <div>
    <el-card class="box-card" style="width: 100%">
      <div slot="header" class="clearfix">
        <span>角色权限设置</span>
      </div>
      <div  style="margin-bottom:15px ; color: #b5bdc5; font-size: 12px">
        管理角色权限, 分配角色对菜单栏的权限, 只有超级管理员可用功能
      </div>
      <el-button type="primary" @click="handleAddRole">添加角色</el-button>
    </el-card>
    <el-card class="box-card" style="width: 100%; margin-top: 6px; height: 640px">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="部门">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.branch }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>电话: {{ scope.row.phone }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 15px"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-card>
    <AuthorForm :v-if="showDrawer" :param="param" :showDrawer="showDrawer" @show="showD" />
  </div>
</template>
<script>
    import AuthorForm from "./form"
    export default {
        name: "author",
        components:{
            AuthorForm
        },
        created(){
        //    这里请求接口,改变this.tableDta,如果需要显示loading画面,提供两套方案,全局配置axios拦截请求改变全局loading值,
        //    或者使用async/await 处理loading
        },
        data() {
            return {
                param:{},
                showDrawer: false,
                tableData: [{
                    id: 1,
                    branch: '技术部',
                    name: '王小虎',
                    phone: '1552445221'
                }, {
                    id: 2,
                    branch: '技术部',
                    name: '张晓丽',
                    phone: '1552445221'
                }, {
                    id: 3,
                    branch: '技术部',
                    name: '于菲菲',
                    phone: '1552445221'
                }, {
                    id: 4,
                    branch: '技术部',
                    name: '马小涛',
                    phone: '1552445221'
                }, {
                    id: 5,
                    branch: '技术部',
                    name: '张伟',
                    phone: '1552445221'
                }, {
                    id: 6,
                    branch: '技术部',
                    name: '李娜',
                    phone: '1552445221'
                }, {
                    id: 7,
                    branch: '技术部',
                    name: '萌萌',
                    phone: '1552445221'
                }, {
                    id: 8,
                    branch: '技术部',
                    name: '刘文文',
                    phone: '1552445221'
                }],

            }
        },
        computed:{

        },
        methods: {
            handleEdit(index, row) {
                this.param = row;
                this.showDrawer = true
            },
            handleAddRole(){
                this.showDrawer = true
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            showD(){
                this.showDrawer = false
            }
        }
    }
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
