/**
 * Created by Jazzy Hova on 2016/2/9.
 * 同步删除文件
 */
var fs = require('fs');
if(fs.unlinkSync("new.txt")) {
  console.log("File Deleted");
} else {
  console.log("File Delete Failed");
}