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

// 用户模块
// U1	新建用户
export const newUser = (work_no, username, password, email) => {
  // console.log( work_no, username,password,email);
  return new axios({
    url: baseUrl + "/users",
    data: {
      work_no: work_no,
      username: username,
      password: password,
      email: email
    },
    method: POST
  });
};

// U2	用户登录
export const Login = (work_no, password) => {
  return new axios({
    url: baseUrl + "/login",
    data: {
      work_no: work_no,
      password: password
    },
    method: POST
  });
};

// U3	获取用户元数据
export const getUser = () => {
  return new axios({
    url: baseUrl + "/users/current",
    method: GET
  });
};

// U4	注销登录
export const Logout = () => {
  return new axios({
    url: baseUrl + "/users/logout",
    method: POST
  });
};

// 检索相关

// S1	搜索建议
export const Suggestions = (type, keyword, size) => {
  return new axios({
    url:
      baseUrl +
      "/search/suggestions?type=" +
      type +
      "&keyword=" +
      keyword +
      "&size=" +
      size,
    method: GET
  });
};

// S2	获取高度相关的类目标签
export const Associations = (keyword, tag_count, category_count) => {
  return new axios({
    url:
      baseUrl +
      "/search/associations?keyword=" +
      keyword +
      "&tag_count=" +
      tag_count +
      "&category_count=" +
      category_count,
    method: GET
  });
};

// S3	搜索结果
export const Results = (
  type,
  keyword,
  tags,
  categories,
  exts,
  created_time,
  modified_time,
  time_zone,
  page,
  per_page
) => {
  // console.log(type, keyword, tags, categories, exts, created_time, modified_time, time_zone, page, per_page);
  return new axios({
    url: baseUrl + "/search/results",
    data: {
      type: type,
      keyword: keyword,
      tags: tags,
      categories: categories,
      exts: exts,
      created_time: created_time,
      modified_time: modified_time,
      time_zone: time_zone,
      page: page,
      per_page: per_page,
      desc_highlight_count: 2,
      content_highlight_count: 5,
      highlight_tag: "em"
    },
    method: POST
  });
};

// S4	搜索类目或标签
export const Tags = (keyword, size) => {
  return new axios({
    url: baseUrl + "/search/tags?keyword=" + keyword + "&size=" + size,
    method: GET
  });
};
export const Categories = (keyword, size) => {
  return new axios({
    url: baseUrl + "/search/categories?keyword=" + keyword + "&size=" + size,
    method: GET
  });
};

//
