<template>
  <el-form
    label-position="left"
    label-width="15%"
    style="height: 900px; overflow: hidden"

  >
    <draggable
      tag="div"
      class= "wrapper"
      v-model= "list"
      v-bind= "{
        group: { name: 'form-draggable', pull: 'clone', put: true },
        animation: 180,
        ghostClass: 'moving',
        sort: true,
      }"
      @add="deepClone"
    >
      <transition-group tag="div" name="list" class="list-main">
        <div v-for="(item,i) in list" :key="item.key" @click="handleSelect(i)">
          <transition-group tag="div" name="line" >
            <div :class="selectIndex === i?'top-line top-line-bg':'top-line'"  :key="1 + item.key"/>
          </transition-group>
          <el-form-item  :label="item.label"  :class="selectIndex === i?'form-wrap form-wrap-select':'form-wrap'">
            <el-input></el-input>
            <p id="control-key">{{item.key}}</p>
          </el-form-item>
        </div>
      </transition-group>
    </draggable>
  </el-form>
</template>

<script>
    import draggable from 'vuedraggable';
    export default {
        name: "contentFormTemplate",
        props:{
            baseArray:{
                type: Array,
                required: true
            }
        },
        components:{draggable},
        created(){

        },
        computed:{
            // list(){
            //     return window.T_form_contentFormTemplate
            // }
        },
        data(){
            return{
                list:[],
                selectIndex:""
            }
        },
        methods: {
            handleSelect(i){
                this.selectIndex = i
            },
            deepClone(e){
                this.selectIndex = e.newIndex;
            },
            Update(e){
                console.log(e)
            }
        }
    }
</script>

<style>
  #control-key{
    position: absolute;
    padding: 0;
    margin: 0;
    width: 120px;
    height: 14px;
    font-size: 12px;
    color: black;
    line-height: 14px;
    top: 42px;
    right: -25px;
  }
  .list-main{
    width: 100%;
    height: 800px;
  }
  .wrapper{
    width: 100%;
  }

</style>
