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
  extendData.czzy_spaid = spaid;
  extendData.timestamp = activityArr[2];
  extendData.type = options.activityType;
  extendData.code = activityArr[0][1];
  extendData.participants = options.members;
  extendData.activity_number = options.activityNum;
  extendData.comment = options.remarks;
  return newObj;
}
