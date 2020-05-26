const boomConfig=[
  {
    id:'1',
    name:"刀",
    needNumber:8,//订单需求
    haveNumber:3,//库存3
    madeNumber:1,//使用多少库存
    putNumber:5,
    children:[
      {
        id:"1-1",
        name:"刀把",
        coefficient: 1,//系数
        needNumber: 5,
        haveNumber: 4,
        madeNumber: 4,
        putNumber:5,
        children:[
          {
            id: "1-1-1",
            name: "木头",
            coefficient: 2,
            needNumber: 4,
            haveNumber: 3,
            madeNumber: 1,
            putNumber:5,
          },
          {
            id: "1-1-2",
            name: "铁丝",
            coefficient: 2,
            needNumber: 4,
            haveNumber: 3,
            madeNumber: 1,
            putNumber:5,
          }
        ]
      },
      {
        id:"1-2",
        name: "刀刃",
        needNumber: 5,
        haveNumber: 4,
        madeNumber: 4,
        putNumber:5,
      }
    ]
  }
];
