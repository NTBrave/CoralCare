import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

const state = {
  /**
    *  登陆部分
    */
  isLogin: false, // 判断是否登录
  PYZD: [],//站点数据数组



  /**
   *  后台管理端
   *  残枝培育部分
   */


  uploadVisiable: true,

  // 新建一次下水作业的时间地点
  activity: {
    timeNum: "", // 活动编号(根据日期时间生成)
    address: "" // 活动地点
  },
  calendarShowActivity: false, // 根据这个属性判断拉取当前月视图有活动的日期渲染

  nowDivingActivitiesList: [], // 当前新建下水作业下的活动列表
  nowDivingActivity: "", // 当前的活动编号

  activityFiles: [], // 活动下对应的植株档案记录
  operateFile: "", // 当前正在操作的植株档案

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
