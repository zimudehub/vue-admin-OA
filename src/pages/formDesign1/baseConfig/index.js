export const baseList=[
  {
    type: "input",//控件类型
    icon: "el-icon-edit",//图标
    label: "输入框",//控件名字
    options: {
      minWidth:10,
      width: 100, // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
    key: "",
    rules: [
      //验证规则
      {
        required: false, // 必须填写
        message: "必填项"
      }
    ]
  },
  {
    type: "text",//控件类型
    icon: "el-icon-edit-outline",//图标
    label: "文本域",//控件名字
    options: {
      minWidth:10,
      width: 100, // 宽度
      height:3,//高度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
    key: "",
    rules: [
      //验证规则
      {
        required: false, // 必须填写
        message: "必填项"
      }
    ]
  },
  {
    type: "number",//控件类型
    icon: "el-icon-c-scale-to-original",//图标
    label: "数字输入框",//控件名字
    options: {
      minWidth:40,
      width: 40, // 宽度
      defaultValue: 0, // 默认值
      min: -9999999, // 可输入最小值
      max: 99999999,
      step:1,
      precision:null,
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "select",//控件类型
    icon: "el-icon-caret-bottom",//图标
    label: "下拉选择框",//控件名字
    options: {
      width: 100, // 宽度
      minWidth:20,
      defaultValue: undefined, // 下拉选框请使用undefined为默认值
      multiple: false, // 是否允许多选
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择", // 默认提示文字
      dynamicKey: "",
      dynamic: false,
      options: [
        // 下拉选择项配置
        {
          value: "1",
          label: "选项1",
        },
        {
          value: "2",
          label: "选项2",
        }
      ],
      showSearch: false // 是否显示搜索框，搜索选择的项的值，而不是文字
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "checkbox",//控件类型
    icon: "el-icon-tickets",//图标
    label: "多选框",//控件名字
    options: {
      disabled: false, //是否禁用
      checkboxDefaultValue: [],
      chooseMin:1,
      chooseMax:3,
      dynamicKey: "",
      dynamic: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        },
        {
          value: "3",
          label: "选项3"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "radio",//控件类型
    icon: "el-icon-remove-outline",//图标
    label: "单选框",
    options: {
      disabled: false, //是否禁用
      defaultValue: "", // 默认值
      dynamicKey: "",
      dynamic: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        },
        {
          value: "3",
          label: "选项3"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "date",//控件类型
    icon: "el-icon-stopwatch",//图标
    label: "日期选择器",
    options: {
      width: 100, // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      rangeDefaultValue: "", // 默认值，字符串 12:00:00
      disabled: false, // 是否禁用
      placeholder: "请选择",
      format:"yyyy 年 MM 月 dd 日",//展示格式
      isChooseTimes: 1,//是否是选择一个时间段
      valueFormat:"yyyy-MM-dd"//解析格式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "input",//控件类型
    icon: "el-icon-date",//图标
    label: "日期选择器",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-upload2",//图标
    label: "上传文件",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-picture-outline",//图标
    label: "上传图片",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-thumb",//图标
    label: "按钮",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-open",//图标
    label: "开关",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-copy-document",//图标
    label: "弹出选择框",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-notebook-2",//图标
    label: "文字",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-link",//图标
    label: "超链接",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-s-grid",//图标
    label: "子表",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
  {
    type: "input",//控件类型
    icon: "el-icon-s-grid",//图标
    label: "富文本",
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
  },
];
