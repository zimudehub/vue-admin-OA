<template>
  <div
    @click="$emit('emitClick')"
  >
    <transition-group tag="div" name="line" >
      <div :class="selectIndex === i?'top-line top-line-bg':'top-line'"  :key="1 + item.key">
        <el-button
          v-if="selectIndex===i"
          type="primary"
          icon="el-icon-delete"
          @click="deleteItem"
        />
      </div>>
    </transition-group>
    <el-form-item
      :label="item.options.hidden?'':item.label"
      :class="selectIndex === i?'form-wrap form-wrap-select':'form-wrap'"
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
      <p id="control-key">{{item.key}}</p>
    </el-form-item>
  </div>
</template>

<script>
    export default {
        name: "tFormTemplate",
        props:{
            item:{
                type: Object,
                default:()=>{},
                required: true
            },
            i:{
                type: Number,
                required:true
            },
            selectIndex:{
                required:true
            }
        },
        methods:{
            deleteItem(){
              this.$emit('deleteItem')
            }
        }
    }
</script>

<style scoped>
  #control-key{
    position: absolute;
    padding: 0;
    margin: 0;
    width: 120px;
    height: 14px;
    font-size: 12px;
    color: black;
    line-height: 14px;
    /*top: 42px;*/
    right: -25px;
  }
</style>
