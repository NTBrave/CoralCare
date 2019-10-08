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
  uploadVisiable: true,

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

  /**
   *  后台管理端
   *
   *  残枝培育部分
   */

  ifLogin: true, // 判断是否登录

  // 新建一次下水作业的时间地点
  activity: {
    timeNum: "", // 活动编号(根据日期时间生成)
    address: "" // 活动地点
  },
  calendarShowActivity: false, // 根据这个属性判断拉取当前月视图有活动的日期渲染

  nowDivingActivitiesList: [], // 当前新建下水作业下的活动列表
  nowDivingActivity: "", // 当前的活动编号

  activityFiles: ["A-宇宙号-1区-蓝-07", "A-宇宙号-1区-蓝-10"], // 活动下对应的植株档案记录

  divingList: [], // 选择的日期下对应的下水作业列表
  divingActivitiesList: [], // 选择的日期下对应的下水作业的活动类型列表

  activeId: -1 // 选择活动类型之后进入的记录页面显示的路由id
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
