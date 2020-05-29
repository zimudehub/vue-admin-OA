<template>
  <div class="content-top-button" >
    <el-tooltip class="item" effect="dark" content="保存" placement="top-start">
      <el-button icon="el-icon-document-checked" circle size="mini"/>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="预览" placement="top-start">
      <el-button icon="el-icon-view" circle size="mini" @click="viewFrom"/>
    </el-tooltip>
    <el-dialog title="表单样式如下" v-if="formViewVisible" :visible.sync="formViewVisible" :top="'10vh'">
      <TFormBuild
        :options="data"
      />
    </el-dialog>
    <el-tooltip class="item" effect="dark" content="导入" placement="top-start">
      <el-button icon="el-icon-upload2" circle size="mini"/>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="生成Json" placement="top-start">
      <el-button icon="el-icon-tickets" circle size="mini" @click="jsonView"/>
    </el-tooltip>
    <el-dialog title="Json数据如下所示" v-if="jsonViewVisible" :visible.sync="jsonViewVisible" :top="'10vh'">
      <CodemirrorVue
        :json="JSON.stringify(data.list, null, '\t')"
      />
    </el-dialog>
    <el-tooltip class="item" effect="dark" content="生成Html" placement="top-start">
      <el-button icon="el-icon-document" circle size="mini"/>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="清空" placement="top-start">
      <el-button icon="el-icon-delete" circle size="mini" @click="deleteAll"/>
    </el-tooltip>
  </div>
</template>

<script>
  import CodemirrorVue from "../components/codemirrorVue";
  import TFormBuild from "../tFormBuild"
    export default {
        name: "topButton",
        props:{
            data:{
                type: Object,
                required: true
            }
        },
        components:{CodemirrorVue, TFormBuild},
        data(){
            return{
                jsonViewVisible: false,
                formViewVisible: false
            }
        },
        watch:{
            data(){

            }
        },
        methods:{
            deleteAll(){
                this.data.list=[];
            },
            viewFrom(){
                this.formViewVisible = true
            },
            jsonView(){
                this.jsonViewVisible = true
            }
        }
    }
</script>

<style scoped>

</style>
