import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";

// 设置全局变量, 任何组件内都可以通过this.store引用该全局变量
Vue.prototype.store = store

Vue.config.productionTip = false

new Vue({
  // 将store定义为vue实例的选项, 则所有组件会全局自动注入该选项
  store,
  render: h => h(App),
}).$mount('#app')
