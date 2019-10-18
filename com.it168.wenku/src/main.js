import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueResource from 'vue-resource'; 
// Vue.use(VueResource)
//引入yy
import axios from "axios";
axios.defaults.baseURL = "http://192.168.86.32:9968/api/v1/";
Vue.prototype.$http = axios;
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.filter('dateFormat', (original) => {
  let date = new Date(original * 1000);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hour = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
})
Vue.filter('dateFormats', (original) => {
  let date = new Date(original * 1000);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hour = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day}`
})
// 配置到Vue中
Vue.use(ElementUI);
// 引入css
import "./assets/css/test.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
