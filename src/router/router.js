import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "hash",
  // 	base: '/tool/',
  routes: [
    {
      path: "/login",
      name: "home",
      meta: { requireAuth: false },

      component: () => import("../pages/login")
      // children: [
      // 	{ path: 'activity', component: Activity }
      // ]
    },
    {
      path: "/",
      name: "login",
      redirect: "/login",
      meta: { requireAuth: true }
    },
    {
      path: "/manage",
      name: "manage",
      meta: { requireAuth: true },
      component: () => import("../pages/manage"),

      children: [
        {
          path: "/manage/main",
          name: "main",
          alias: "/manage",
          component: () => import("../pages/coralWelcome.vue")
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
          // path: "/manage/coralWelcome",
          // name: "coralWelcome",
          // component: () => import("../pages/coralWelcome.vue")
          path: "/manage/coralBreed/dayActivity",
          name: "dayActivity",
          meta: { keepAlive: true },
          component: () => import("../pages/coralBreed/DayActivity.vue")
        },

        {
          path: "/manage/coralBreed/newActivity",
          name: "newActivity",
          component: () => import("../pages/coralBreed/NewActivity.vue")
        },
        {
          path: "/manage/coralBreed/newActivity/:ActivityType",
          name: "activityType",
          component: () => import("../pages/coralBreed/ActivitySelect.vue"),

          children: [
            {
              path: "/manage/coralBreed/newActivity/A1/:build",
              name: "buildA1",
              component: () => import("../pages/coralBreed/CreateA1.vue")
            },
            {
              path: "/manage/coralBreed/A1/:result",
              name: "resultA1",
              component: () => import("../pages/coralBreed/SuccessA1.vue")
            },
            {
              path: "/manage/coralBreed/newActivity/A2/:build",
              name: "buildA2",
              component: () => import("../pages/coralBreed/CreateA2.vue")
            },
            {
              path: "/manage/coralBreed/A2/:result",
              name: "resultA2",
              component: () => import("../pages/coralBreed/SuccessA2.vue")
            },
            {
              path: "/manage/coralBreed/newActivity/A3/:build",
              name: "buildA3",
              component: () => import("../pages/coralBreed/CreateA3.vue")
            },
            {
              path: "/manage/coralBreed/A3/:result",
              name: "resultA3",
              component: () => import("../pages/coralBreed/SuccessA3.vue")
            },
            {
              path: "/manage/coralBreed/newActivity/A4/:build",
              name: "buildA4",
              component: () => import("../pages/coralBreed/CreateA4.vue")
            },
            {
              path: "/manage/coralBreed/A4/:result",
              name: "resultA4",
              component: () => import("../pages/coralBreed/SuccessA4.vue")
            }
          ]
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
          name: "chart",
          component: () => import("../pages/chart.vue")
        }
      ]
    }
  ]
});
