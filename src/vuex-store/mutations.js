import {
  ADD_BUTTON
} from './mutation-types'

export default{
  [ADD_BUTTON](state,payload){
    state.kFormList = state.kFormList.push({
      id: payload.id||"",
      type: "button",
      name: "",
      placeHolder:"",
      isMust: false,
    })
  },
}
