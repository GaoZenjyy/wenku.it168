import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/different",
      component: Home,
      children: [
        // 首页
        {
          path: "/different",
          component: () => import("./components/Different.vue")
        },
        {
          path: "/classification",
          component: () => import("./components/classification.vue")
        },
        {
          path: "/details",
          component: () => import("./components/details.vue")
        },
        // 会议路由
        {
          path: "/themeeting",
          component: () => import("./components/themeeting.vue")
        }
      ]
    },
    {
      path: "/register",
      component: () => import("./components/register.vue")
    }
  ]
});
