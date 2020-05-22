<template>
  <el-form-item
    :label="item.options.hidden?'':item.label"
    :required="item.rules[0].required"
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
      v-model="item.options.defaultValue"
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
      <el-button size="small" type="primary">{{item.options.buttonText}}</el-button>
      <div slot="tip" class="el-upload__tip">{{item.options.warnText}}</div>
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
    <el-dialog :visible.sync="item.options.dialogVisible">
      <img width="100%" :src="item.options.dialogImageUrl" alt="">
    </el-dialog>
    <p id="control-key">{{item.key}}</p>
  </el-form-item>
</template>

<script>
    export default {
        name: "formNode",
        props:{
            item:{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ],
            };
        },
        methods:{

        }
    }
</script>
