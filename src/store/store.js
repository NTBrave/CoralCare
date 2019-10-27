import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

const state = {
  /**
   * 登陆部分
   */
  isLogin: false, // 判断是否登录
  /**
   * 站点数据数组
   * .spaId:站点的主键
   *
   */
  PYZD: [], // 所有站点信息
  currentZD: "", // 当前选择的站点编号
  workList: [], // 查询或本次已创建的作业列表(pyzd_spaid、timestamp、SpaId)
  activityList: [], // 本次已创建的活动列表(activity_number, czzy_spaid, SpaId)

  /**
   *  后台管理端
   *  残枝培育部分
   */

  uploadVisiable: true,

  calendarShowActivity: false, // 根据这个属性判断拉取当前月视图有活动的日期渲染

  currentWork: "", // 当前的作业编号

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
