/**
 * Created by Jazzy Hova on 2016/2/9.
 * 验证路径存在性(同步)
 */
var fs = require('fs');
if(fs.existsSync('config.txt')) {
  console.log("Path Exists");
} else {
  console.log("Path Does Not Exists");
}