<template>
  <transition name="fade">
  <el-row :gutter="0" style="width: 100%">
    <el-col :span="17">
      <el-card class="box-card" style="width: 100%">
        <div id="home-echarts" ></div>
      </el-card>
    </el-col>
    <el-col :span="7">
      <el-card class="box-card" body-style=" text-align:center">
        <div style="height: 385px; padding: 15px 0 0">
          <el-date-picker
            size="mini"
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <Table/>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </transition>
</template>

<script>
    import echarts from 'echarts';
    import Table from './tableMessage';
    import debounce from "../../../../utils/debounce";
    export default {
        name: "index",
        components:{ Table },
        mounted: function () {
            const _this = this;
            _this.$echarts = echarts.init(document.getElementById('home-echarts'));
            _this.$echarts.setOption(_this.options);
            window.addEventListener('resize', _this.resizeHandler);
        },
        beforeDestroy() { // 清理工作 避免内存泄漏
            // 销毁监听事件
            const _this = this;
            window.removeEventListener('resize', _this.resizeHandler);
            // 销毁 Echarts 实例
            this.$echarts.dispose()
        },
        data(){
            return{
                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                options :{
                    title: {
                        text: '富士电机部门效率总览',
                        padding:[5,0,0,95]
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x:95,
                        y:30,
                        data:['切片部','打模部','焊接部']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            magicType: {show: true, type: ['stack', 'tiled']},
                            saveAsImage: {show: true}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis:[
                        {
                            splitLine:{
                                show:true  ,
                                lineStyle:{
                                    width: 1,
                                    type:"dashed"
                                }
                            }
                        },
                    ],
                    series: [{
                        name: '切片部',
                        type: 'line',
                        smooth: true,
                        data: [10, 12, 21, 54, 260, 830, 710]
                        },
                        {
                            name: '打模部',
                            type: 'line',
                            smooth: true,
                            data: [30, 182, 434, 791, 390, 30, 10]
                        },
                        {
                            name: '焊接部',
                            type: 'line',
                            smooth: true,
                            data: [1320, 1132, 601, 234, 120, 90, 20]
                        },
                        {
                            type: 'bar',
                            color:'#409eff',
                            barWidth : 50,
                            data: [50, 70, 120, 210, 260, 830, 710]
                        },
                        {
                            type: 'pie',
                            center:['65%',60],
                            radius:35,
                            data: [
                                {name:'王石',value:10},
                                {name:'谭成多',value:20},
                                {name:'王健盟',value:20},
                                {name:'萧崇清',value:15},
                                {name:'徐浪',value:5},
                                {name:'李津宇',value:25 }
                            ]
                        },
                    ]
                },
            }
        },
        methods: {
            resizeHandler() {
                this.$echarts.resize()
            },
        }
    }
</script>

<style scoped>
  #home-echarts{
    margin: auto;
    height: 400px;
    width: 800px
  }

</style>
