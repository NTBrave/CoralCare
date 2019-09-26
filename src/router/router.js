import Vue from "vue";
import Router from "vue-router";
import Home from "../home/home";

Vue.use(Router);

export default new Router({
  mode: "hash",
  // 	base: '/tool/',
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
      // children: [
      // 	{ path: 'activity', component: Activity }
      // ]
    },
    {
      path: "/",
      name: "index",
      redirect: "/home"
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("../pages/manage"),
      children: [
        {
          path: "/manage/main",
          name: "main",
          alias: "/manage",
          component: () => import("../pages/coralWork.vue")
        },
        // {
        //   path: "/manage/doc",
        //   name: "doc",
        //   component: () => import("../pages/doc.vue")
        // },
        {
          //需要跳转的页面
          path: "/manage/search",
          name: "search",
          component: () => import("../pages/search.vue")
        },
        // {
        //   //需要跳转的页面
        //   path: "/manage/file",
        //   name: "file",
        //   component: () => import("../pages/file")
        // },
        {
          path: "/manage/user",
          name: "user",
          component: () => import("../pages/user.vue")
        },

        {
          // path: "/manage/coralWork",
          // name: "coralWork",
          // component: () => import("../pages/coralWork.vue")
          path: "/manage/dayActivity",
          name: "dayActivity",
          component: () => import("../pages/DayActivity.vue")
        },

        {
          path: "/manage/coralManage",
          name: "coralManage",
          component: () => import("../pages/coralManage.vue")
        },
        {
          path: "/manage/area",
          name: "area",
          component: () => import("../pages/area.vue")
        },
        {
          path: "/manage/chart",
          name: "doc",
          component: () => import("../pages/chart.vue")
        }
      ]
    }
  ]
});
