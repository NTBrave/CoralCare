const getters = {
  getIfLogin(state) {
    return state.ifLogin;
  },

  // 将当前站点转化为当前站点的所有spaId
  getCurrentZD_data: state => id => {
    return state.PYZD.find(todo => todo.ExtendData.number === id);
  },
  // getCurrentZD_data(state) {
  //   let currentZD_data = {};
  //   let targetArr = state.PYZD.filter(function(item) {
  //     if (item.ExtendData.number === state.currentZD) {
  //       return item;
  //     }
  //   });
  //   currentZD_data.ZD_spaId = targetArr[0].SpaId; // 站点spaid
  //   currentZD_data.cjqy_spaid = targetArr[0].cjqy_spaid; //采集区域spaid
  //   currentZD_data.zyqy_spaid = targetArr[0].zyqy_spaid; //暂养区域spaid
  //   currentZD_data.hbqy_spaid = targetArr[0].hbqy_spaid; //回播区域spaid
  //   currentZD_data.ywsj_spaid = targetArr[0].ywsj_spaid; //业务数据spaid
  //   currentZD_data.czdaroot_spaid = targetArr[0].czdaroot_spaid; //残枝档案spaid
  //   return currentZD_data;
  // },

  // 获取站点资源
  getAddressList(state) {
    let addressList = [];
    for (let i of state.PYZD) {
      let address = {};
      address.id = i.ExtendData.number;
      address.name = i.ExtendData.name;
      address.img = i.ExtendData.image_url;
      addressList.push(address);
    }
    return addressList;
  },

  //获取当前作业的spaid
  getCurrentWork_spaid(state) {
    console.log(state.currentWork);
    console.log(state.workList);

    return state.workList.filter(function(item) {
      if (item.timestamp === state.currentWork) {
        return item;
      }
    })[0].SpaId;
  },

  // 获取当前创建的活动的spaid
  getCurrentActivity_spaid(state) {
    return state.activityList.filter(function(item) {
      if (item.activity_number === state.nowDivingActivity) {
        return item;
      }
    })[0].SpaId;
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
