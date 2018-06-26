/*
*  @描述：采购订单接口文档
*  @作者：付文松
*  @创建时间：2018/6/21
*/

import Http from "zt-http";
let axios = Http.axios;
axios.defaults.baseURL ='http://emptest.jingruiauto.com';
Vue.prototype.$baseURL=axios.defaults.baseURL;
axios.defaults.headers = { 'Authorization': '1'}

export default function(api){

}