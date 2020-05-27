<template>
  <el-card>
    <el-form label-position="top" label-width="15%">
      <Collapse :boomConfig="boomConfig"></Collapse>
    </el-form>
  </el-card>
</template>

<script>
  import Collapse from "./collapse"
    export default {
        name: "Boom",
        components:{Collapse},
        data(){
            return{
                boomConfig:[
                    {
                        id:'1',
                        name:"刀",
                        needNumber:8,//订单需求
                        haveNumber:3,//库存3
                        madeNumber:0,//使用多少库存
                        putNumber:0,
                        children:[
                            {
                                id:"1-1",
                                name:"刀把",
                                coefficient: 1,//系数
                                needNumber: 0,
                                haveNumber: 4,
                                madeNumber: 0,
                                putNumber:0,
                                children:[
                                    {
                                        id: "1-1-1",
                                        name: "木头",
                                        coefficient: 1,
                                        needNumber: 0,
                                        haveNumber: 3,
                                        madeNumber: 0,
                                        putNumber:0,
                                    },
                                    {
                                        id: "1-1-2",
                                        name: "铁丝",
                                        coefficient: 2,
                                        needNumber: 0,
                                        haveNumber: 3,
                                        madeNumber: 0,
                                        putNumber:0,
                                    }
                                ]
                            },
                            {
                                id:"1-2",
                                name: "刀刃",
                                coefficient: 2,
                                needNumber: 0,
                                haveNumber: 4,
                                madeNumber: 0,
                                putNumber:0,
                                // children: [
                                //     {
                                //         id:"1-2-1",
                                //         name: "刀刃",
                                //         needNumber: 5,
                                //         haveNumber: 4,
                                //         madeNumber: 4,
                                //         c:3,
                                //     }
                                // ]
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>
