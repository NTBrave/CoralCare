const mutations = {

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