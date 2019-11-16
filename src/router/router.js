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
      component: () => import("../pages/login"),
      // children: [
      // 	{ path: 'activity', component: Activity }
      // ]
    },
    {
      path: "/",
      name: "login",
      redirect: "/login"
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("../pages/manage"),
      meta: {
        title: '登陆',
        type: 'login'
      },

      children: [
        {
          path: "/manage/main",
          name: "main",
          alias: "/manage",
          component: () => import("../pages/coralWelcome.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
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
          component: () => import("../pages/search.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
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
          component: () => import("../pages/user.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        },

        {
          // path: "/manage/coralWelcome",
          // name: "coralWelcome",
          // component: () => import("../pages/coralWelcome.vue")
          path: "/manage/coralBreed/dayActivity",
          name: "dayActivity",
          component: () => import("../pages/coralBreed/DayActivity.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        },

        {
          path: "/manage/coralBreed/newActivity",
          name: "newActivity",
          component: () => import("../pages/coralBreed/NewActivity.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        },
        {
          path: "/manage/coralBreed/newActivity/:ActivityType",
          name: "activityType",
          component: () => import("../pages/coralBreed/ActivitySelect.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
          children: [
            {
              path: "/manage/coralBreed/newActivity/A1/:build",
              name: "buildA1",
              component: () => import("../pages/coralBreed/CreateA1.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/A1/:result",
              name: "resultA1",
              component: () => import("../pages/coralBreed/SuccessA1.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/newActivity/A2/:build",
              name: "buildA2",
              component: () => import("../pages/coralBreed/CreateA2.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/A2/:result",
              name: "resultA2",
              component: () => import("../pages/coralBreed/SuccessA2.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/newActivity/A3/:build",
              name: "buildA3",
              component: () => import("../pages/coralBreed/CreateA3.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/A3/:result",
              name: "resultA3",
              component: () => import("../pages/coralBreed/SuccessA3.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/newActivity/A4/:build",
              name: "buildA4",
              component: () => import("../pages/coralBreed/CreateA4.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            },
            {
              path: "/manage/coralBreed/A4/:result",
              name: "resultA4",
              component: () => import("../pages/coralBreed/SuccessA4.vue"),
              meta: {
                title: '登陆',
                type: 'login'
              },
            }
          ]
        },
        {
          path: "/manage/coralManage",
          name: "coralManage",
          component: () => import("../pages/coralManage.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        },
        {
          path: "/manage/area",
          name: "area",
          component: () => import("../pages/area.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        },
        {
          path: "/manage/chart",
          name: "chart",
          component: () => import("../pages/chart.vue"),
          meta: {
            title: '登陆',
            type: 'login'
          },
        }
      ]
    }
  ]
});
