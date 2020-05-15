export default{
  menuMap:[
    {
      name: "首页",
      path: "/home",
      icon: "el-icon-s-platform"
    },
    {
      name: "表单页",
      icon: "el-icon-s-order",
      children:[
        {
          name: "基础表单",
          path: "baseForm"
        },
        {
          name: "分步表单",
          path: "flowForm"
        },
        {
          name: "高级表单",
          path: "superForm"
        }
      ]
    },
    {
      name: "权限测试页",
      path: "author",
      icon: "el-icon-s-goods"
    },
    {
      name: "表单设计",
      path: "formDesign",
      icon: "el-icon-s-data"
    },
    {
      name: "卡片",
      path: "22",
      icon: "el-icon-s-grid"
    },
    {
      name: "分级菜单",
      icon: "el-icon-location",
      children: [
        {
          name: "菜单1",
          path: "44_1"
        },
        {
          name: "菜单2",
          path: "44_2"
        },
        {
          name: "菜单3",
          path: "44_3"
        },
        {
          name: "菜单4",
          // path: "44_4"
          children: [
            {
              name: "三级菜单",
              path: "44_4_1"
            }
          ]
        },
      ]
    },
    {
      name: "操作日志",
      path: "55",
      icon: "el-icon-s-order"
    },
    {
      name: "Blog后台",
      path: "66",
      icon: "el-icon-s-claim"
    },
    {
      name: "权限管理",
      path: "77",
      icon: "el-icon-s-order"
    },
    {
      name: "个人中心",
      path: "88",
      icon: "el-icon-setting"
    },
  ],
  kFormList: [

  ]
}
