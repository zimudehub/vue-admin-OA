<template>
  <el-form
    label-position="left"
    label-width="15%"
  >
    <draggable
      tag="div"
      class= "wrapper"
      v-model= "data.list"
      v-bind= "{
        group: { name: 'form-draggable', pull: 'clone', put: true },
        animation: 180,
        handle:'.dar-box',
        ghostClass: 'moving',
        sort: true,
      }"
      @add="deepClone"
      @end="start"
    >
      <transition-group tag="div" name="list" class="list-main">
          <TFormTemplate
            v-for="(item,i) in data.list"
            :key="item.key"
            :item="item"
            :i = "i"
            @deleteItem="deleteItem"
            :selectItem.sync="selectItem"
            @onClick="handleSelectItem"
          />
      </transition-group>
    </draggable>
  </el-form>
</template>

<script>
    import draggable from 'vuedraggable';
    import TFormTemplate from '../tFormTemplate'
    export default {
        name: "contentFormTemplate",
        props:{
            data:{
                type: Object,
                required: true
            },
            selectItem:{
                required: true
            },
            noModel: {
                type: Array,
                default:()=>[
                    "button",
                    "divider",
                    "card",
                    "grid",
                    "table",
                    "alert",
                    "text",
                    "html"
                ],
            }
        },
        components:{draggable, TFormTemplate},
        created(){

        },
        computed:{

        },
        data(){
            return{

            }
        },
        watch:{

        },
        methods: {
            start(e){
                this.$emit("startChoose", e.newIndex)
            },
            handleSelectItem(item){
                this.$emit("choose", item)
            },

            deepClone(e){
                //当从左侧拖进来时,将拖进来的数据,克隆一份传给selectItem,保证操作区域的data.list值唯一
                const item = JSON.parse(JSON.stringify(this.data.list[e.newIndex]));
                this.$emit("selectItemChange", item, e.newIndex)
            },
            deleteItem(){
                this.$emit('deleteItem')
            }

        }
    }
</script>
