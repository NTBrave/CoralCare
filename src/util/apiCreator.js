// import * as entity from "../json/entity";

// 深拷贝
function deepCopy(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = deepCopy(obj[key]); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

// export function select(reqObj, options) {
//   let newObj = deepCopy(reqObj);
//   newObj.Jobs[0].MasterSpaId = options.MasterSpaId;
//   newObj.Jobs[0].Where[0].Operator.Value = options.Value;
//   return newObj;
// }

export function createActivity(reqObj, spaid, options) {
  let newObj = deepCopy(reqObj);
  let extendData = newObj.Jobs[0].Object.ExtendData;
  let activityArr = options.activityNum.split("-");
  newObj.Jobs[0].MasterSpaId = spaid;
  extendData.czzy_spaid = spaid;
  extendData.timestamp = activityArr[2];
  extendData.type = options.activityType;
  extendData.code = activityArr[0][1];
  extendData.participants = options.members;
  extendData.activity_number = options.activityNum;
  extendData.comment = options.remarks;
  return newObj;
}

// 获取珊瑚品种
export function requestSpecies(reqObj, spaid, extendType) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = spaid;
  newObj.Jobs[0].MasterExtendType = extendType;
  return newObj;
}

// 获取暂养区域苗圃分区/回播区域样线分段
export function requestZYQY_HBQY(reqObj, spaid, extendType) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = spaid;
  newObj.Jobs[0].MasterExtendType = extendType;
  return newObj;
}

// // 获取回播区域样线分段
// export function requestHBQY(reqObj, spaid, extendType){
//   let newObj = deepCopy(reqObj);
//   new
// }

// 新增首次暂养记录
export function createR03(
  reqObj,
  MasterSpaId_1,
  MasterSpaId_2,
  ZD_spaid,
  timestamp,
  fileForm,
  recordForm
) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = MasterSpaId_1;
  newObj.Jobs[1].MasterSpaId = MasterSpaId_2;

  let extendData_1 = newObj.Jobs[0].Object.ExtendData;
  extendData_1.haopai_color = fileForm.signColor;
  extendData_1.haopai_number = fileForm.signNumber;
  extendData_1.order_spaid = fileForm.species.first;
  extendData_1.family_spaid = fileForm.species.second;
  extendData_1.genus_spaid = fileForm.species.third;
  extendData_1.pyzd_spaid = ZD_spaid;
  extendData_1.quyu_spaid = fileForm.breedArea.firstArea;
  extendData_1.miaopu_spaid = fileForm.breedArea.nursery;
  extendData_1.fenqu_spaid = fileForm.breedArea.partition;

  let extendData_2 = newObj.Jobs[1].Object.ExtendData;
  // extendData_2.czhd_spaid = CZHD_spaid;
  extendData_2.czhd_spaid = MasterSpaId_2;

  extendData_2.timestamp = timestamp;
  extendData_2.status = recordForm.state;
  extendData_2.lightest_color = recordForm.coralColor.shallowColor;
  extendData_2.darkest_color = recordForm.coralColor.deepColor;
  extendData_2.comment = recordForm.remark;

  return newObj;
}

// 新建暂养巡检记录/回播巡检记录
export function createR04_06(
  reqObj,
  czhd_spaid,
  czda_spaid,
  timestamp,
  recordForm
) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = czhd_spaid;
  let obj = newObj.Jobs[0].Object.ExtendData;
  obj.czhd_spaid = czhd_spaid;
  obj.czda_spaid = czda_spaid;
  obj.timestamp = timestamp;
  obj.status = recordForm.state;
  obj.lightest_color = recordForm.coralColor.shallowColor;
  obj.darkest_color = recordForm.coralColor.deepColor;
  obj.comment = recordForm.remark;
  return newObj;
}

// 新建首次回播记录
export function createR05(
  reqObj,
  czhd_spaid,
  czdaroot_spaid,
  czda_spaid,
  ZD_spaid,
  timestamp,
  sowForm,
  recordForm
) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = czhd_spaid;
  newObj.Jobs[1].MasterSpaId = czdaroot_spaid;

  let extendData_1 = newObj.Jobs[0].Object.ExtendData;
  extendData_1.czhd_spaid = czhd_spaid;
  extendData_1.czda_spaid = czda_spaid;
  extendData_1.timestamp = timestamp;
  extendData_1.status = recordForm.state;
  extendData_1.lightest_color = recordForm.coralColor.shallowColor;
  extendData_1.darkest_color = recordForm.coralColor.deepColor;
  extendData_1.comment = recordForm.remark;

  let extendData_2 = newObj.Jobs[1].Object.ExtendData;
  newObj.Jobs[1].Object.SpaId = czda_spaid;
  extendData_2.haopai_color = sowForm.signColor;
  extendData_2.haopai_number = sowForm.signNumber;
  extendData_2.pyzd_spaid = ZD_spaid;
  extendData_2.yangxian_spaid = sowForm.sowArea.line;
  extendData_2.fenduan_spaid = sowForm.sowArea.segmentation;

  return newObj;
}

// 获取指定残枝档案(暂养区域)
export function getCZDA_ZY(reqObj, breedForm) {
  let newObj = deepCopy(reqObj);
  // newObj.Jobs[0].Where[0].Operator.Value = breedForm.breedArea.firstArea;
  newObj.Jobs[0].Where[0].Operator.Value = breedForm.breedArea.nursery;
  newObj.Jobs[0].Where[1].Operator.Value = breedForm.breedArea.partition;
  newObj.Jobs[0].Where[2].Operator.Value = breedForm.signColor;
  newObj.Jobs[0].Where[3].Operator.Value = breedForm.signNumber;
  return newObj;
}

// 获取指定残枝档案(回播区域)
export function getCZDA_HB(reqObj, sowForm) {
  let newObj = deepCopy(reqObj);
  // newObj.Jobs[0].Where[0].Operator.Value = sowForm.sowArea.firstArea;
  newObj.Jobs[0].Where[0].Operator.Value = sowForm.sowArea.line;
  newObj.Jobs[0].Where[1].Operator.Value = sowForm.sowArea.segmentation;
  newObj.Jobs[0].Where[2].Operator.Value = sowForm.signColor;
  newObj.Jobs[0].Where[3].Operator.Value = sowForm.signNumber;
  return newObj;
}
