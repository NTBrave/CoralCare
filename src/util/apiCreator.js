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

export function requestSpecies(reqObj, spaid, extendType) {
  let newObj = deepCopy(reqObj);
  newObj.Jobs[0].MasterSpaId = spaid;
  newObj.Jobs[0].MasterExtendType = extendType;
  return newObj;
}

export function createR03(
  reqObj,
  MasterSpaId_1,
  MasterSpaId_2,
  ZD_spaid,
  // CZHD_spaid,
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
