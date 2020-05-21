<template>
    <el-form
      label-width="80px"
      :model="config"
      class="control-config-form"
      label-position="top"
      size="mini"
    >
        <el-button
          type="primary"
          icon="el-icon-s-unfold"
          class="shrink-button"
          @click="handleShrink"
        />
        <el-form-item label="标签" v-if="config.hasOwnProperty('label')">
          <el-input v-model="config.label"></el-input>
        </el-form-item>
        <el-divider v-if="config.hasOwnProperty('model')"/>
        <el-form-item v-if="config.hasOwnProperty('model')" label="数据字段">
          <el-input v-model="config.model"></el-input>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('width')" />
        <el-form-item v-if="config.options.hasOwnProperty('width')" label="宽度">
          <div class="block">
            <el-slider
              v-model="config.options.width"
              :min="config.options.minWidth"
              show-input>
            </el-slider>
          </div>
        </el-form-item>
        <el-form-item v-if="config.options.hasOwnProperty('height')" label="高度">
          <div class="block">
            <el-slider
              v-model="config.options.height"
              :min="3"
              :max="7"
              show-input>
            </el-slider>
          </div>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('options')"/>
        <el-form-item label="下拉框数据" v-if="config.options.hasOwnProperty('options')" >
          <el-radio-group v-model="radio"  >
            <el-radio-button label="1" >静态数据</el-radio-button>
            <el-radio-button label="2" >动态数据</el-radio-button>
          </el-radio-group>
          <TOptionAdd v-model="config.options.options" v-if="radio==='1'"/>
          <el-input style="margin-top: 10px" v-else v-model="config.options.dynamicKey" placeholder="请输入动态数据地址"></el-input>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('chooseMax')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('chooseMax')" label="最多可选数">
          <el-input-number
            v-model="config.options.chooseMax"
            :min="0"
            :max="config.options.options.length"
          />
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('chooseMin')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('chooseMin')" label="最少可选数">
          <el-input-number
            v-model="config.options.chooseMin"
            :min="0"
            :max="config.options.options.length-1"
          />
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('defaultValue')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('defaultValue')&&!config.options.hasOwnProperty('rangeDefaultValue')" :label="config.type==='number'?'默认值(必须为数字)':'默认值'">
          <el-input v-model="config.options.defaultValue"></el-input>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('min')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('min')" label="最小值">
          <el-input-number v-model="config.options.min" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('max')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('max')" label="最大值">
          <el-input-number v-model="config.options.max" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('precision')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('precision')" label="精度(小数位数)">
          <el-input-number v-model="config.options.precision" :min="0"></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('step')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('step')" label="步数">
          <el-input-number v-model="config.options.step" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('placeholder')"></el-divider>
        <el-form-item label="提示信息" v-if="config.options.hasOwnProperty('placeholder')">
          <el-input v-model="config.options.placeholder"></el-input>
        </el-form-item>
        <el-divider v-if="showCheckbox"></el-divider>
        <el-form-item label="操作" v-if="showCheckbox">
          <el-checkbox v-model="config.options.disabled" v-if="config.options.hasOwnProperty('disabled')">禁用</el-checkbox>
          <el-checkbox v-model="config.options.hidden" v-if="config.options.hasOwnProperty('hidden')">隐藏</el-checkbox>
          <el-checkbox v-model="config.options.clearable" v-if="config.options.hasOwnProperty('clearable')">可清除</el-checkbox>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="校验规则">
          <el-checkbox v-model="config.rules[0].required">必填项</el-checkbox>
        </el-form-item>
    </el-form>
</template>

<script>
  import TOptionAdd from '../tOptionAdd'
    export default {
        name: "tFormControlConfig",
        components:{TOptionAdd},
        props:{
            config:{
                type: Object,
                required: true
            },
        },
        data(){
            return{
                radio:'1',
            }
        },
        // watch:{
        //     config:{
        //         handler(){
        //             if(this.config.options.options.length<this.config.options.chooseMax){
        //                 this.config.options.chooseMax = this.config.options.options.length
        //                 console.log(this.config.options.chooseMax)
        //             }
        //         },
        //         deep:true,
        //         immediate:true
        //     },
        // },
        computed:{
            showCheckbox(){
                const options = this.config.options;
                return options.hasOwnProperty('clearable') || options.hasOwnProperty('hidden') || options.hasOwnProperty('disabled');
            }
        },
        methods:{
            addModel(){
                // this.$emit('addModel')
            },
            handleShrink(){
                this.$emit('shrink')
            }
        }
    }
</script>

<style scoped>

</style>
