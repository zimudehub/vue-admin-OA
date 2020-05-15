<template>
  <el-card class="box-card">
    <div id="k-form-wrap">
<!--      控件按钮栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside class="button-wrap">
        <ControlList
          @start=""
          :baseArray="baseArray"
          @generate="generate"
        />
      </aside>
<!--      中间控件展示栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <section style="height: 900px; overflow: hidden" class="k-form-main" >
        <div style="height: 40px; width: 100%; border-bottom: 3px solid #edeff1; "></div>
        <el-scrollbar style="height: 800px; width: 100%;" >
          <ContentFormTemplate
            :baseArray="baseArray"
          />
        </el-scrollbar>
      </section>
<!--      属性栏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <aside style="height: 900px" class="test-right props-div">
        <div class="control-props">表单/控件属性</div>
      </aside>
    </div>
  </el-card>
</template>

<script>
    import {baseList} from './baseConfig'
    import ContentFormTemplate from './contentFormTemplate'
    import ControlList from './controlList'
    export default {
        name: "index",
        components: {ControlList, ContentFormTemplate},
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
        updated() {

        },
        computed:{
            baseArray(){
                //计算返回传入子组件的值
                return baseList.filter((item)=>this.baseList.includes(item.type))
            }
        },
        methods: {
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
            deepClone(e){

            }

        }
    }
</script>

<style scoped>


  .wrapper{

  }
  #k-form-wrap{
    max-width: 100%;
    display: flex;
    flex-direction: row;
  }
  .button-wrap{
    width: 300px;
  }
  .k-form-main{
    flex: 1 0 auto;
  }
  .props-div{
    width: 300px;
  }
  .test-right{
    border-left: 5px solid #edeff1;
  }
  .item{
    padding: 15px 0 0 0;
    width: 100%;
    color: black;
  }
  .control-props{
    width: 100%;
    height: 30px;
    border-bottom: 3px solid #edeff1;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: black;
    font-weight: 600;
  }
</style>
