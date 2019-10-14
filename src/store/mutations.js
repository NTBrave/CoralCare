const mutations = {
  setIsHome(state, home) {
    state.isHome = home;
    // console.log(state.isHome);
  },
  setmenu(state, newMenu) {
    // console.log("vuex: ", newMenu)
    state.menu.Show = newMenu.Show;
    state.menu.Left = newMenu.Left;
    state.menu.Top = newMenu.Top;
  },
  setUserInforFromAppVue(state, infor) {
    state.userInformation = infor;
  },
  setwhatSizeCard(state, size) {
    state.whatSizeCard = size;
  },
  setIdOfThePathJust(state, id) {
    state.idOfThePathJust = id;
  },
  setTypeOfThePathJust(state, type) {
    state.typeOfThePathJust = type;
  },

  setPathBackup(state, payload) {
    state.pathBackup = payload.pathBackup;
  },
  setCurrentResourceBackup(state, payload) {
    state.currentResourceBackup = payload.currentResourceBackup;
  },

  setListOrNot(state, yesno) {
    state.ListOrNot = yesno;
  },
  // visible
  groupV(state) {
    state.groupVisible = true;
  },
  // hidden
  groupH(state) {
    state.groupVisible = false;
  },

  docMetaV(state) {
    state.docMetaVisible = true;
  },
  docMetaH(state) {
    state.docMetaVisible = false;
  },

  dirMetaV(state) {
    state.dirMetaVisible = true;
  },
  dirMetaH(state) {
    state.dirMetaVisible = false;
  },

  fileMetaV(state) {
    state.fileMetaVisible = true;
  },
  fileMetaH(state) {
    state.fileMetaVisible = false;
  },

  changeNameV(state) {
    state.changeNameVisible = true;
  },
  changeNameH(state) {
    state.changeNameVisible = false;
  },

  uploadV(state) {
    state.uploadVisiable = true;
  },
  uploadH(state) {
    state.uploadVisiable = false;
  },

  /**
   *   后台管理端
   */
  // 改变在残枝培育页面时显示的时间地点按钮内容
  setActivity(state, activity) {
    state.activity = activity;
  },

  // 设置日历发起请求渲染有活动日期
  setCalendarShowActivity(state, calendarShowActivity) {
    state.calendarShowActivity = calendarShowActivity;
  },

  // 缓存当前创建的下水作业对应的活动
  setNowDivingActivitiesList(state, data) {
    state.nowDivingActivitiesList.push(data);
    console.log("***************");
  },

  // 缓存当前的活动编号
  setNowDivingActivity(state, data) {
    state.nowDivingActivity = data;
  },

  // 缓存当前页面对应的活动类型导航栏id
  setActiveId(state, id) {
    state.activeId = id;
  },

  // 缓存当前活动下对应的植株档案列表
  setActivityFiles(state, filesList) {
    state.activityFiles = filesList;
  },

  // 缓存当前正在操作的植株档案
  setOperateFile(state, fileName) {
    state.operateFile = fileName;
  }
};

export default mutations;
