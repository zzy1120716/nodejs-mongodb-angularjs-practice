/**
 * Created by Jazzy Hova on 2016/2/9.
 * 异步删除文件
 */
var fs = require('fs');
fs.unlink("new.txt", function(err) {
  console.log(err ? "File Delete Failed" : "File Deleted");
});