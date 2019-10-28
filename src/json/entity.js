

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
            "MasterSpaId": "",
            "MasterExtendType": "YWSJ",
            "NeedFK": "false",
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "master_id",
                    "Operator": {
                        "Operator": "=",
                        "Value": ""
                    },
                    "LogicOperator": "AND"
                },
                {
                    "Type": "Condition",
                    "Key": "ext_data.timestamp",
                    "Operator": {
                        "Operator": "like",
                        "Value": ""
                    }
                }
            ],
            "Order": [
                {
                    "Key": "ext_data.timestamp",
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
            "MasterSpaId": "",  // ***
            "MasterExtendType": "YWSJ",	//父节点:[/业务数据]
            "Object": {
                "ExtendType": "CZZY",		//新建节点:[/残枝作业]
                "ExtendData": {
                    "pyzd_spaid": "",	//所属培育站点 外键 
                    "timestamp": "",	//年-月-日-小时
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
                    "Operator": {
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
            "MasterSpaId": "",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "",		//所属残枝作业的spaid
                    "timestamp": "",
                    "type": "",
                    "code": "",		//1-首次暂养/2-暂养巡检/3-首次回播/ 4-回播巡检
                    "participants": "",		//参与人员
                    "activity_number": "",	//活动编号
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
            "MasterSpaId": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//子节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",		//所属残枝作业的spaid
                    "timestamp": "2019090918",
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
            "MasterSpaId": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",		//所属残枝作业的spaid
                    "timestamp": "2019090918",
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
            "MasterSpaId": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",
            "MasterExtendType": "CZZY",		//父节点:[/残枝作业]
            "Object": {
                "ExtendType": "CZHD",	//新建节点:[/残枝活动]	
                "ExtendData": {
                    "czzy_spaid": "297841a9-eb29-4d45-aa3a-9a41c8c78e92",		//所属残枝作业的spaid
                    "timestamp": "2019090918",
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
            "MasterSpaId": "40729f96-9484-411b-b706-00925362e1f7",
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
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "40729f96-9484-411b-b706-00925362e1f7",
            "MasterExtendType": "CZDAROOT",
            "NeedFK": "true",
            "Where": [

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
            "MasterSpaId": "40729f96-9484-411b-b706-00925362e1f7",
            "MasterExtendType": "CZDAROOT",
            "Object": {
                "SpaId": "spaid",		//更新档案要在此字段提供spaid
                "ExtendType": "CZDA",
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "order_spaid": "",		//外键 所属珊瑚目
                    "family_spaid": "",		//外键 所属珊瑚科
                    "genus_spaid": "",		//外键 所属珊瑚属
                    "pyzd_spaid": "",	//外键 所属培育站点
                    "stage": "",		//培育阶段 暂养|回播
                    "quyu_spaid": "",		//外键 所属采集区域
                    "miaopu_spaid": "",		//外键 所属（暂养）苗圃
                    "fenqu_spaid": "",		//外键 所属（暂养）分区
                    "yangxian_spaid": "",	//外键 所属（回播）样线
                    "fenduan_spaid": "",		//外键 所属（回播）分段
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": "",
                    "comment": ""
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
                    "Operator": {
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
            "Method": "select",
            "MasterSpaId": "",
            "MasterExtendType": "",
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "ext_data.czda_spaid",
                    "Operator": {
                        "Operator": "=",
                        "Value": ""
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
    "JobHandler": "SCZYJobHandler",		//残枝记录Handler
    "Jobs": [
        {							//创建首次暂养记录之前必须先创建残枝档案
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZDAROOT",		//父节点:[/残枝档案]
            "Object": {
                "ExtendType": "CZDA",			//新建节点:[/残枝1]
                "ExtendData": {
                    "haopai_color": "",
                    "haopai_number": "",
                    "order_spaid": "",		//外键 所属珊瑚目
                    "family_spaid": "",		//外键 所属珊瑚科
                    "genus_spaid": "",		//外键 所属珊瑚属
                    "pyzd_spaid": "",	//外键 所属培育站点
                    "stage": "暂养",		//培育阶段 暂养|回播
                    "quyu_spaid": "",		//外键 所属采集区域
                    "miaopu_spaid": "",		//外键 所属（暂养）苗圃
                    "fenqu_spaid": "",		//外键 所属（暂养）分区
                    "yangxian_spaid": "",	//外键 所属（回播）样线
                    "fenduan_spaid": "",		//外键 所属（回播）分段
                    "starred": "",	//是否关注 0 1
                    "ended": "",		//是否完结 0 1
                    "label": "",
                    "comment": ""
                }
            }
        },
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZHD",			//父节点:[/残枝活动]
            "Object": {
                "ExtendType": "CZJL",			//新建节点:[/残枝记录]	
                "ExtendData": {
                    "czhd_spaid": "czhd_spaid",		//外键 所属残枝活动
                    "timestamp": "",
                    "status": "部分白化",			 //残枝状态
                    "lightest_color": "",			//颜色-最浅
                    "darkest_color": "",				//颜色-最深
                    "height_area_both": "2",			//高度/面积/两者 0 1 2
                    "height": "",
                    "area": "",
                    "comment": ""
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
    "JobType": "single",
    "JobHandler": "CZJLHandler",		//残枝记录Handler
    "Jobs": [
        {
            "Method": "update",
            "MasterSpaId": "",
            "MasterExtendType": "CZHD",		//父节点:[/残枝活动]
            "Object": {
                "SpaId": "",					//要更新的节点spaid
                "ExtendType": "CZJL",		//新建节点:[/残枝记录]	
                "ExtendData": {
                    "czhd_spaid": "",
                    "czda_spaid": "",
                    "timestamp": "",
                    "status": "",
                    "lightest_color": "",
                    "darkest_color": "",
                    "height_area_both": "",
                    "height": "",
                    "area": "",
                    "comment": ""
                },
                // "UpdateExtendData": {
                //     "haopai_color": "",
                //     "haopai_number": "",
                //     "order_spaid": "",		//外键 所属珊瑚目
                //     "family_spaid": "",		//外键 所属珊瑚科
                //     "genus_spaid": "",		//外键 所属珊瑚属
                //     "pyzd_spaid": "",	//外键 所属培育站点
                //     "stage": "",		//培育阶段 暂养|回播
                //     "quyu_spaid": "",		//外键 所属采集区域
                //     "miaopu_spaid": "",		//外键 所属（暂养）苗圃
                //     "fenqu_spaid": "",		//外键 所属（暂养）分区
                //     "yangxian_spaid": "",	//外键 所属（回播）样线
                //     "fenduan_spaid": "",		//外键 所属（回播）分段
                //     "starred": "",	//是否关注 0 1
                //     "ended": "",		//是否完结 0 1
                //     "label": "",
                //     "comment": ""
                // }
            }
        }
    ]

}
//R-08 删除指定记录
export const R08 = {}

//P-01 新建残枝照片节点
export const P01 = {
    "JobType": "single",
    "JobHandler": "CZZPHandler",  		//残枝照片handler
    "Jobs": [
        {
            "Method": "create",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZJL",	//父节点:[/残枝记录]
            "Object": {
                "ExtendType": "CZZP",		//新建节点:[/残枝照片]
                "ExtendData": {
                    "czjl_spaid": "",
                    "czda_spaid": "",
                    "comment": ""
                },
                "ExtendFileData": {
                    "file_id": "url",		//照片在minio里的url
                    "mine_type": "",			//文件类型 jpeg png等
                    "thumbnail": "url"		//缩略图路径
                }
            }
        }
    ]
}

//P-02 获取残枝图片节点
export const P02 = {
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "CZZPSpaId": "czzp_spaid",		//残枝照片的spaid
            "NeedFK": "false",				//不回传外键 
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Operator": {
                        "Operator": "=",
                        "Value": "czzp_spaid"
                    }
                }
            ]
        }
    ]
}

// P-03 删除残枝图片节点
export const P03 = {
    "JobType": "single",
    "JobHandler": "CZZPHandler",		//残枝照片Handler
    "Jobs": [
        {
            "Method": "delete",
            "MasterSpaId": "masterid",
            "MasterExtendType": "CZJL",		//父节点:[/残枝记录]
            "Object": {
                "SpaId": "spaid",			//要删除的节点spaid
                "ExtendType": "CZZP"			//删除节点:[/残枝照片]	
            }
        }
    ]
}

// 获取珊瑚品种
export const species_01 = {
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "7270dc1d-3aab-418f-995b-9bfbf7075288",
            "MasterExtendType": "SHPZ",
            "NeedFK": "false",
            "Where": [

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

// 获取暂养区域的苗圃分区
export const ZYQY_01 = {
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "",
            "MasterExtendType": "",
            "NeedFK": "false",
            "Where": [

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

//获取记录的活动数据
export const AA_01 = {
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "",
            "MasterExtendType": "",
            "NeedFK": "false",
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Operator": {
                        "Operator": "=",
                        "Value": ""//czjl_spaid
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

//R-01 获取指定记录下的所有图片
export const P04 =
{
    "JobType": "single",
    "Jobs": [
        {
            "Method": "select",
            "MasterSpaId": "MasterId",//记录SpaId
            "MasterExtendType": "CZJL",
            "NeedFK": "false",	//不回传外键
            "Where": [
                {
                    "Type": "Condition",
                    "Key": "spa_id",
                    "Operator": {
                        "Operator": "=",
                        "Value": "MasterId"//记录SpaId
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




