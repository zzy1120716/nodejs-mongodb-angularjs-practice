/**
 * Created by Jazzy Hova on 2016/2/8.
 * 将一个JSON字符串写入文件
 */
var fs = require('fs');
var config = {
  maxFiles : 20,
  maxConnections : 15,
  rootPath : "/webroot"
};
var configTxt = JSON.stringify(config);
var options = {encoding: 'utf8', flag: 'w'};
fs.writeFile('config.txt', configTxt, options, function(err) {
  if(err) {
    console.log("Config Write Failed.");
  } else {
    console.log("Config Saved.");
  }
});