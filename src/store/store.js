import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

const state = {
  // 登陆获得的初始信息,仅存储
  userInformation: null,
  pathBackup: [],
  currentResourceBackup: null,

  // 各种抽屉的visible变量
  groupVisible: false,
  docMetaVisible: false,
  dirMetaVisible: false,
  fileMetaVisible: false,
  changeNameVisible: false,
  uploadVisiable: false,

  //这个值用于 从其他页面返回后 还能到达跳转前的界面
  idOfThePathJust: null,
  typeOfThePathJust: null,

  //这个值用于 从其他页面返回后 还能到是自己选的图标card大小
  whatSizeCard: "",

  //这个值用于 从其他页面返回后 还能到是自己选的列表或图标
  ListOrNot: true,

  //自定义右键菜单
  menu: {
    Show: false,
    Left: 0,
    Top: 0
  },

  // 判断是否在首页
  isHome: true,

  // 判断是否登录
  ifLogin: true
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
