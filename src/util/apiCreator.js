// import * as entity from "../json/entity";

// // 深拷贝
// function deepCopy(obj) {
//   var result = Array.isArray(obj) ? [] : {};
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         result[key] = deepCopy(obj[key]); //递归复制
//       } else {
//         result[key] = obj[key];
//       }
//     }
//   }
//   return result;
// }

// export function select(reqObj, options) {
//   let newObj = deepCopy(reqObj);
//   newObj.Jobs[0].MasterSpaId = options.MasterSpaId;
//   newObj.Jobs[0].Where[0].Operator.Value = options.Value;
//   return newObj;
// }

// export function add(reqObj, options){
//     let newObj = deepCopy(reqObj);

// }
