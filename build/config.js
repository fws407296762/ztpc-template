/*
*  @描述：构建配置文件
*  @作者：付文松
*  @创建时间：2018/4/3
*/

const path = require('path');
const package = require("../package");
let srcPath = path.join(__dirname,"../src");
let distPath = path.join(__dirname,"../dist/"),
    assetsPath = path.join(distPath,"assets");
module.exports = {
    dev:{
        srcPath:srcPath,
        distPath:distPath,
        assetsPath:assetsPath,
        proPath:path.join(assetsPath,package.name),
        host:"localhost",
        port:8080,
        autoOpenBrowser:false
    }
}