/**
 * @description: 判断一个对象里面是否有某个属性为空,
 * @version: V1.0,
 * @date: ,
 * @author: czb,
*/
export function objIsEmpty(obj) {
  let empty;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === "") {
        empty = true;
        break;
      } else if (obj[key] instanceof Object) {
        empty = objIsEmpty(obj[key]);
      } else {
        empty = false;
      }
    }
  }
  return empty;
}
