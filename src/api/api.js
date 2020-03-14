/**
 * @description: 统一请求接口 ,
 * @version: V1.0,
 * @date: ,
 * @author: ,
*/

import axios from "axios";
export const GET = "get";
export const POST = "post";
export const PUT = "put";
export const PATCH = "patch";
export const DELETE = "delete";

//当前端配置withCredentials=true时, 后端配置Access-Control-Allow-Origin不能为*, 必须是相应地址
axios.defaults.withCredentials = false;

//昊中
// export const baseUrl = "http://192.168.199.102:9091";
// 苏恒
// export const baseUrl = "http://192.168.199.107:9091";

//阿里云
export const baseUrl = "http://39.108.93.27:9091";
// export const baseUrl = "http://172.17.90.16:9091";

/**
 *   统一请求接口
 */

export const reqApi = (data, url) => {
  // console.log( work_no, username,password,email);
  return new axios({
    url: baseUrl + url,
    data: data,
    headers: { "Content-Type": "application/json" },
    method: POST
  });
};
export const delApi = (data, url) => {
  // console.log( work_no, username,password,email);
  return new axios({
    url: baseUrl + url,
    data: data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    method: DELETE
  });
};

export const mockApi = (data, url) => {
  // console.log( work_no, username,password,email);
  return new axios({
    url: "http://rap2api.taobao.org/app/mock/235164" + url,
    data: data,
    method: POST
  });
};

/**
 *  coralBreed残枝培育部分的接口
 *  username 蔡梓彬
 */

// 进入残枝培育页面时弹出日历抽屉，请求当前月视图有活动的日期
// export const getActivityDays = (yearMonth, address) =>
//   new axios({
//     url: `${baseUrl}/#`,
//     data: {
//       yearMonth,
//       address
//     },
//     method: "###"
//   });

// 创建一次下水作业
// export const newDivingOperation = divingOperation =>
//   new axios({
//     url: `${baseUrl}/#`,
//     data: {
//       timeNum: divingOperation.timeNum,
//       address: divingOperation.address
//     },
//     method: "###"
//   });

// 在一次已创建的下水作业中创建一个活动类型
// export const newActivityType = form =>
//   new axios({
//     url: `${baseUrl}/#`,
//     data: form
//   });

// 创建一个珊瑚档案
// export const newActivityType = form =>
//   new axios({
//     url: `${baseUrl}/#`,
//     data: form
//   });

// 录入或修改一个珊瑚档案
// export const newActivityType = form =>
//   new axios({
//     url: `${baseUrl}/#`,
//     data: form
//   });


