/*
*  @描述：构建配置文件
*  @作者：付文松
*  @创建时间：2018/4/3
*/

const path = require('path');
const package = require("../package");

let name = package.name;
let nameSplit = name.split("-");
let moduleName = nameSplit[nameSplit.length - 1];
let groupIndex = nameSplit.indexOf("group");
let project = package.project || (groupIndex > 0 ? 'group' : 'store');
let srcPath = path.join(__dirname,"../src");
let distPath = path.join(__dirname,"../dist/"),
    assetsPath = path.join(distPath,project + "/assets/");

module.exports = {
    name:name,
    moduleName:moduleName,
    project:project,
    dev:{
      srcPath:srcPath,
      distPath:distPath,
      assetsPath:assetsPath,
      proPath:path.join(assetsPath,moduleName),
      host:"localhost",
      port:8080,
      autoOpenBrowser:false
    }
}