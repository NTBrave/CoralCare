const getters = {
  getIfLogin(state) {
    return state.ifLogin;
  },

  // 获取活动(时间编号及地点)
  getActivity(state) {
    return state.activity;
  },

  // 根据这个属性判断拉取当前月视图有活动的日期渲染
  getCalendarShowActivity(state) {
    return state.calendarShowActivity;
  },

  // 获取当前新建下水作业下的活动列表
  getNowDivingActivitiesList(state) {
    return state.nowDivingActivitiesList;
  },

  // 获取当前的活动编号
  getNowDivingActivity(state) {
    return state.nowDivingActivity;
  },

  // 获取活动下的植株档案记录
  getActivityFiles(state) {
    return state.activityFiles;
  },

  // 获取选择的日期下对应的下水作业列表
  getDivingList(state) {
    return state.divingList;
  },

  // 获取选择的日期下对应的下水作业的活动类型列表
  getDivingActivitiesList(state) {
    return state.divingActivitiesList;
  },

  // 获取当前页面的活动类型导航栏id
  getActiveId(state) {
    return state.activeId;
  }
};

export default getters;
