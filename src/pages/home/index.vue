<template>
  <div>
    <EchartsCard/>
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" >
      <el-menu-item v-for="(item, i) in tabs" :key="i" @click="handleEchartsTab(item.component)">{{item.navName}}</el-menu-item>
    </el-menu>
    <component :is="echartsTabShow"></component>
    <el-row :gutter="20" style="margin-top: 15px">
      <el-col :span="12">
        <el-card class="box-card" style="height: 400px; min-width: 250px">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0; font-size: 20px" type="text">...</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" style="height: 400px; min-width: 250px">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0; font-size: 20px" type="text">...</el-button>
          </div>
          <EchartsModelOne />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 15px">
      <el-col :span="24">
        <el-card class="box-card" style="height: 400px; min-width: 250px">

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import WorkEcharts from '../../components/echarts/workEcharts';
    import EchartsCard from '../../components/echarts/echartsCard';
    import EchartsModelOne from "../../components/echarts/echartsModelCard/one";
    import Loading from "../../components/echarts/loading"
    const AsyncComponent = (path) => ({
        component: import(`../../components${path}`),
        loading: Loading,
        delay: 0,
        timeout: 3000
    });
    export default {
        name: "Home",
        components:{ WorkEcharts, EchartsCard, EchartsModelOne,
            "PreparedCardOne":()=>AsyncComponent('/asyncComponents/workNavCard/preparedCardOne'),
            "PreparedCardTwo":()=>AsyncComponent('/asyncComponents/workNavCard/preparedCardTwo'),
            "PreparedCardThree":()=>AsyncComponent('/asyncComponents/workNavCard/preparedCardThree') },
        data(){
            return{
                tabs:[
                    {
                        navName:"效率报表",
                        component: "WorkEcharts"
                    },
                    {
                        navName:"我的工作台",
                        component: "PreparedCardOne"
                    },
                    {
                        navName:"消息中心",
                        component: "PreparedCardTwo"
                    },
                    {
                        navName:"订单报表",
                        component: "PreparedCardThree"
                    },
                ],
                echartsTabShow : "WorkEcharts",
            }
        },
        methods: {
            handleEchartsTab(component){
                this.echartsTabShow = component;
            }
        }
    }
</script>

<style scoped>

</style>
