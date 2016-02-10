/**
 * Created by Jazzy Hova on 2016/2/10.
 * 重命名文件和目录
 */
var fs = require('fs');
fs.rename("old.txt", "new.txt", function(err) {
  console.log(err ? "Rename Failed" : "File Renamed");
});
fs.rename("testDir", "renameDir", function(err) {
  console.log(err ? "Rename Failed" : "Folder Renamed");
});