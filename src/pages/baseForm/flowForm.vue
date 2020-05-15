<template>
    <div>
      <el-card class="box-card" style="width: 100%">
        <div slot="header" class="clearfix">
          <span>分步表单</span>
        </div>
        <div  class="text ">
          将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
        </div>
      </el-card>
      <el-card class="box-card" style="width: 100%; margin-top: 6px">
        <div  style="height: 900px">
          将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "flowForm"
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
