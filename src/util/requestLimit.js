/**
 * @description: ,
 * @version: V1.0,
 * @date: ,
 * @author: czb,
*/

/**
 * 防抖
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate
 */

// 立即执行
// export function debounce(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     let args = arguments;

//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     let callNow = !timeout;
//     timeout = setTimeout(() => {
//       timeout = null;
//     }, wait);

//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// }

// 非立即执行
// export function debounce(func, wait) {
//   let timeout;
//   //   console.log(this);
//   return function() {
//     let context = this;
//     console.log(context);
//     let args = arguments;
//     console.log(args);

//     if (timeout) clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// true表示立即执行，false表非立即执行
export function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}
