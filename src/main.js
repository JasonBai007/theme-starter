import Vue from "vue";
import App from "./App.vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 初始化整个项目的主题色
import { initThemeColor } from "./utils/theme";
initThemeColor();

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
