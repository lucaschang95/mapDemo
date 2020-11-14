import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(BaiduMap, {
  ak: 'MhDMysmBT5FGGjSGk6tSI3ZstUCsF7lO',
});