<template>
  <el-card class="box-card">
    <div id="T-form-wrap" ref="allWrap">
<!--      控件按钮栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside class="button-wrap" >
        <ControlList
          @start=""
          :baseArray="baseArray"
          :layoutList="layoutList"
          @generate="generate"
          @clickPushItem="clickPushItem"
        />
      </aside>
<!--      中间控件展示栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <section class="T-form-main" ref="contentWrap">
        <div class="content-top-button" >
          <el-tooltip class="item" effect="dark" content="保存" placement="top-start">
            <el-button icon="el-icon-document-checked" circle size="mini"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="预览" placement="top-start">
            <el-button icon="el-icon-view" circle size="mini" @click="view"></el-button>
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
        <div class="control-center-wrap">
          <ContentFormTemplate
            :data="data"
            @selectItemChange="selectItemChange"
            :selectItem="selectItem"
            @deleteItem="deleteItem"
            @choose="choose"
            @startChoose="startChoose"
          />
        </div>
        <transition name="form">
          <div  v-if="isShrink" class="right-template-form">
              <TFormControlConfig
                :config="selectItem"
                @shrink="shrink"
                @addModel="addModel"
              />
          </div>
        </transition>
      </section>
<!--      属性栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside  class="right-form-layout">
        <div class="control-props">表单/控件属性</div>
        <LayoutForm
          v-if="!isShrink"
          :layoutData="data.config"
        />
      </aside>
    </div>
  </el-card>
</template>

<script>
    import {baseList, layoutList} from './baseConfig'
    import ContentFormTemplate from './contentFormTemplate'
    import ControlList from './controlList'
    import LayoutForm from './leftAside'
    import TFormControlConfig from './tFormControlConfig'
    export default {
        name: "index",
        components: {ControlList, ContentFormTemplate, LayoutForm, TFormControlConfig},
        mounted(){
            //这里的代码为富文本编辑器服务,因为布局关系会导致富文本编辑器被拖入的时候造成页面被撑开,这里做监听
            this.$refs.contentWrap.style.width = this.$refs.allWrap.scrollWidth-640+"px";
            addEventListener('resize',()=>{
                this.$refs.contentWrap.style.width = this.$refs.allWrap.scrollWidth-640+"px"
            })
        },
        destroyed(){
            removeEventListener('resize',()=>{
                this.$refs.contentWrap.style.width = this.$refs.allWrap.scrollWidth-640+"px"
            })
        },
        props: {
            layoutBaseList:{
                type: Array,
                default: ()=>[
                    "divider",
                    "card",
                    "grid",
                    "table"
                ]
            },
            baseList: {
                type: Array,
                default: () => [
                    "input",
                    "text",
                    "number",
                    "select",
                    "checkbox",
                    "radio",
                    "date",
                    "time",
                    "uploadFile",
                    "uploadImg",
                    "tMKeditor",
                    "button",
                    "switch",
                    "slider",
                    "p",
                    "super",
                    "tipsWindow"
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
                    "p",
                    "html",
                    "super"
                ],
                isShrink:false,
                selectItem:{
                    key:""
                },//当前激活项
                data: {
                    list: [],
                    config: {
                        labelPosition: "top",
                        labelWidth: 15,
                        customWidth: ""
                    }
                },
            }
        },
        watch:{
            data:{
                //监听data.list如果没值将isShrink置为false,为操作栏中的清除按钮服务
                handler(newValue){
                    if (newValue.list.length===0){
                        this.isShrink = false
                    }
                },
                deep:true,
                immediate:true
            },
            selectItem:{
                //监听selectItem变化时将isShrink置为true,如果selectItem没有值置为false
                handler(newValue){
                    if (!newValue.hasOwnProperty('options')){
                        this.isShrink = false;
                        return
                    }
                    this.isShrink = true
                }
            }
        },
        computed:{
            isNumber(){
                //判断当前是否有选中selectIndex
                return typeof(this.selectIndex) === 'number'
            },
            layoutList(){
                //计算返回布局控件
                return layoutList.filter((item)=>this.layoutBaseList.includes(item.type))
            },
            baseArray(){
                //计算返回基础控件传入子组件的值
                return baseList.filter((item)=>this.baseList.includes(item.type))
            }
        },
        methods: {
            startChoose(i){
                this.selectItem = this.data.list[i]
            },
            choose(item){
                //拿到子组件传过来的激活项
                this.selectItem = item;
                this.isShrink = true
            },
            clickPushItem(list,i){
                let item = list[i];
                delete item.icon;
                if(this.noModel.includes(item.type)){
                    delete item.model
                }
                const key = item.type +"_"+new Date().getTime();
                this.$set(list,i,{
                    ...item,
                    key,
                    model:key
                });
                //给item做一个深克隆
                item = JSON.parse(JSON.stringify(list[i]));

                const putItem = array =>{
                    if (array.length ===0){
                        array.push(item);
                        this.selectItem = item;
                        return
                    }
                    array.forEach((child,i)=>{
                        if(child.key===this.selectItem.key){
                           array.splice(i+1,0,item)
                        }else if(this.selectItem.key===''){
                            array.push(item)
                        }
                    });
                };
                putItem(this.data.list);
                this.selectItem = item
            },
            deleteItem(){
                this.data.list.forEach((item,i)=>{
                    if (item.key === this.selectItem.key){
                        this.data.list.splice(i,1);
                        if (this.data.list.length===0){
                            this.selectItem = {key: ''};

                        }else if(this.data.list.length === i) {
                            this.selectItem = this.data.list[i-1]
                        }else {
                            this.selectItem = this.data.list[i]
                        }
                    }
                })
            },
            selectItemChange(item, i){
                this.$set(this.data.list,i, item
                );
                this.selectItem = item
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
                if(this.noModel.includes(item.type)){
                  delete list[i].model
                }
            },
            handleControlList(list){
            //    拿到左侧拖拽到操作框的控件类型
            },
            shrink(){
                this.isShrink = false
            },
            addModel(){
                this.selectItem.options.options.push({
                    value: "",
                    label: ""
                })
            },
            deleteAll(){
                this.data.list=[];
                this.selectIndex=""
            },
            view(){
                console.log(this.data.list)
            },
            deepClone(e){

            }

        }
    }
</script>
