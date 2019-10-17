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
        // 详情页
        {
          path: "/details",
          component: () => import("./components/details.vue")
        },
        {
          path: "/themeeting",
          component: () => import("./components/themeeting.vue")
        },
        // 会议机构
        {
          path: "/cooperation",
      component: () => import("./components/org.vue")
        }
      ]
    },
    {
      path: "/register",
      component: () => import("./components/register.vue")
    },  {
      path: "/login",
      component: () => import("./components/login.vue")
    }
  ]
});
