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
      <el-table
        class="form-build-childTable"
        :data="formData[item.model]"
        border
        style="width: 100%">
        <el-table-column
          v-for="(column,i) in item.list"
          :key="i"
          :label="column.label"
          min-width="170">
          <template slot-scope="scope">
            <el-input
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'input'"
              :placeholder="column.options.placeholder"
              :style="'width:'+column.options.width+'%'"
              :defaultValue="column.options.defaultValue"
              :type="column.options.hidden?'hidden':'input'"
              :disabled="column.options.disabled"
              v-bind="{
                clearable:column.options.clearable,
              }"
            />
            <el-input
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'text'"
              :placeholder="column.options.placeholder"
              :style="'width:'+column.options.width+'%'"
              :defaultValue="column.options.defaultValue"
              :type="column.options.hidden?'hidden':'textarea'"
              :rows="column.options.height"
              :disabled="column.options.disabled"
              v-bind="{
                clearable:column.options.clearable,
              }"
            />
            <el-input-number
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'number'"
              :defaultValue="column.options.numberDefaultValue"
              :step="column.options.step"
              :style="'width:'+column.options.width+'%'"
              :min="column.options.min"
              :max="column.options.max"
              :precision="column.options.precision"
              :disabled="column.options.disabled"
            />
            <el-select
              v-if="column.type === 'select'"
              :defaultValue="column.options.defaultValue"
              :placeholder="column.options.placeholder"
              :style="'width:'+column.options.width+'%'"
              :disabled="column.options.disabled"
              :clearable="column.options.clearable"
            >
              <el-option
                v-for="(items,index) in column.options.options"
                :key="items.index"
                :label="items.label"
                :value="items.value">
              </el-option>
            </el-select>
            <el-checkbox-group
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'checkbox'"
              :defaultValue="column.options.checkboxDefaultValue"
              :min="column.options.chooseMin"
              :max="column.options.chooseMax"
              :disabled="column.options.disabled"
            >
              <el-checkbox v-for="(items, i) in column.options.options" :label="items.value" :key="i">{{items.label}}</el-checkbox>
            </el-checkbox-group>
            <el-radio-group
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'radio'"
              :defaultValue="column.options.defaultValue"
              :disabled="column.options.disabled"
            >
              <el-radio
                v-for="(items, index) in column.options.options"
                :label="items.value"
                :key="index"
              >
                {{items.label}}
              </el-radio>
            </el-radio-group>
            <el-date-picker
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'date'&&column.options.isChooseTimes==='2'"
              :defaultValue="column.options.rangeDefaultValue"
              :style="'width:'+column.options.width+'%'"
              :type="column.options.isChooseTimes?'daterange':'date'"
              :range-separator="column.options.rangeSeparator"
              :start-placeholder="column.options.startPlaceholder"
              :end-placeholder="column.options.endPlaceholder"
              :disabled="column.options.disabled"
              :placeholder="column.options.isChooseTimes==='2'?'':column.options.placeholder"
            />
            <el-date-picker
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'date'&&column.options.isChooseTimes==='1'"
              :defaultValue="column.options.defaultValue"
              :style="'width:'+column.options.width+'%'"
              type="date"
              :placeholder="column.options.placeholder"
              :format="column.options.format"
              :value-format="column.options.valueFormat"
              :disabled="column.options.disabled"
            />
            <el-time-picker
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'time'"
              :style="'width:'+column.options.width+'%'"
              :is-range="column.options.isChooseTimes==='2'"
              :defaultValue="column.options.defaultValue"
              :range-separator="column.options.rangeSeparator"
              :start-placeholder="column.options.startPlaceholder"
              :end-placeholder="column.options.endPlaceholder"
              :placeholder="column.options.isChooseTimes==='2'?'':column.options.placeholder"
              :disabled="column.options.disabled"
            />
            <el-upload

              v-if="column.type === 'uploadFile'"
              :style="'width:'+column.options.width+'%'"
              class="upload-demo"
              :action="column.options.action"
              :multiple="column.options.multiple"
              :limit="column.options.limit"
              :disabled="column.options.disabled"
              :file-list="column.options.uploadDefaultValue"
            >
              <el-button size="small" type="primary">{{ column.options.buttonText }}</el-button>
              <div slot="tip" class="el-upload__tip">{{ column.options.warnText }}</div>
            </el-upload>
            <el-upload
              v-if="column.type === 'uploadImg'"
              :action="column.options.action"
              :multiple="column.options.multiple"
              :limit="column.options.limit"
              :list-type="column.options.listType"
              :disabled="column.options.disabled"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-switch
              v-model="formData[item.model][scope.$index][column.model]"
              v-if="column.type === 'switch'"
              :defaultValue="column.options.switchValue"
              :active-text="column.options.activeText"
              :inactive-text="column.options.inactiveText"
              :disabled="column.options.disabled"
            />
            <div class="block"
                 v-if="column.type === 'slider'"
            >
              <el-slider
                v-model="formData[item.model][scope.$index][column.model]"
                :defaultValue="column.options.numberDefaultValue"
                :disabled="column.options.disabled"
                :show-input="column.options.showInput"
                :step="column.options.step"
              />
            </div>
            <div
              v-if="column.type==='p'"
              :style="'width:'+column.options.width+'%; margin: 0; padding: 0; line-height: 20px; '"
              v-text="column.label"
            />
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-minus"
              circle
              class="table-button"
              @click="handleDelete(scope.$index, formData[item.model], item.model)"
            />
            <el-button
              icon="el-icon-plus"
              circle
              class="table-button"
              @click="handleAdd(scope.$index,formData[item.model])"
            />
          </template>
        </el-table-column>
      </el-table>
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
       :prop="item.model"
       :label="item.options.hidden||item.type==='tMKeditor'||isLabel?'':item.label"
       :required="item.rules?item.rules[0].required:false"
       :label-width="item.type==='tMKeditor'||isLabel?'0px':layout.labelWidth+'%'"
       :style="item.type==='tMKeditor'?'overflow:hidden':''"
     >
<!--       :rules="[-->
<!--       ...item.rules.map((item,i)=>{-->
<!--       {}-->
<!--       })-->
<!--       ]"-->
       <el-input
         v-if="item.type === 'input'"
         :placeholder="item.options.placeholder"
         :style="'width:'+item.options.width+'%'"
         :defaultValue="item.options.defaultValue"
         v-model="formData[item.model]"
         :type="item.options.hidden?'hidden':'input'"
         :disabled="item.options.disabled"
         v-bind="{
                clearable:item.options.clearable,
              }"
       />
       <el-input
         v-model="formData[item.model]"
         v-if="item.type === 'text'"
         :placeholder="item.options.placeholder"
         :style="'width:'+item.options.width+'%'"
         :defaultValue="item.options.defaultValue"
         :type="item.options.hidden?'hidden':'textarea'"
         :rows="item.options.height"
         :disabled="item.options.disabled"
         v-bind="{
                clearable:item.options.clearable,
              }"
       />
       <el-input-number
         v-model="formData[item.model]"
         v-if="item.type === 'number'"
         :defaultValue="item.options.numberDefaultValue"
         :step="item.options.step"
         :style="'width:'+item.options.width+'%'"
         :min="item.options.min"
         :max="item.options.max"
         :precision="item.options.precision"
         :disabled="item.options.disabled"
       />
       <el-select
         v-model="formData[item.model]"
         v-if="item.type === 'select'"
         :defaultValue="item.options.defaultValue"
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
         v-model="formData[item.model]"
         v-if="item.type === 'checkbox'"
         :defaultValue="item.options.checkboxDefaultValue"
         :min="item.options.chooseMin"
         :max="item.options.chooseMax"
         :disabled="item.options.disabled"
       >
         <el-checkbox v-for="(items, i) in item.options.options" :label="items.value" :key="i">{{items.label}}</el-checkbox>
       </el-checkbox-group>
       <el-radio-group
         v-model="formData[item.model]"
         v-if="item.type === 'radio'"
         :defaultValue="item.options.defaultValue"
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
         v-model="formData[item.model]"
         v-if="item.type === 'date'&&item.options.isChooseTimes==='2'"
         :defaultValue="item.options.rangeDefaultValue"
         :style="'width:'+item.options.width+'%'"
         :type="item.options.isChooseTimes?'daterange':'date'"
         :range-separator="item.options.rangeSeparator"
         :start-placeholder="item.options.startPlaceholder"
         :end-placeholder="item.options.endPlaceholder"
         :disabled="item.options.disabled"
         :placeholder="item.options.isChooseTimes==='2'?'':item.options.placeholder"
       />
       <el-date-picker
         v-model="formData[item.model]"
         v-if="item.type === 'date'&&item.options.isChooseTimes==='1'"
         :defaultValue="item.options.defaultValue"
         :style="'width:'+item.options.width+'%'"
         type="date"
         :placeholder="item.options.placeholder"
         :format="item.options.format"
         :value-format="item.options.valueFormat"
         :disabled="item.options.disabled"
       />
       <el-time-picker
         v-model="formData[item.model]"
         v-if="item.type === 'time'"
         :style="'width:'+item.options.width+'%'"
         :is-range="item.options.isChooseTimes==='2'"
         :defaultValue="item.options.defaultValue"
         :range-separator="item.options.rangeSeparator"
         :start-placeholder="item.options.startPlaceholder"
         :end-placeholder="item.options.endPlaceholder"
         :placeholder="item.options.isChooseTimes==='2'?'':item.options.placeholder"
         :disabled="item.options.disabled"
       />
       <el-upload
         v-model="formData[item.model]"
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
         v-model="formData[item.model]"
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
         v-model="formData[item.model]"
         v-if="item.type === 'switch'"
         :defaultValue="item.options.switchValue"
         :active-text="item.options.activeText"
         :inactive-text="item.options.inactiveText"
         :disabled="item.options.disabled"
       />
       <div class="block"
            v-if="item.type === 'slider'"
       >
         <el-slider
           v-model="formData[item.model]"
           :defaultValue="item.options.numberDefaultValue"
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
            childTableColumns:{
                type: Array,
                default: ()=>[]
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
        created(){
            // console.log(this.formData)
        },
        data(){
            return{

            }
        },
        computed:{
            isLabel(){
                //判断是否是需要label的Node
                return this.typeList.includes(this.item.type);
            },
        },
        methods:{
            handleAdd(index,array, model){
                let item = {};
                this.childTableColumns.forEach((child,i)=>{
                   if(model === child.model){
                       item = JSON.parse(JSON.stringify(child))
                   }
                });
                delete item.model;
                array.splice(index,0,item)

            },
            handleDelete(index,array) {
                if (array.length>1){
                    array.splice(index,1)
                }
            }
        }
    }
</script>
