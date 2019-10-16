import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
// 配置到Vue中
Vue.use(ElementUI);
// 引入css
import "./assets/css/test.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");