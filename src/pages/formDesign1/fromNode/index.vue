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
      disabled
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
        v-for="items in item.options.options"
        :key="items.value"
        :label="items.label"
        :value="items.value">
      </el-option>
    </el-select>
    <el-checkbox-group
      v-if="item.type === 'checkbox'"
      v-model="item.options.checkboxDefaultValue"
      :min="item.options.chooseMin"
      :max="item.options.chooseMax">
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
      v-if="item.type === 'date'"
      :style="'width:'+item.options.width+'%'"
      :type="item.options.isChooseTimes?'daterange':'date'"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :placeholder="item.options.isChooseTimes?'':item.options.placeholder"
      >
    </el-date-picker>
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
        }
    }
</script>
