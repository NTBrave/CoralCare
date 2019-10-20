
export const searchData = {
    JobType: "flow",
    Jobs: [
        {
            Method: "ChildSelect", // PlainSelect
            MasterSpaId: "MasterId",
            MasterExtendType: "YWSJ",
            Where: [
                {
                    Type: "Bracket",
                    Conditions: [
                        {
                            Key: "ExtendType",
                            Operator: {
                                "Operator": "=",
                                "Value": "CZZY"
                            },
                            LogicOperator: "AND"
                        },
                        {
                            Key: "ExtendData.create_at",
                            Operator: {
                                "Operator": "<",
                                "Value": "2019-10-1"
                            }
                        }
                    ],
                    LogicOperator: "OR"
                },
                {
                    Type: "Condition",
                    Key: "ExtendType",
                    Operator: {
                        Operator: "=",
                        Value: "CZZY"
                    }
                }
            ],
            Order: [
                {
                    Key: "ExtendData.create_at",
                    Order: "DESC"
                },
                {}
            ],
            GroupBy: [
                {}
            ]
        }
    ]
}


//Where (ExtendType=’CZZY’ AND ExtendData.create_at <‘2019-10-1’)  OR ExtendType=’***’
export const operatorData = {

    JobType: "flow",
    JobHandler: "SCZYHandler",
    Jobs: [
        {
            Method: "create",
            MasterSpaId: "MasterId",
            MasterExtendType: "CZDAROOT",
            Object: {
                ExtendType: "CZDA",
                ExtendData: {
                    haopai_color: "",
                    haopai_number: "",
                    mengang_spaid: "",
                    muke_spaid: "",
                    shuzhpng_spaid: "",
                    zhandian_spaid: "",
                    quyu_spaid: "",
                    miaopu_spaid: "",
                    fenqu_spaid: ""

                }
            }
        },
        {
            Method: "create",
            MasterSpaId: "MasterId",
            MasterExtendType: "SCZY",
            object: {
                ExtendType: "CZJL",
                ExtendData: {
                    czhd_spaid: "",
                    czzt: "",
                    color_shallow: "",
                    color_deep: ""
                }
            }
        }

    ]
}
