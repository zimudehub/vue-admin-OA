<template>
  <el-row :gutter="20" style="margin-bottom: 15px; ">
    <el-col :span="6">
      <el-card class="box-card" style="height: 210px; min-width: 250px">
        <p style="margin: 0 0 10px 0; color: rgba(0,0,0,.45);">总销售额</p>
        <div style="font-size: 25px">¥ 648,526,9</div>
        <div style="height: 65px; margin: 0; width: 100%; line-height: 65px">
          <span color="rgba(0,0,0,.65);">周同比</span>  12%  &nbsp;&nbsp;<span color="rgba(0,0,0,.65);">日同比</span> 11%
        </div>
        <div class="line"></div>
        <p style="margin: 0">日销售额&nbsp;&nbsp;&nbsp;&nbsp;¥ 62,563</p>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="height: 210px; min-width: 250px">
        <p style="margin: 0 0 10px 0; color: rgba(0,0,0,.45);">生产量</p>
        <div style="font-size: 25px">件 968,24</div>
        <div id="echarts-card-one" style="height: 65px; margin: 0; width: 100%"></div>
        <div class="line"></div>
        <p style="margin: 0">日生产量&nbsp;&nbsp;&nbsp;&nbsp;件 2,563</p>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="height: 210px; min-width: 250px">
        <p style="margin: 0 0 10px 0; color: rgba(0,0,0,.45);">计划进度</p>
        <div style="font-size: 25px">78&nbsp;%</div>
        <div id="echarts-card-two" style="height: 37px; margin: 0; width: 100%; padding-top: 28px">
          <el-progress :percentage="78" margin-top="28px"></el-progress>
        </div>
        <div class="line"></div>
        <p style="margin: 0">
          <span color="rgba(0,0,0,.65);">周同比</span>  12%  &nbsp;&nbsp;<span color="rgba(0,0,0,.65);">日同比</span> 11%
        </p>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="height: 210px; min-width: 250px">
        <p style="margin: 0 0 10px 0; color: rgba(0,0,0,.45);">投放监控</p>
        <div style="font-size: 25px">8,971</div>
        <div id="echarts-card-three" style="height: 65px; margin: 0; width: 100%"></div>
        <div class="line"></div>
        <p style="margin: 0">日总访问&nbsp;&nbsp;&nbsp;&nbsp; 8,971</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    import echarts from 'echarts';
    import debounce from "../../../../utils/debounce";
    export default {
        name: "index",
        methods: {
            resizeHandler(){
                this.$echartsCardone.resize();
                this.$echartsCardTwo.resize()
            }

        },
        mounted(){
            const _this = this;
            _this.$echartsCardone = echarts.init(document.getElementById('echarts-card-one'));
            _this.$echartsCardone.setOption(_this.optionsOne);
            _this.$echartsCardTwo = echarts.init(document.getElementById('echarts-card-three'));
            _this.$echartsCardTwo.setOption(_this.optionsTwo);
            window.addEventListener('resize', _this.resizeHandler)
        },
        beforeDestroy() { // 清理工作 避免内存泄漏
            // 销毁监听事件
            const _this = this;
            window.removeEventListener('resize', _this.resizeHandler);
            // 销毁 Echarts 实例
            this.$echartsCardone.dispose();
            this.$echartsCardTwo.dispose()
        },
        data(){
            return{
                optionsOne :{

                    xAxis: {
                        show:false,
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日',"1","1","1","1","1","1","1"]
                    },
                    yAxis:[
                        {
                            show:false,
                        },
                    ],
                    grid: {
                        left: '0%',
                    },
                    series: [
                        {
                            type: 'bar',
                            color:'#1890ff',
                            barWidth : 10,
                            data: [50, 70, 40, 80, 20, 25, 30, 25, 60, 50, 35,20, 55, 20]
                        },

                    ]
                },
                optionsTwo :{
                    xAxis: {
                        show:false,
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周五','周五','周五','周五',]
                    },
                    yAxis:[
                        {
                            show:false,
                        },
                    ],
                    grid: {
                        left: '-8%',
                    },
                    series : [
                        {
                            color:'#1890ff',
                            smooth:true,  //这个是把线变成曲线
                            symbol: 'none',
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: "#1890ff" },
                                        { offset: 0.8, color: "#1890ff" },
                                        { offset: 0, color: "#ffffff" },
                                    ])
                                }
                            }, //填充区域样式
                            type:'line',   //这个是展示数据的类型，是柱状图还是折线图，饼状图
                            data:[5,10,20,15,5,7,15,6,9]  //展示的数据
                        },
                    ]
                }
            }
        },

    }
</script>

<style scoped>
  .line{
    width: 90%;
    margin: 0 0 8px 0;
    border-top: 1px solid antiquewhite;
  }
</style>
