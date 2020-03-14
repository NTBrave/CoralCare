/**
 * @description: vuex的数据,最后数据本地化,
 * @version: V1.0,
 * @date: ,
 * @author: czb,
*/
import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import createPersistedState from 'vuex-persistedstate' //vuex数据持久化
Vue.use(Vuex);

const state = {
    //珊瑚的区域，苗圃，分区信息
    mp: [],
    fq: [],
    //珊瑚数据
    coralNumberStatistic: {
        '菲律宾珊瑚': [250, 500, 100],
        '品种2': [150, 400, 0],
        '品种3': [190, 455, 89],
        '品种4': [0, 40, 23],
        '品种5': [211, 671, 242],
        '品种6': [250, 500, 100],
        '品种7': [250, 500, 100],
        '品种8': [250, 500, 100],
        '品种9': [250, 500, 100],
        '品种10': [250, 500, 100],
        '品种11': [250, 500, 100],
        '品种12': [250, 500, 100],
        '品种13': [250, 500, 100],
        '品种14': [250, 500, 100],
        '品种15': [250, 500, 100],
        '品种16': [250, 500, 100],
        '品种17': [250, 500, 100],
        '品种18': [250, 500, 100],
        '品种19': [250, 500, 100],
        '品种20': [250, 500, 100]
    },
    //自定义右键菜单
    menu: {
        Show: false,
        Left: 0,
        Top: 0
    },
    /**
     *  后台管理端
     *
     *  残枝培育部分
     */

    // 新建一次下水作业的时间地点
    activity: {
        timeNum: "", // 活动编号(根据日期时间生成)
        address: "" // 活动地点
    },
    calendarShowActivity: false, // 根据这个属性判断拉取当前月视图有活动的日期渲染
    nowDivingActivity: "", // 当前的活动编号
    operateFile: "", // 当前正在操作的植株档案
    divingList: [], // 选择的日期下对应的下水作业列表
    divingActivitiesList: [], // 选择的日期下对应的下水作业的活动类型列表
    activeId: -1, // 选择活动类型之后进入的记录页面显示的路由id
    /**
     *  后台管理端
     *  残枝培育部分
     */
    uploadVisiable: true,
    currentWork: "", // 当前的作业编号
    nowDivingActivitiesList: [], // 当前新建下水作业下的活动列表
    activityFiles: [], // 活动下对应的植株档案记录
    activeId: -1, // 选择活动类型之后进入的记录页面显示的路由id

    //珊瑚数据部分下拉列表
    dropdownKey1: { name: '所有区域', spa_id: '' },
    dropdownKey2: { name: '所有苗圃', spa_id: '' },
    dropdownKey3: { name: '所有分区', spa_id: '' },
    //珊瑚的区域，苗圃，分区信息
    area: ["区域A", "区域B", "区域C", "区域D", "区域E", "区域F"],
    group: [],

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
    activityList: [], // 已创建的活动列表[{activity_number, czzy_spaid, czhd_spaid}]
    workIdArr: [] //查看残枝作业的当天，作业id数组
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [createPersistedState({
        storage: window.sessionStorage //存在sessionStorage
    })]
});