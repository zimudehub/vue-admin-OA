<template>
  <ul class="echarts-table">
    <div class="block">
    </div>
    <h4 style="text-align: left">周工作效率排名</h4>
    <li>
      <span>1</span>
      <span>李津宇</span>
      <span>25.63%</span>
    </li>
    <li>
      <span>2</span>
      <span>王健盟</span>
      <span>25.63%</span>
    </li>
    <li>
      <span>3</span>
      <span>谭成多</span>
      <span>25.63%</span>
    </li>
    <li>
      <span>4</span>
      <span>王石</span>
      <span>25.63%</span>
    </li>
    <li>
      <span>5</span>
      <span>萧崇清</span>
      <span>25.63%</span>
    </li>
    <li>
      <span>6</span>
      <span>徐浪</span>
      <span>25.63%</span>
    </li>
  </ul>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
  .echarts-table{
    padding: 0;
    height: 90%;
    width: 70%;
    list-style: none;
    color: rgba(0,0,0,0.7);
    font-size: 14px;
    margin: auto;
  }
  .echarts-table li{
    width: 100%;
    margin-top: 25px;
    text-align: center;
  }
  .echarts-table li span:nth-of-type(1){
    float: left;
    height: 20px;
    width: 20px;
    border-radius: 100px;
    background-color: #f3f5f7;
  }
  .echarts-table li span:nth-of-type(3){
    float: right;
  }
</style>
