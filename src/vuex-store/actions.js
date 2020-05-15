import {
  ADD_BUTTON,

} from './mutation-types'

export default {
  [ADD_BUTTON]({commit}){
    commit(ADD_BUTTON,{id:5})
  }
}
