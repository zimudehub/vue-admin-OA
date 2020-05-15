<template>
  <el-row :gutter="0" >
    <div id="loadingWrap">
      <el-card  ref="loadingWrap" class="box-card" style="height: 438px; background: url('~@/../static/loadingBg.png') center center no-repeat;">

      </el-card>
    </div>
  </el-row>
</template>

<script>
    export default {
        name: "loading",
        mounted() {
            const elm = document.getElementById("loadingWrap")
            this.$loading({target:elm})
        }
    }
</script>

<style scoped>

</style>
