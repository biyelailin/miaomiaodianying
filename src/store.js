import Vue from 'vue'
import Vuex from 'vuex'
// 直接引入了vuex
Vue.use(Vuex)
// 储存状态
const state = {

}
// 提交给state，实现state更新
const mutations = {

}
// 实现异步分发给mutations,actions中异步函数的参数context：和state拥有相同的属性和
const actions = {

}
// getter，计算状态，最后达到更新state状态
const getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
