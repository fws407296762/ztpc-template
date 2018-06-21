/*
*  @描述：生产环境编译脚本
*  @作者：付文松
*  @创建时间：2018/4/3
*/

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("../package");
const config = require("./config");

const proWebpackConfig = merge(baseWebpackConfig,{
    plugins:[

    ]
})

module.exports = proWebpackConfig;