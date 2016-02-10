/**
 * Created by Jazzy Hova on 2016/2/9.
 * 验证路径存在性
 */
var fs = require('fs');
fs.exists('config.txt', function(exists) {
  console.log(exists ? "Path Exists" : "Path Does Not Exists");
});