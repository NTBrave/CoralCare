

//O-01 获取所有站点
export const O01 =
{
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "05cf4699-f0dd-4c79-a051-d7f20af8fda7",
            "MasterExtendType": "CZPY",
            "NeedFK": "false",
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "master_id",
                    "Operator": {
                        "Operator": "=",
                        "Value": "05cf4699-f0dd-4c79-a051-d7f20af8fda7"
                    }
                }
            ],
            "Order": [
                {

                }
            ],
            "GroupBy": [
                {}
            ]
        }
    ]
}

//W-01 获取指定月份作业数据
export const W01 = {
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "737ee050-7f45-4dc7-b276-59b410581cc8", // ***业务数据id
            "MasterExtendType": "YWSJ",	//父节点:[/业务数据]
            "NeedFK": "false",			//不需要回传外键 此时已经知道是哪个站点了
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Opetator": {
                        "Operator": "=",
                        "Value": "737ee050-7f45-4dc7-b276-59b410581cc8"  // ***业务数据id
                    },
                    "LogicOperator": "AND"
                },
                {
                    "Type": "Condition",
                    "Key": "timestamp",
                    "Operator": {
                        "Operator": "like",			//模糊匹配
                        "Value": "201909%"			//年-月
                    }
                }
            ],
            "Order": [
                {
                    "Key": "ext_data.create_at",
                    "Order": "ASC"
                }
            ],
            "GroupBy": [
                {}
            ]
        }
    ]
}

//W-03 新建残枝作业  
export const W03 =
{
    "JobType": "single",
    // "JobHandler": "CZZYHandler",  		//残枝作业handler
    "JobHandler": "",
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "737ee050-7f45-4dc7-b276-59b410581cc8",  // ***
            "MasterExtendType": "YWSJ",	//父节点:[/业务数据]
            "Object": {
                "ExtendType": "CZZY",		//新建节点:[/残枝作业]
                "ExtendData": {
                    "pyzd_spaid": "10e489cb-aa38-47fa-ae49-fef7c2296977",	//所属培育站点 外键 
                    "timestamp": "2019102612",	//年-月-日-小时
                    "comment": ""
                }
            }
        }
    ]
}

//W-04 删除残枝作业

export const W04 = {

}
//A-01 获取指定作业的活动 
export const A01 =
{
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "MasterId",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "NeedFK": "false",				//无需回传外键 此时已经知道是哪个残枝作业
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Opetator": {
                        "Operator": "=",
                        "Value": "MasterId"
                    }
                }
            ],
            "Order": [
                {
                    "Key": "",
                    "Order": ""
                }
            ],
            "GroupBy": [
                {}
            ]
        }
    ]
}

// A-02 新建首次暂养活动

export const A02 =
{
    "JobType": "single",
    "JobHandler": "CZHDHandler",		//残枝活动Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "czzy_spaid",		//所属残枝作业的spaid
                    "timestamp": "2019090910",
                    "type": "首次暂养",
                    "code": "1",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "张三 李四",		//参与人员
                    "activity_number": "A1-深圳大澳湾-2019090919",	//活动编号
                    "comment": ""
                }
            }
        }
    ]
}
//A-03 新建暂养巡检活动  
export const A03 =
{
    "JobType": "single",
    "JobHandler": "CZHDHandler",		//残枝活动Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//子节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "czzy_spaid",		//所属残枝作业的spaid
                    "timestamp": "2019090910",
                    "type": "暂养巡检",
                    "code": "2",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "张三 李四",		//参与人员
                    "activity_number": "A1-深圳大澳湾-2019090919",	//活动编号
                    "comment": ""
                }
            }
        }
    ]
}

//A-04 新建首次回播活动
export const A04 =

{
    "JobType": "single",
    "JobHandler": "CZHDHandler",		//残枝活动Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "czzy_spaid",		//所属残枝作业的spaid
                    "timestamp": "2019090910",
                    "type": "首次回播",
                    "code": "3",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "张三 李四",		//参与人员
                    "activity_number": "A1-深圳大澳湾-2019090919",	//活动编号
                    "comment": ""
                }
            }
        }
    ]
}
//A-05 新建回播巡检活动
export const A05 =

{
    "JobType": "single",
    "JobHandler": "CZHDHandler",		//残枝活动Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "czzy_spaid",		//所属残枝作业的spaid
                    "timestamp": "2019090910",
                    "type": "回播巡检",
                    "code": "4",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "张三 李四",		//参与人员
                    "activity_number": "A1-深圳大澳湾-2019090919",	//活动编号
                    "comment": ""
                }
            }
        }
    ]
}
//A-06 更新活动
export const A06 =



{
    "JobType": "flow",
    "JobHandler": "CZHDHandler",		//残枝活动Handler
    "Jobs": [
        {
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZZY",	//父节点:[/残枝作业]
            "Object": {
                "SpaId": "spaid",		//与新建不同，更新活动要在此字段提供spaid
                "ExtendType": "CZHD",	//残枝活动	
                "ExtendData": {
                    "czzy_spaid": "czzy_spaid",		//所属残枝作业的spaid
                    "timestamp": "2019090910",
                    "type": "首次暂养/暂养巡检/首次回播/回播巡检",
                    "code": "1/2/3/4",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "张三 李四",		//参与人员
                    "comment": ""
                }
            }
        }
    ]
}
//D-01 获取指定残枝档案
export const D01 = {
    JobType: "single",
    Jobs: [
        {
            Method: "select",
            CZDASpaId: "czdaspaid",	//要查询的残枝档案spaid
            NeedFK: "true",			//需要回传外键 
            Where: [
                {
                    Type: "Condition",
                    Key: "spa_id",
                    Operator: {
                        "Operator": "=",
                        "Value": "czdaspaid"
                    }
                }
            ],
            Order: [
                {}
            ],
            GroupBy: [
                {}
            ]
        }
    ]
}

// D-02 获取所有残枝档案
export const D02 = {
    JobType: "single",
    Jobs: [
        {
            Method: "select",
            MasterSpaId: "MasterId",
            MasterExtendType: "CZDAROOT",	//父节点:[/残枝档案]
            NeedFK: "false",			//不需要回传外键 需要残枝档案详情的话再发请求
            Where: [
                {
                    Type: "Condition",
                    Key: "spa_id",
                    Opetator: {
                        "Operator": "=",
                        "Value": "MasterId"
                    }
                }
            ],
            Order: [
                {
                    Key: "",
                    Order: ""
                }
            ],
            GroupBy: [
                {}
            ]
        }
    ]
}
//D-03 获取满足指定条件的档案的数量
export const D03 = {}
//D-04 创建残枝档案
export const D04 =
{
    "JobType": "flow",
    "JobHandler": "CZDAHandler",
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//D-05 更新残枝档案  
export const D05 =

{
    "JobType": "flow",
    "JobHandler": "CZDAHandler",
    "Jobs": [
        {
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "SpaId": "spaid",		//更新档案要在此字段提供spaid
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//D-06 删除残枝档案  
export const D06 = {}
//R-01 获取指定活动下的所有记录
export const R01 =
{
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "MasterId",
            "MasterExtendType": "CZHD",
            "NeedFK": "false",	//不回传外键
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Opetator": {
                        "Operator": "=",
                        "Value": "MasterId"
                    }
                }
            ],
            "Order": [
                {
                    "Key": "",
                    "Order": ""
                }
            ],
            "GroupBy": [
                {}
            ]
        }
    ]
}
//R-02 获取指定残枝的最新记录  
export const R02 = {
    "JobType": "flow",
    "Jobs": [
        {
            "Method": "selectone",		//返回第一条记录
            "MasterSpaId": "MasterId",
            "MasterExtendType": "CZHD",	//残枝活动
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Opetator": {
                        "Operator": "=",
                        "Value": "MasterId"
                    }
                }
            ],
            "Order": [
                {
                    "Key": "ext_data.create_at",
                    "Order": "DESC"
                }
            ],
            "GroupBy": [
                {}
            ]
        }
    ]
}
//R-03 新建首次暂养记录
export const R03 =

{
    "JobType": "flow",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {							//创建首次暂养记录之前必须先创建残枝档案
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        },
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",
            "Object": {
                "ExtendType": "CZJL",	//残枝记录	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//所属残枝活动的spaid
                    "czda_spaid": "czda_spaid",		//所属残枝（档案）的spaid
                    "timestamp": "2019090910",
                    "stage": "",						//残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
                }
            }
        }
    ]
}
//R-04 新建暂养巡检记录
export const R04 =
{
    "JobType": "flow",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",
            "Object": {
                "ExtendType": "CZJL",	//残枝记录	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//所属残枝活动的spaid
                    "czda_spaid": "czda_spaid",		//所属残枝（档案）的spaid
                    "timestamp": "2019090910",
                    "status": "",						//残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
                }
            }
        },
        {							//创建记录必须要更新档案
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//R-05 新建首次回播记录
export const R05 =

{
    "JobType": "flow",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",
            "Object": {
                "ExtendType": "CZJL",	//残枝记录	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//所属残枝活动的spaid
                    "czda_spaid": "czda_spaid",		//所属残枝（档案）的spaid
                    "timestamp": "2019090910",
                    "stage": "",						//残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
                }
            }
        },
        {							//创建记录必须要更新档案
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//R-06 新建回播巡检记录
export const R06 =

{
    "JobType": "flow",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",
            "Object": {
                "ExtendType": "CZJL",	//残枝记录	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//所属残枝活动的spaid
                    "czda_spaid": "czda_spaid",		//所属残枝（档案）的spaid
                    "timestamp": "2019090910",
                    "stage": "",						//残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
                }
            }
        },
        {							//创建记录必须要更新档案
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//R-07 更新记录
export const R07 =

{
    "JobType": "flow",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",
            "Object": {
                "ExtendType": "CZJL",	//残枝记录	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//所属残枝活动的spaid
                    "czda_spaid": "czda_spaid",		//所属残枝（档案）的spaid
                    "timestamp": "2019090910",
                    "stage": "",						//残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
                }
            }
        },
        {							//如果更新是最新的记录就必须同步更新档案
            "Method": "update",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "mengang_spaid": "",
                    "muke_spaid": "",
                    "shuzhong_spaid": "",
                    "pyzd_spaid": "",
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",
                    "miaopu_spaid": "",
                    "fenqu_spaid": "",
                    "yangxian_spaid": "",
                    "fenduan_spaid": "",
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": ""
                }
            }
        }
    ]
}
//R-08 删除指定记录
export const R08 = {}






