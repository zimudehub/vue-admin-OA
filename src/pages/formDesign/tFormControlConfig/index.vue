<template>
    <el-form
      label-width="80px"
      :model="config"
      class="control-config-form"
      label-position="top"
      size="mini"
    >
      <el-scrollbar style="height: 730px; width: 100%;" >
        <el-button
          type="primary"
          icon="el-icon-s-unfold"
          class="shrink-button"
          @click="handleShrink"
        />
        <el-form-item label="标签">
          <el-input v-model="config.label"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item v-if="config.model" label="数据字段">
          <el-input v-model="config.model"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item v-if="config.options.width" label="宽度">
          <div class="block">
            <el-slider
              v-model="config.options.width"
              :min="config.options.minWidth"
              show-input>
            </el-slider>
          </div>
        </el-form-item>
        <el-form-item v-if="config.options.height" label="高度">
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
            <el-radio-button label="静态数据"></el-radio-button>
            <el-radio-button label="动态数据"></el-radio-button>
          </el-radio-group>
          <div style="margin-top: 8px" v-for="(item, i) in config.options.options">
            <el-input style="display: inline-block; width: 30%" v-model="item.label" placeholder="标签名"></el-input>
            <el-input style="display: inline-block; width: 30%" v-model="item.value" placeholder="值"></el-input>
          </div>
          <a href="#" @click="addModel">增加数据</a>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('defaultValue')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('defaultValue')" :label="config.type==='number'?'默认值(必须为数字)':'默认值'">
          <el-input v-model="config.options.defaultValue"></el-input>
        </el-form-item>
        <el-divider v-if="config.options.min"></el-divider>
        <el-form-item v-if="config.options.min" label="最小值">
          <el-input-number v-model="config.options.min" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.max"></el-divider>
        <el-form-item v-if="config.options.max" label="最大值">
          <el-input-number v-model="config.options.max" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('precision')"></el-divider>
        <el-form-item v-if="config.options.hasOwnProperty('precision')" label="精度(小数位数)">
          <el-input-number v-model="config.options.precision" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.step"></el-divider>
        <el-form-item v-if="config.options.step" label="步数">
          <el-input-number v-model="config.options.step" ></el-input-number>
        </el-form-item>
        <el-divider v-if="config.options.hasOwnProperty('placeholder')"></el-divider>
        <el-form-item label="提示信息" v-if="config.options.hasOwnProperty('placeholder')">
          <el-input v-model="config.options.placeholder"></el-input>
        </el-form-item>
        <el-divider v-if="showCheckbox"></el-divider>
        <el-form-item label="提示信息" v-if="showCheckbox">
          <el-checkbox v-model="config.options.disabled" v-if="config.options.hasOwnProperty('disabled')">禁用</el-checkbox>
          <el-checkbox v-model="config.options.hidden" v-if="config.options.hasOwnProperty('hidden')">隐藏</el-checkbox>
          <el-checkbox v-model="config.options.clearable" v-if="config.options.hasOwnProperty('clearable')">可清除</el-checkbox>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="校验规则">
          <el-checkbox v-model="config.rules[0].required">必填项</el-checkbox>
        </el-form-item>
        </el-scrollbar>
    </el-form>
</template>

<script>
    export default {
        name: "tFormControlConfig",
        props:{
            config:{
                type: Object,
                required: true
            },
            shrink:{
                type: Boolean,
                required: true
            }
        },
        data(){
            return{
                radio:""
            }
        },
        computed:{
            showCheckbox(){
                const options = this.config.options;
                return options.hasOwnProperty('clearable') || options.hasOwnProperty('hidden') || options.hasOwnProperty('disabled');
            }
        },
        methods:{
            addModel(){
                this.$emit('addModel')
            },
            handleShrink(){
                this.$emit('shrink')
            }
        }
    }
</script>

<style scoped>

</style>
