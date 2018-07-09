/*
*  @描述：开发环境构建
*  @作者：付文松
*  @创建时间：2018-04-03
*/

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const copyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("../package");
const config = require("./config");

const devWebpackConfig = merge(baseWebpackConfig,{
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      baseURL:JSON.stringify("http://empdev.jingruiauto.com")
    })
  ],
  //webpack-dev-server 再运行的时候是根据 output 的目录来运行的
  devServer:{
    compress: true,
    hot:true,
    inline:true,
    contentBase: false,
    open: true,
    openPage:config.project + "/views/"+config.moduleName
  },
  mode:"development"
});


module.exports = devWebpackConfig;