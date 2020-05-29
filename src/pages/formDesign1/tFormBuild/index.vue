<template>
    <div style="width: 100%; max-height: 600px; overflow-y: auto; overflow-x: hidden">
      <el-form
        :label-position="formOptions.config.labelPosition"
        class="finalForm"
      >
        <FinalForm
          v-for="(item, i) in formOptions.list"
          :item="item"
          :layout="formOptions.config"
          :key="i"
          :formData="formData"
        />
      </el-form>
    </div>
</template>

<script>
  import FinalForm from "./finalForm"
  import ('../../../../styles/T-form-build.less')
    export default {
        name: "index",
        components:{FinalForm},
        props:{
            options:{
                type:Object,
                required: true
            },
            defaultValue:{
                type: Object,
                default: ()=>{}
            }
        },
        data(){
            return{
                formData:{},
                formOptions: JSON.parse(JSON.stringify(this.options))
            }
        },
        created() {
            //根据模板formOptions映射出formData给予form组件进行数据联动
            const mapFormData = (formData ,array)=>{
                array.forEach((item,i) =>{
                   if(item.model){
                       if (item.type ==="number"||item.type ==="slider"){
                           formData[item.model] = item.options.numberDefaultValue
                       }else if (item.type === "checkbox"){
                           formData[item.model] = item.options.checkboxDefaultValue
                       }else if (item.type === "date"){
                           if (item.options.isChooseTimes === "1"){
                               formData[item.model] = item.options.defaultValue
                           }else {
                               formData[item.model] = item.options.rangeDefaultValue
                           }
                       }else if (item.type === "uploadImg"||item.type === "uploadFile"){
                           formData[item.model] = item.options.uploadDefaultValue
                       }else if (item.type === "switch"){
                           formData[item.model] = item.options.switchValue
                       }else if (item.type === "childTable"){
                           formData[item.model] = []
                       }else {
                           formData[item.model] = item.options.defaultValue
                       }
                   }else if (item.type === "grid"){
                       //处理格栅布局
                       item.columns.forEach((item,i) =>{
                           mapFormData(formData, item.list)
                       })
                   }else if (item.type === "card"){
                       //处理卡片布局
                       mapFormData(formData, item.list)
                   }
                });
                return formData
            };
            this.formData = mapFormData(this.formData,this.formOptions.list);
        },
    }
</script>

<style scoped>

</style>
