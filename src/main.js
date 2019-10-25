import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import store from "./store/store";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import Antd from "ant-design-vue";
// import Calendar from "ant-design-vue/lib/calendar";
import "ant-design-vue/dist/antd.css";
// import "ant-design-vue/lib/calendar/style";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import 'echarts/lib/component/toolbox'; //引入工具箱组件
import ECharts from "echarts";
import globalDirective from "./util/directive";
import router from "./router/router";
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.use(ElementUI);
Vue.use(Antd);
// Vue.component(Calendar.name, Calendar);
Vue.component("v-chart", ECharts);
Vue.use(globalDirective);

Vue.prototype.axios = axios;
Vue.prototype.$message = ElementUI.Message;

new Vue({
  router,
  store,
  data: {
    // eventHub: new Vue()
  },
  render: h => h(App)
}).$mount("#app");
