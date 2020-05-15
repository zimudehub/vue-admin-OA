<template>
  <draggable
    tag="div"
    class= "wrapper"
    :value= "list"
    v-bind= "{
      group: { name: 'form-draggable', pull: 'clone', put: true },
      animation: 180,
      ghostClass: 'moving'
    }"
    @add="deepClone"
  >
    <transition-group tag="div" name="list" class="list-main">
      <div v-for="(item, i) in list" :key="i*77">
        {{item}}
      </div>
    </transition-group>
  </draggable>
</template>

<script>
    import draggable from 'vuedraggable';
    export default {
        name: "index",
        props:{
            baseArray:{
                type: Array,
                required: true
            }
        },
        components:{draggable},
        created(){
            console.log(this.list)
        },
        data(){
            return{
              list:[]
            }
        },
        methods: {
            deepClone(e){
            //用e.oldIndex为索引拿到baseArray中的对应的项
               const index = e.oldIndex;
               console.log(index)
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
  .wrapper>.list-main>.moving{
    width: 100%;
    background-color: black;
    min-height      : 35px;
    box-sizing      : border-box;
    overflow        : hidden;
    padding         : 0 !important;
  /*// margin       : 3px 0;*/
    position        : relative;
  }
</style>
