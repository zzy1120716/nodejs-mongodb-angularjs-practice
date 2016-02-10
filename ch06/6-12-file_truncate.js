/**
 * Created by Jazzy Hova on 2016/2/9.
 * 截断文件
 */
var fs = require('fs');
fs.truncate("log.txt", function(err) {
  console.log(err ? "File Truncate Failed" : "File Truncated");
});