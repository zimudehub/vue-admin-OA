<template>
  <el-card class="box-card">
    <div id="T-form-wrap">
<!--      控件按钮栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside class="button-wrap">
        <ControlList
          @start=""
          :baseArray="baseArray"
          @generate="generate"
          @clickPushItem="clickPushItem"
        />
      </aside>
<!--      中间控件展示栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <section class="T-form-main" >
        <div class="content-top-button" >
          <el-tooltip class="item" effect="dark" content="保存" placement="top-start">
            <el-button icon="el-icon-document-checked" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="预览" placement="top-start">
            <el-button icon="el-icon-view" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="导入" placement="top-start">
            <el-button icon="el-icon-upload2" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="生成Json" placement="top-start">
            <el-button icon="el-icon-tickets" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="生成Html" placement="top-start">
            <el-button icon="el-icon-document" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="清空" placement="top-start">
            <el-button icon="el-icon-delete" circle size="mini" @click="deleteAll"></el-button>
          </el-tooltip>
        </div>
        <el-scrollbar style="height: 880px; width: 100%;" >
          <ContentFormTemplate
            :data="data"
            @selectIndexChange="selectIndexChange"
            :selectIndex="selectIndex"
          />
        </el-scrollbar>
        <div>
          <TFormControlConfig
            v-if="isNumber"
            :config="data.list.length===0?{}:data.list[selectIndex].options"
          />
        </div>
      </section>
<!--      属性栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside style="height: 900px" class="left-form-layout">
        <div class="control-props">表单/控件属性</div>
        <LayoutForm
          :layoutData="data.config"
        />
      </aside>
    </div>
  </el-card>
</template>

<script>
    import {baseList} from './baseConfig'
    import ContentFormTemplate from './contentFormTemplate'
    import ControlList from './controlList'
    import LayoutForm from './leftAside'
    import TFormControlConfig from './tFormControlConfig'
    export default {
        name: "index",
        components: {ControlList, ContentFormTemplate, LayoutForm, TFormControlConfig},
        props: {
            baseList: {
                type: Array,
                default: () => [
                    "input",
                    "text"
                ]
            }
        },
        data() {
            return {
                noModel: [
                    "button",
                    "divider",
                    "card",
                    "grid",
                    "table",
                    "alert",
                    "text",
                    "html"
                ],
                selectIndex:"",//被激活的项,全组件最关键的值,组件中大部分控件的显示与联动都是基于这个值的变化
                data: {
                    list: [],
                    config: {
                        layout: "horizontal",
                        labelCol: { span: 4 },
                        wrapperCol: { span: 18 },
                        hideRequiredMark: false,
                        customStyle: ""
                    }
                },
            }
        },
        computed:{
            isNumber(){
                return typeof(this.selectIndex) === 'number'
            },
            baseArray(){
                //计算返回传入子组件的值
                return baseList.filter((item)=>this.baseList.includes(item.type))
            }
        },
        methods: {
            clickPushItem(list,i){
                const item = list[i];
                const key = item.type +"_"+new Date().getTime();
                this.$set(list,i,{
                    ...item,
                    key,
                    model:key
                });
                if(!this.noModel.includes(item.type)){
                    delete item.model
                }
                //判断selectIndex是否有值,有值将点击项加入选中项前否则放到最后
                if (this.selectIndex){
                    this.data.list.splice(this.selectIndex+1,0,{
                        ...item,
                        key,
                        model:key
                    });
                    this.selectIndex = this.selectIndex+1
                }else{
                    this.data.list.push({
                        ...item,
                        key,
                        model:key
                    });
                    this.selectIndex = this.data.list.length-1
                }
            },
            selectIndexChange(value){
                this.selectIndex = value
            },
            generate(list,i){
                const item = list[i];
                //生成key
                const key = item.type +"_"+new Date().getTime();
                //把总线的list里的key赋值,并且让数据联动字段等于key
                this.$set(list,i,{
                    ...item,
                    key,
                    model:key
                });
                //删除不需要model属性的控件
                if(!this.noModel.includes(item.type)){
                  delete item.model
                }
            },
            handleControlList(list){
            //    拿到左侧拖拽到操作框的控件类型
            },
            deleteAll(){
                this.data.list=[];
                this.selectIndex=""
            },
            deepClone(e){

            }

        }
    }
</script>

<style scoped>
  #T-form-wrap{
    max-width: 100%;
    display: flex;
    flex-direction: row;
  }
  .button-wrap{
    width: 300px;
  }
</style>
