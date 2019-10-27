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
    },

    //得到珊瑚数据
    coralStatistic(state) {
        let coralNumberStatistic = state.coralNumberStatistic;
        let dataX1 = [];
        let dataX2 = [];
        let dataX3 = [];
        let dataY1 = [];
        let dataY2 = [];
        let dataY3 = [];
        let dataY4 = [];
        let dataY5 = [];
        let maxY1 = 0;
        let maxY2 = 0;
        let maxY3 = 0;
        for (let i in coralNumberStatistic) {
            if (coralNumberStatistic[i][0] > 0) {
                dataX1[dataX1.length] = i;
                dataY1[dataY1.length] = coralNumberStatistic[i][0];
                if (coralNumberStatistic[i][0] > maxY1) {
                    maxY1 = coralNumberStatistic[i][0];
                }
            }
            if (coralNumberStatistic[i][1] + coralNumberStatistic[i][2] > 0) {
                dataX2[dataX2.length] = i;
                dataY2[dataY2.length] = coralNumberStatistic[i][1] + coralNumberStatistic[i][2];
                dataY3[dataY3.length] = coralNumberStatistic[i][1];
                dataY4[dataY4.length] = parseInt(100 * coralNumberStatistic[i][1] / (coralNumberStatistic[i][1] + coralNumberStatistic[i][2]));
                if (coralNumberStatistic[i][1] + coralNumberStatistic[i][2] > maxY2) {
                    maxY2 = coralNumberStatistic[i][1] + coralNumberStatistic[i][2];
                }
            }
            if (coralNumberStatistic[i][2] > 0) {
                dataX3[dataX3.length] = i;
                dataY5[dataY5.length] = coralNumberStatistic[i][2];
                if (coralNumberStatistic[i][2] > maxY3) {
                    maxY3 = coralNumberStatistic[i][2];
                }
            }
        }
        let rateX1 = ((800 / (dataX1.length + 1)) <= 100 ? (800 / (dataX1.length + 1)) : 100);
        let rateX2 = ((800 / (dataX2.length + 1)) <= 100 ? (800 / (dataX2.length + 1)) : 100) * 0.6;
        let rateX3 = ((800 / (dataX3.length + 1)) <= 100 ? (800 / (dataX3.length + 1)) : 100) * 0.6;
        return { dataX1, dataX2, dataX3, dataY1, dataY2, dataY3, dataY4, dataY5, rateX1, rateX2, rateX3, maxY1, maxY2, maxY3 }
    }
};

export default getters;