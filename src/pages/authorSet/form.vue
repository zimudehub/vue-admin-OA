<template>
  <el-drawer
    title="人员信息"
    :before-close="handleClose"
    :visible.sync="showDrawer"
    direction="rtl"
    custom-class="demo-drawer"
    ref="drawer"
  >
    <div class="demo-drawer__content">
      <el-form
        :model="form"
        size="medium"
      >
        <el-form-item label="角色名" :label-width="formLabelWidth" >
          <el-col :span="18">
            <el-input v-model="form.name" autocomplete="off" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-col :span="18">
            <el-input v-model="form.phone" autocomplete="off" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-col :span="18">
            <el-input v-model="form.password" autocomplete="off" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="form.branch" placeholder="请选择部门">
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="信息部" value="信息部"></el-option>
            <el-option label="人力资源" value="人力资源"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限选择" :label-width="formLabelWidth">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-checked-keys="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]"
            :props="defaultProps">
          </el-tree>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer" style="margin-top: 20px; text-align: center">
        <el-button @click="cancelForm" style="width: 45%">取 消</el-button>
        <el-button type="primary" style="width: 45%" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
    export default {
        name: "authorForm",
        props:['showDrawer','param'],
        // props: {
        //     showDrawer: {
        //         type: Boolean,
        //     },
        //     param:{
        //         type: Object,
        //         default:()=>{
        //
        //         }
        //     }
        // },
        watch: {
            param: {
                handler(newValue, oldValue) {
                    this.form = JSON.parse(JSON.stringify(newValue))
                    console.log(this.form)
                },
                // deep:true
            }
        },
        // beforeUpdate(){
        //     // console.log(this.param)
        //     // this.form.phoneNumber = this.param.phone;
        //     // console.log(this.form)
        // },
        data(){
            return{
                formLabelWidth: '80px',
                loading: false,
                form: {
                    password: "",
                    phone: "",
                    name: "",
                },
                data:[
                    {
                        id: 1,
                        label: "首页",
                    },
                    {
                        label: "表单页",
                        id: 2,
                        children:[
                            {
                                label: "基础表单",
                                id: 3
                            },
                            {
                                label: "分步表单",
                                id: 4
                            },
                            {
                                label: "高级表单",
                                id: 5
                            }
                        ]
                    },
                    {
                        label: "权限测试页",
                        id: 6,
                    },
                    {
                        label: "卡片",
                        id: 7,
                    },
                    {
                        label: "图标",
                        id: 8,
                    },
                    {
                        label: "分级菜单",
                        id: 9,
                        children: [
                            {
                                label: "菜单1",
                                id: 10,
                            },
                            {
                                label: "菜单2",
                                id: 11,
                            },
                            {
                                label: "菜单3",
                                id: 12,
                            },
                            {
                                label: "菜单4",
                                id: 13,
                                children: [
                                    {
                                        label: "三级菜单",
                                        id: 14,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        label: "操作日志",
                        id: 15,
                    },
                    {
                        label: "Blog后台",
                        id: 16,
                    },
                    {
                        label: "权限管理",
                        id: 17,
                    },
                    {
                        label: "个人中心",
                        id: 18,
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods:{
            handleClose(done) {
                console.log(this.form)
                if (this.loading) {
                    return;
                }
                this.$confirm('确定要提交表单吗？')
                    .then(_ => {
                        this.$emit("show")
                    })
                    .catch(_ => {});
            },
            cancelForm() {
                this.loading = false;
                this.$emit("show");
                clearTimeout(this.timer);
            },
        }
    }
</script>

<style scoped>

</style>
