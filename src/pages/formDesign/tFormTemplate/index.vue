<template>
  <div
    @click="$emit('emitClick')"
  >
    <transition-group tag="div" name="line" >
      <div :class="selectIndex === i?'top-line top-line-bg':'top-line'"  :key="1 + item.key"/>
    </transition-group>
    <el-form-item  :label="item.label"  :class="selectIndex === i?'form-wrap form-wrap-select':'form-wrap'">
      <el-input></el-input>
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
    top: 42px;
    right: -25px;
  }
</style>
