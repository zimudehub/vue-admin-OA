<template>
  <div class="dar-box"
  >
    <div
      class="item-wrap"
      :class="selectItem.key===item.key?'active':''"
      @click.stop="$emit('onClick',item)"
    >
<!--      格栅布局-->
      <template v-if="item.type === 'grid'">
        <div class="grid-box">
          <el-row>
            <el-col
              v-for="(items, i) in item.columns"
              class="grid-item"
              :span="12"
              :key="i"
            >
              <draggable
                tag="div"
                class="grid-box-dra"
                v-model= "items.list"
                v-bind= "{
                  group: 'form-draggable',
                  animation: 180,
                  handle:'.dar-box',
                  ghostClass: 'moving',
                }"
              >
                <transition-group tag="div" name="list" class="grid-item">
                  <TFormTemplate
                    v-for="(r, i) in items.list"
                    :key="r.key"
                    :item="r"
                    :i="i"
                    :layout="layout"
                    :selectItem="selectItem"
                  />
                </transition-group>
              </draggable>
            </el-col>
          </el-row>
        </div>
      </template>
<!--      格栅布局结束-->
      <FormNode
        v-else
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
  import draggable from 'vuedraggable';
    export default {
        name: "TFormTemplate",
        components:{FormNode, draggable},
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

