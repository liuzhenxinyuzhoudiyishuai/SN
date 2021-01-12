<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import { serverUrl } from "@/utils/tools";

Vue.filter("dalImg", (val) => {
  if (val) {
    if (val.startsWith("http")) {
      return val;
    } else {
      return serverUrl + val;
    }
  } else {
    return "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2388634225,2417364686&fm=26&gp=0.jpg";
  }
});
=======
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { TreeSelect } from "vant";
>>>>>>> 0f005d8a475a37df8fb9a39e7e0b070f3d9823cf

Vue.use(TreeSelect);
Vue.use(Vant);
Vue.prototype.axios = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
