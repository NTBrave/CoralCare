import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

const state = {
    // 登陆获得的初始信息,仅存储
    userInformation: null,
    pathBackup: [],
    currentResourceBackup: null,

    // 各种抽屉的visible变量
    groupVisible: false,
    docMetaVisible: false,
    dirMetaVisible: false,
    fileMetaVisible: false,
    changeNameVisible: false,
    uploadVisiable: true,

    //珊瑚数据部分下拉列表
    dropdownKey1: '所有区域',
    dropdownKey2: '所有苗圃',
    dropdownKey3: '所有分区',
    //珊瑚的区域，苗圃，分区信息
    area: ['区域A', '区域B', '区域C', '区域D', '区域E', '区域F'],
    mp: ['苗圃A', '苗圃B', '苗圃C', '苗圃D', '苗圃E'],
    group: ['分区1', '分区2', '分区3', '分区4', '分区5', '分区6', '分区7', '分区8', '分区9', '分区10', '分区11', '分区12', '分区13', '分区14',
        '分区15', '分区16', '分区17', '分区18', '分区19', '分区20', '分区21', '分区22', '分区23', '分区24', '分区25',
    ],
    //珊瑚数据
    coralNumberStatistic: {
        '菲律宾珊瑚礁': [250, 500, 100],
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
    //这个值用于 从其他页面返回后 还能到达跳转前的界面
    idOfThePathJust: null,
    typeOfThePathJust: null,

    //这个值用于 从其他页面返回后 还能到是自己选的图标card大小
    whatSizeCard: "",

    //这个值用于 从其他页面返回后 还能到是自己选的列表或图标
    ListOrNot: true,

    //自定义右键菜单
    menu: {
        Show: false,
        Left: 0,
        Top: 0
    },

    // 判断是否在首页
    isHome: true,

    /**
     *  后台管理端
     *
     *  残枝培育部分
     */

    ifLogin: true, // 判断是否登录

    // 新建一次下水作业的时间地点
    activity: {
        timeNum: "", // 活动编号(根据日期时间生成)
        address: "" // 活动地点
    },
    calendarShowActivity: false, // 根据这个属性判断拉取当前月视图有活动的日期渲染

    nowDivingActivitiesList: [], // 当前新建下水作业下的活动列表
    nowDivingActivity: "", // 当前的活动编号

    activityFiles: [], // 活动下对应的植株档案记录
    operateFile: "", // 当前正在操作的植株档案

    divingList: [], // 选择的日期下对应的下水作业列表
    divingActivitiesList: [], // 选择的日期下对应的下水作业的活动类型列表

    activeId: -1 // 选择活动类型之后进入的记录页面显示的路由id
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});