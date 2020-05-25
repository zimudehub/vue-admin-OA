<template>
    <div>
      <el-input
        disabled
        :defaultValue="defaultValue"
      ><span>aaa</span></el-input>
      <el-button
        type="primary"
      >
        选择
      </el-button>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            data:{
                type: Object,
                default:()=>{},
            },
            value:{
                type: Array,
                default:()=>[],
            },
            fieldName:{
                type: String,
                default:"",
            },
            defaultValue:{
                type: Array,
                default:()=>[],
            }
        }
    }
</script>
