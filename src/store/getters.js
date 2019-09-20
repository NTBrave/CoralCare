const getters = {
  getIfLogin(state) {
    return state.ifLogin;
  },

  // 获取活动(时间编号及地点)
  getActivity(state) {
    return state.activity;
  }
};

export default getters;
