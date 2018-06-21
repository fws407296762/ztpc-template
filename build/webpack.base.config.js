const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const package = require("../package.json");
const config = require("./config");

module.exports = {
    entry:{
        app:path.join(config.dev.srcPath,"main.js"),
        vendor:["vue","vue-router"]
    },
    output:{
        path:config.dev.distPath,
        filename:config.project + "/assets/"+config.moduleName+"/js/[name].[hash].js",
        publicPath: "/"
    },
    optimization:{
        splitChunks:{
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name:"vendor",
                    chunks: "all"
                }
            }
        }
    },
    module:{
      rules:[
          {
              test:/\.vue$/,
              use:[
                  {
                      loader:"vue-loader",
                      options: {
                          loaders: {
                              css: ExtractTextPlugin.extract({
                                  use: 'css-loader',
                                  fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                              })
                          }
                      }
                  }
              ]
          },
          {
              test:/\.js$/,
              exclude:/node_module/,
              use:[
                  {
                      loader:"babel-loader",
                      options:{presets:["env"]}
                  }
              ]
          },
          {
              test:/\.css$/,
              use:[
                  {
                      loader: "css-loader"
                  }
              ]
          },
          {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                  limit: 10000,
                  name: path.join(config.dev.proPath,'fonts/[name].[hash:7].[ext]')
              }
          },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|svgz)$/,
          use:{
            loader: 'file-loader',
            options: {
              name: config.project + '/assets/'+config.moduleName+'/images/[name].[ext]?[hash]'
            }
          }
        }
      ]
    },
    resolve:{
        extensions:[".js",".vue"],
        alias: {
            "vue":"vue/dist/vue.common.js"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:package.description,
            projectName:config.project,
            moduleName:config.moduleName,
            template:path.join(config.dev.srcPath,"views/index.html"),
            filename:path.join(config.dev.distPath,config.project + "/views/"+config.moduleName+"/index.html")
        }),
        new copyWebpackPlugin([
            {
                from: path.join(config.dev.srcPath,"assets"),
                to:config.dev.proPath,
                ignore: ['.*']
            }
        ]),
        new ExtractTextPlugin("style.css")
    ],
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    mode:"development"
}