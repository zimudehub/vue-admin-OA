<template>
  <div style="width: 100%; height: 300px" id="echarts-model-one">

  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        methods: {
            resizeHandler(){
                this.$echartsModelOne.resize();
            }

        },
        mounted(){
            const _this = this;
            _this.$echartsModelOne = echarts.init(document.getElementById('echarts-model-one'));
            _this.$echartsModelOne.setOption(_this.options);
            window.addEventListener('resize', _this.resizeHandler)
        },
        beforeDestroy() { // 清理工作 避免内存泄漏
            // 销毁监听事件
            const _this = this;
            window.removeEventListener('resize', _this.resizeHandler);
            // 销毁 Echarts 实例
            this.$echartsModelOne.dispose();
        },
        name: "EchartsModelOne",
        data(){
           return {
               options : {
                   tooltip: {//提示框，可以在全局也可以在
                       trigger: 'item',  //提示框的样式
                       formatter: "{a} <br/>{b}: {c} ({d}%)",
                       color:'#000', //提示框的背景色
                       textStyle:{ //提示的字体样式
                           color:"black",
                       }
                   },
                   legend: {  //图例
                       orient: 'vertical',  //图例的布局，竖直    horizontal为水平
                       x: "75%",//图例显示在右边
                       data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                       textStyle:{    //图例文字的样式
                           color:'#333',  //文字颜色
                           fontSize:12    //文字大小
                       }
                   },
                   series: [
                       {
                           name:'访问来源',
                           type:'pie', //环形图的type和饼图相同
                           radius: ['50%', '70%'],//饼图的半径，第一个为内半径，第二个为外半径
                           avoidLabelOverlap: false,
                           color:['#D1FBEF','#F9D858','#4CD0DD','#DF86F0','#F5A7C1'],
                           label: {
                               normal: {  //正常的样式
                                   show: true,
                                   position: 'left'
                               },
                               emphasis: { //选中时候的样式
                                   show: true,
                                   textStyle: {
                                       fontSize: '20',
                                       fontWeight: 'bold'
                                   }
                               }
                           },  //提示文字
                           center: ["35%", "53%"],
                           labelLine: {
                               normal: {
                                   show: false
                               }
                           },
                           data:[
                               {value:335, name:'直接访问'},
                               {value:310, name:'邮件营销'},
                               {value:234, name:'联盟广告'},
                               {value:135, name:'视频广告'},
                               {value:1548, name:'搜索引擎'}
                           ]
                       }
                   ]
               }
           }
        },
    }
</script>

<style scoped>

</style>
