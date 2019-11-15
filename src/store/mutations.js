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

    setDropdownKey1(state, key) {
        state.dropdownKey1 = key;
    },
    setDropdownKey2(state, key) {
        state.dropdownKey2 = key;
    },
    setDropdownKey3(state, key) {
        state.dropdownKey3 = key;
    },
    setArea(state, area) {
        state.area = area;
    },
    setMp(state, mp) {
        state.mp = mp;
    },
    setFq(state, fq) {
        state.fq = fq;
    },
    setCoralNumberStatistic(state, coralNumberStatistic) {
        let obj = {};
        for (let i = 0; i <= coralNumberStatistic.length - 1; i++) {
            obj[coralNumberStatistic[i].key] = [0, 0, 0];
            if (coralNumberStatistic[i].now_alive_number != undefined) {
                obj[coralNumberStatistic[i].key][0] = coralNumberStatistic[i].now_alive_number;
            }
            if (coralNumberStatistic[i].history_alive_number != undefined) {
                obj[coralNumberStatistic[i].key][1] = coralNumberStatistic[i].history_alive_number;
            }
            if (coralNumberStatistic[i].history_death_number != undefined) {
                obj[coralNumberStatistic[i].key][2] = coralNumberStatistic[i].history_death_number;
            }
        }
        state.coralNumberStatistic = obj;
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
    },
    /**
     *  登陆部分
     */
    //设置登陆状态
    setIsLogin(state, bo) {
        state.isLogin = bo;
    },
    //设置培育站点
    setPYZD(state, arr) {
        // console.log(arr);
        state.PYZD = arr;
    },

    // 缓存当前选择的站点编号
    setCurrentZD(state, addressNum) {
        state.currentZD = addressNum;
    },

    // 缓存当前的作业列表
    setWorkList(state, workList) {
        state.workList.push(workList);
    },

    // 缓存作业下的活动列表
    setActivityList(state, activityList) {
        state.activityList.push(activityList);
    },

    /**
     *   后台管理端
     */

    // 设置当前创建的作业时间戳
    setCurrentWork(state, timestamp) {
        state.currentWork = timestamp;
    },

    // 缓存当前创建的下水作业对应的活动
    setNowDivingActivitiesList(state, data) {
        state.nowDivingActivitiesList.push(data);
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
    },

    setUserInforFromAppVue(state, infor) {
        state.userInformation = infor;
    },



    setDropdownKey1(state, key) {
        state.dropdownKey1 = key;
    },
    setDropdownKey2(state, key) {
        state.dropdownKey2 = key;
    },
    setDropdownKey3(state, key) {
        state.dropdownKey3 = key;
    },
    setArea(state, area) {
        state.area = area;
    },
    setMp(state, mp) {
        state.mp = mp;
    },
    setGroup(state, group) {
        state.group = group;
    },
    setCoralNumberStatistic(state, coralNumberStatistic) {
        state.coralNumberStatistic = coralNumberStatistic;
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
    },
    /**
     *  登陆部分
     */
    //设置登陆状态
    setIsLogin(state, bo) {
        state.isLogin = bo;
    },
    //设置培育站点
    setPYZD(state, arr) {
        // console.log(arr);
        state.PYZD = arr;
    },

    // 缓存当前选择的站点编号
    setCurrentZD(state, addressNum) {
        state.currentZD = addressNum;
    },

    // 缓存当前的作业列表
    setWorkList(state, workList) {
        state.workList.push(workList);
    },

    // 缓存作业下的活动列表
    setActivityList(state, activityList) {
        state.activityList.push(activityList);
    },

    /**
     *   后台管理端
     */

    // 设置当前创建的作业时间戳
    setCurrentWork(state, timestamp) {
        state.currentWork = timestamp;
    },

    // 缓存当前创建的下水作业对应的活动
    setNowDivingActivitiesList(state, data) {
        state.nowDivingActivitiesList.push(data);
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
    },
    /**
     * 查看残枝作业部分
     */
    setWorkIdArr(state, arr) {
        state.workIdArr = arr;
    }
};

export default mutations;