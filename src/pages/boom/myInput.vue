<template>
    <div style="position: relative; font-size: 14px; display: inline-block; width: 100%;">
      <input
        type="text"
        :value="value"
        autocomplete="auto"
        class="myInput"
        @input="h"
        @keyup="n"
        @blur="h"
      >
    </div>
</template>

<script>
    export default {
        name: "myInput",
        props:{
            value:{

            },
            item:{
                type: Object,
                required: true
            }
        },
        methods:{
            n(e){
                e.target.value =  e.target.value.replace(/[^\d]/g,'')
                this.$emit('keyup',e.target.value, this.item)
            },
            h(e){
                e.target.value = e.target.value.replace(/[^\d]/g,'');
                if(e.target.value>this.item.needNumber){
                    e.target.value = this.item.needNumber
                }
                this.$emit("input", e, this.item)
            }
        }
    }
</script>

<style lang="less" scoped>
.myInput{
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
</style>
