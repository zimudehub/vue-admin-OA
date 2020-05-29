<template>
  <div>
<!--    格栅布局-->
    <template v-if="item.type ==='grid'">
      <div class="form-build-grid">
        <el-row
          :gutter="item.options.gutter"
        >
          <el-col
            v-for="(column, i) in item.columns"
            :span="column.span"
            :key="i"
          >
            <FinalForm
              v-for="(item, i) in column.list"
              :item="item"
              :layout="layout"
              :key="i"
              :formData="formData"
            />
          </el-col>
        </el-row>
      </div>
    </template>
<!--    格栅布局结束-->
<!--    子表-->
    <template v-else-if="item.type === 'childTable'">
      <div>{{item.type}}</div>
    </template>
<!--    子表结束-->
<!--    卡片布局-->
    <template v-else-if="item.type === 'card'">
      <div>
        <el-card class="card-layout" >
          <div slot="header" >
            <span>{{item.label}}</span>
          </div>
          <div>
            <FinalForm
              v-for="(items, i) in item.list"
              :item="items"
              :layout="layout"
              :key="i"
              :formData="formData"
            />
          </div>
        </el-card>
      </div>
    </template>
<!--    卡片布局结束-->
    <template v-else>
     <el-form-item
       :label="item.options.hidden||item.type==='tMKeditor'||isLabel?'':item.label"
       :required="item.rules?item.rules[0].required:false"
       :label-width="item.type==='tMKeditor'||isLabel?'0px':layout.labelWidth+'%'"
       :style="item.type==='tMKeditor'?'overflow:hidden':''"
     >
       <el-input
         v-if="item.type === 'input'"
         :placeholder="item.options.placeholder"
         :style="'width:'+item.options.width+'%'"
         v-model="item.options.defaultValue"
         :type="item.options.hidden?'hidden':'input'"
         :disabled="item.options.disabled"
         v-bind="{
                clearable:item.options.clearable,
              }"
       />
       <el-input
         v-if="item.type === 'text'"
         :placeholder="item.options.placeholder"
         :style="'width:'+item.options.width+'%'"
         v-model="item.options.defaultValue"
         :type="item.options.hidden?'hidden':'textarea'"
         :rows="item.options.height"
         :disabled="item.options.disabled"
         v-bind="{
                clearable:item.options.clearable,
              }"
       />
       <el-input-number
         v-if="item.type === 'number'"
         v-model="item.options.numberDefaultValue"
         :step="item.options.step"
         :style="'width:'+item.options.width+'%'"
         :min="item.options.min"
         :max="item.options.max"
         :precision="item.options.precision"
         :disabled="item.options.disabled"
       />
       <el-select
         v-if="item.type === 'select'"
         v-model="item.options.defaultValue"
         :placeholder="item.options.placeholder"
         :style="'width:'+item.options.width+'%'"
         :disabled="item.options.disabled"
         :clearable="item.options.clearable"
       >
         <el-option
           v-for="(items,index) in item.options.options"
           :key="items.index"
           :label="items.label"
           :value="items.value">
         </el-option>
       </el-select>
       <el-checkbox-group
         v-if="item.type === 'checkbox'"
         v-model="item.options.checkboxDefaultValue"
         :min="item.options.chooseMin"
         :max="item.options.chooseMax"
         :disabled="item.options.disabled"
       >
         <el-checkbox v-for="(items, i) in item.options.options" :label="items.value" :key="i">{{items.label}}</el-checkbox>
       </el-checkbox-group>
       <el-radio-group
         v-if="item.type === 'radio'"
         v-model="item.options.defaultValue"
         :disabled="item.options.disabled"
       >
         <el-radio
           v-for="(items, index) in item.options.options"
           :label="items.value"
           :key="index"
         >
           {{items.label}}
         </el-radio>
       </el-radio-group>
       <el-date-picker
         v-if="item.type === 'date'&&item.options.isChooseTimes==='2'"
         v-model="item.options.rangeDefaultValue"
         :style="'width:'+item.options.width+'%'"
         :type="item.options.isChooseTimes?'daterange':'date'"
         :range-separator="item.options.rangeSeparator"
         :start-placeholder="item.options.startPlaceholder"
         :end-placeholder="item.options.endPlaceholder"
         :disabled="item.options.disabled"
         :placeholder="item.options.isChooseTimes==='2'?'':item.options.placeholder"
       />
       <el-date-picker
         v-if="item.type === 'date'&&item.options.isChooseTimes==='1'"
         v-model="item.options.defaultValue"
         :style="'width:'+item.options.width+'%'"
         type="date"
         :placeholder="item.options.placeholder"
         :format="item.options.format"
         :value-format="item.options.valueFormat"
         :disabled="item.options.disabled"
       />
       <el-time-picker
         v-if="item.type === 'time'"
         :style="'width:'+item.options.width+'%'"
         :is-range="item.options.isChooseTimes==='2'"
         v-model="item.options.defaultValue"
         :range-separator="item.options.rangeSeparator"
         :start-placeholder="item.options.startPlaceholder"
         :end-placeholder="item.options.endPlaceholder"
         :placeholder="item.options.isChooseTimes==='2'?'':item.options.placeholder"
         :disabled="item.options.disabled"
       />
       <el-upload
         v-if="item.type === 'uploadFile'"
         :style="'width:'+item.options.width+'%'"
         class="upload-demo"
         :action="item.options.action"
         :multiple="item.options.multiple"
         :limit="item.options.limit"
         :disabled="item.options.disabled"
         :file-list="item.options.uploadDefaultValue"
       >
         <el-button size="small" type="primary">{{ item.options.buttonText }}</el-button>
         <div slot="tip" class="el-upload__tip">{{ item.options.warnText }}</div>
       </el-upload>
       <el-upload
         v-if="item.type === 'uploadImg'"
         :action="item.options.action"
         :multiple="item.options.multiple"
         :limit="item.options.limit"
         :list-type="item.options.listType"
         :disabled="item.options.disabled"
       >
         <i class="el-icon-plus"></i>
       </el-upload>
       <div
         v-if="item.type === 'super'"
       >
         <a
           :href="'https://'+item.options.url"
           target="_blank"
         >
           {{item.options.defaultValue}}
         </a>
       </div>
       <el-divider
         v-if="item.type === 'divider'"
         content-position="left"
       >
         布局控件
       </el-divider>
       <TMKeditor
         v-if="item.type==='tMKeditor'"
         ref="KEditor"
         :style="`width:${item.options.width}%`"
         :record="item"
         :disabled="true"
       />
       <el-switch
         v-if="item.type === 'switch'"
         v-model="item.options.switchValue"
         :active-text="item.options.activeText"
         :inactive-text="item.options.inactiveText"
         :disabled="item.options.disabled"
       />
       <div class="block"
            v-if="item.type === 'slider'"
       >
         <el-slider
           v-model="item.options.numberDefaultValue"
           :disabled="item.options.disabled"
           :show-input="item.options.showInput"
           :step="item.options.step"
         />
       </div>
       <div
         v-if="item.type==='p'"
         :style="'width:'+item.options.width+'%; margin: 0; padding: 0; line-height: 20px; '"
         v-text="item.label"
       />
     </el-form-item>
    </template>
  </div>
</template>

<script>
    export default {
        name: "FinalForm",
        props:{
            typeList:{
                type: Array,
                default: ()=>[
                    "button",
                    "divider",
                    "card",
                    "grid",
                    "table",
                    "alert",
                    "html",
                    "p",
                    "divider"
                ]
            },
            formData:{
                type: Object,
                required: true
            },
            item:{
                type: Object,
                required: true
            },
            layout:{
                type: Object,
                required: true
            }
        },
        computed:{
            isLabel(){
                //判断是否是需要label的Node
                return this.typeList.includes(this.item.type);
            },
        },
    }
</script>
