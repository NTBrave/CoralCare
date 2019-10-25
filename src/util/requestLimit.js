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

export function debounce(func, wait) {
  let timeout;
  //   console.log(this);
  return function(a, b) {
    let context = this;
    console.log(context);
    let args = arguments;
    console.log(args);

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
