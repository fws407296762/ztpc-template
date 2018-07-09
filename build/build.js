/*
*  @描述：build 脚本
*  @作者：付文松
*  @创建时间：2018/7/9
*/

const webpack = require("webpack");
let baseWebpackConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
let env = process.argv[4] || "--dev";
let baseUrl = "";
if(env === "--dev"){
  baseUrl = JSON.stringify("http://empdev.jingruiauto.com")
}

if(env === "--test"){
  baseUrl = JSON.stringify("http://emptest.jingruiauto.com")
}

const WebpackConfig = merge(baseWebpackConfig,{
  plugins:[
    new webpack.DefinePlugin({
      baseURL:baseUrl
    })
  ],
  mode:"production"
});


module.exports = WebpackConfig;