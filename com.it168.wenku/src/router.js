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
      name: "home",
      component: Home,
      children: [
        {
          path: "/classification",
          component:()=>import("./components/classification.vue")
        },
        {
          path:"/details",
          component:()=>import("./components/details.vue")
        },
        // 会议路由
        {
          path:"/themeeting",
          component :() =>import ("./components/themeeting.vue")
        }
      ]
    }
  ]
});
