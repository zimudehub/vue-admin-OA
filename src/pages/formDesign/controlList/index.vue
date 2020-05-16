<template>
    <div style="height: 900px" class="test">
      <div class="control-button">控件选择</div>
<!--      <div class="button-wrap">-->
        <draggable
          tag="ul"
          :value="baseArray"
          class="button-wrap"
          v-bind="{
            group: { name: 'form-draggable', pull: 'clone', put: false },
            sort: false,
            animation: 180,
            ghostClass: 'leftMoving'
          }"
          @start="handleStart($event, baseArray)"
        >
          <li
            v-for="(val, index) in baseArray"
            :key="index"
            @dragstart="$emit('generate', baseArray, index)"
            @click="$emit('clickPushItem', baseArray, index)"
          >
              <i :class="val.icon"></i>
              {{ val.label }}
          </li>
        </draggable>
      <el-divider content-position="left">基础控件</el-divider>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    export default {
        name: "controlList",
        components:{
            draggable
        },
        props:["baseArray"],
        created(){
        },
        data(){
            return{

            }
        },
        methods:{
            handleStart(e, baseArray){

            }
        }
    }
</script>

<style scoped>
  .test{
    width: 100%;
    border-right: 5px solid #edeff1;
  }
  .control-button{
    width: 100%;
    height: 30px;
    border-bottom: 3px solid #edeff1;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: black;
    font-weight: 600;
  }
  .button-wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ul{
    padding: 0;
  }
  .leftMoving{
    list-style: none;
    text-align: left;
    width: 40%;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;
    margin: 0 0 6px 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px 12px 6px;
    font-size: 14px;
    border-radius: 4px;
  }
  .button-wrap>li{
    list-style: none;
    text-align: left;
    width: 40%;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;
    margin: 0 0 6px 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px 12px 6px;
    font-size: 14px;
    border-radius: 4px;
  }
</style>
