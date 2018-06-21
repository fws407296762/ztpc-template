import Vue from "vue";
import axios from 'axios';
import { Message } from 'element-ui';
import { prototype } from "stream";
import Cookies from 'js-cookie'
import Element from "element-ui";

// axios.defaults.baseURL ='http://empdev.jingruiauto.com';
axios.defaults.baseURL ='http://emptest.jingruiauto.com';
Vue.prototype.$baseURL=axios.defaults.baseURL;
axios.defaults.headers = { 'Authorization': '1'}
// axios.defaults.headers = { }
// axios.defaults.headers.common['Authorization'] = token
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置Cookies
// Cookies.set('token','access eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjYwMjU5OTUsInN1YiI6IntcImZvdXJzSWRcIjoxMCxcInVzZXJMb2dpbk5hbWVcIjpcImFkbWluXCIsXCJ1c2VyTmFtZVwiOlwi566h55CG5ZGYXCIsXCJ1c2VySWRcIjoxfSIsImV4cCI6MTUyNjExMjM5NSwibmJmIjoxNTI2MDI1OTk1fQ.BMA3GjUQFd9xuXg0V3updZANce2AEMcMJdozfcmsadg')
//http request 拦截器
axios.interceptors.request.use(
  config => {
    // 注意使用的时候需要引入cookie方法，推荐js-cookie
    // const token = Cookies.get('token')
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   'Authorization' : token
    // }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    // if(response.data.errCode ==2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    alert('服务器挂了');
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function get(url,params={},config){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    },config)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
	})
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url,data = {},config){
   return new Promise((resolve,reject) => {
     	axios.post(url,data,config)
			.then(response => {
				resolve(response.data);
			},err => {
				reject(err)
			})
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
		.then(response => {
			resolve(response.data);
		},err => {
			reject(err)
		})
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
		.then(response => {
			resolve(response.data);
		},err => {
			reject(err)
		})
  })
}
/**
 * 封装delete请求
 * @param  url 
 * @param  params 
 * @returns {Promise}
 */
function Delete(url,params={}){
  return new Promise((resovle,reject) => {
    axios.delete(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}

export default {
  axios,
  get,
  post,
  put,
  Delete
}