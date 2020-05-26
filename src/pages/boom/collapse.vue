<template>
    <div>
      <el-collapse  v-for="(item, i) in boomConfig" :key="i">
        <el-collapse-item :title="item.name" :name="item.id" style="padding-left: 20px">
          <el-row :gutter="5">
            <el-col :span="6">
              <el-form-item label="需求量">
                <el-input
                  disabled
                  v-model="item.needNumber"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="库存">
                <el-input
                  disabled
                  v-model="item.haveNumber"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="过投量">
                <el-input-number
                  style="width: 100%"
                  :min="0"
                  v-model="item.putNumber"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="使用量">
                <MyInput
                  :value="item.madeNumber"
                  @input="handleValueChange"
                  :item="item"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <template v-if="item.children">
            <collapse :boom-config="item.children"></collapse>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
  import MyInput from "./myInput";
    export default {
        name: "collapse",
        components:{MyInput},
        props:{
            boomConfig:{
                type: Array
            }
        },
        methods:{
            handleValueChange(value,item){
                item.madeNumber = value.target.value;
                if (item.children){
                    item.children.forEach((items,i)=>{
                        items.needNumber = (item.needNumber-item.madeNumber)*items.coefficient
                    })
                }
                if(item.madeNumber>item.needNumber){
                    console.log(1)
                    item.madeNumber = item.needNumber
                    console.log(item.madeNumber)
                }
            }
        },
        data(){
            return{
                activeName:"1"
            }
        },
    }
</script>
