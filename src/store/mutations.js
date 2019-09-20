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
  setDateNumber(state, activity) {
    state.activity = activity;
  }
};

export default mutations;
