<template>
    <div style="height: 900px" class="test">
      <div class="control-button">控件选择</div>
<!--      <div class="button-wrap">-->
        <draggable
          tag="div"
          :value="baseArray"
          class="button-wrap"
          v-bind="{
            group: { name: 'form-draggable', pull: 'clone', put: false },
            sort: false,
            animation: 180,
            ghostClass: 'moving'
          }"
          @start="handleStart($event, baseArray)"
        >
          <el-button
            v-for="(val, index) in baseArray"
            :key="index"
          >
            <i :class="val.icon"></i>
            {{ val.label }}
          </el-button>
        </draggable>
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
  .button-wrap>button{
    text-align: left;
    padding-left: 6px;
    width: 40%;
    margin: 10px 0 0 0
  }
</style>
