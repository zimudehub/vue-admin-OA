<template>
  <div class="dar-box">
    <div
      class="item-wrap"
      :class="selectItem.key===item.key?'active':''"
      @click="$emit('onClick',item)"
    >

      <FormNode
        :item="item"
        :layout="layout"
      />
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-delete"
        :class="selectItem.key===item.key?'delete-active':'delete'"
        @click.stop="$emit('deleteItem')"
      />
    </div>
  </div>
</template>

<script>
  import FormNode from '../fromNode'
    export default {
        name: "tFormTemplate",
        components:{FormNode},
        props:{
            layout:{
                type:Object,
                required:true,
            },
            item:{
                type: Object,
                default:()=>{},
                required: true
            },
            i:{
                type: Number,
                required:true
            },
            selectItem:{
                required:true
            }
        },
        methods:{
            deleteItem(){
              this.$emit('deleteItem')
            }
        }
    }
</script>

