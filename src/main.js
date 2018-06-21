/*
*  @描述：项目根配置文件，涉及到：加载 Vue、vue-router，配置路由，Vue 对象创建
*  @作者：付文松
*  @创建时间：2018-04-29
*/

//导入框架和组件
import Vue from "vue";
import VueRouter from "vue-router";
import Element from "element-ui";
import routes from "./routes";
import App from "./App";
import ApiMixins from "./components/ajax/api";
import 'babel-polyfill';
//加载路由组件
Vue.use(VueRouter);
//加载 Element 组件
Vue.use(Element);

//实例化路由
const router = new VueRouter({
    routes
});

//实例化Vue
const vm = new Vue({
  mixins:[ApiMixins],
  router,
  template: '<App/>',
  components: { App }
}).$mount("#root");

