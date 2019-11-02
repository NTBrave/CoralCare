import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import createPersistedState from 'vuex-persistedstate'//vuex数据持久化
Vue.use(Vuex);

const state = {
  // 登陆获得的初始信息,仅存储
  userInformation: null,
  pathBackup: [],
  currentResourceBackup: null,


  //珊瑚数据部分下拉列表
  dropdownKey1: "所有区域",
  dropdownKey2: "所有苗圃",
  dropdownKey3: "所有分区",
  //珊瑚的区域，苗圃，分区信息
  area: ["区域A", "区域B", "区域C", "区域D", "区域E", "区域F"],
  mp: [],
  group: [],
  //珊瑚数据
  coralNumberStatistic: {
    菲律宾珊瑚: [250, 500, 100],
    品种2: [150, 400, 0],
    品种3: [190, 455, 89],
    品种4: [0, 40, 23],
    品种5: [211, 671, 242],
    品种6: [250, 500, 100],
    品种7: [250, 500, 100],
    品种8: [250, 500, 100],
    品种9: [250, 500, 100],
    品种10: [250, 500, 100],
    品种11: [250, 500, 100],
    品种12: [250, 500, 100],
    品种13: [250, 500, 100],
    品种14: [250, 500, 100],
    品种15: [250, 500, 100],
    品种16: [250, 500, 100],
    品种17: [250, 500, 100],
    品种18: [250, 500, 100],
    品种19: [250, 500, 100],
    品种20: [250, 500, 100]
  },


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
  // workList: [], // 查询或本次已创建的作业列表(pyzd_spaid、timestamp、SpaId)
  activityList: [], // 已创建的活动列表[{activity_number, czzy_spaid, czhd_spaid}]
  // currentActivity: {}, // 当前活动

  /**
   *  后台管理端
   *  残枝培育部分
   */

  // currentWork: "", // 当前的作业编号

  // nowDivingActivitiesList: [], // 当前新建下水作业下的活动列表
  // nowDivingActivity: "", // 当前的活动编号

  activityFiles: [], // 活动下对应的植株档案记录
  operateFile: "", // 当前正在操作的植株档案

  divingList: [], // 选择的日期下对应的下水作业列表
  divingActivitiesList: [], // 选择的日期下对应的下水作业的活动类型列表

  activeId: -1, // 选择活动类型之后进入的记录页面显示的路由id,

  workIdArr: []//查看残枝作业的当天，作业id数组
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState({
    storage: window.sessionStorage//存在sessionStorage
  })]
});
