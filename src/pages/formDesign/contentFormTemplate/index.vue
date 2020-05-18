<template>
  <el-form
    label-position="left"
    label-width="20%"
    style=" overflow: hidden"
  >
    <draggable
      tag="div"
      class= "wrapper"
      v-model= "data.list"
      v-bind= "{
        group: { name: 'form-draggable', pull: 'clone', put: true },
        animation: 180,
        ghostClass: 'moving',
        sort: true,
      }"
      @add="deepClone"
      @update = "onUpdate"
    >
      <transition-group tag="div" name="list" class="list-main">
        <TFormTemplate
          v-for="(item,i) in data.list"
          :item="item"
          :i = "i"
          :select-index="selectIndex"
          @emitClick="handleSelect(i)"
          @deleteItem="deleteItem"
          :key="item.key"
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
            selectIndex:{
                required: true
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
            onUpdate(e){
                //当排序结束时找到被激活的项
                this.$emit("selectIndexChange", e.newIndex)
            },
            handleSelect(i){
                this.$emit("selectIndexChange", i)
            },
            deepClone(e){
                this.$emit("selectIndexChange", e.newIndex)
            },
            deleteItem(){
                this.$emit('deleteItem')
            }

        }
    }
</script>

<style>
  .list-main{
    width: 100%;
    height: 800px;
  }
  .wrapper{
    width: 100%;
  }

</style>
