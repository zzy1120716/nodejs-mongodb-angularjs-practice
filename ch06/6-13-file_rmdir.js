/**
 * Created by Jazzy Hova on 2016/2/9.
 * 删除目录
 */
var fs = require('fs');
fs.rmdir("./data/folderA", function(err) {
  fs.rmdir("./data/folderA/folderB", function(err) {
    fs.rmdir("./data/folderA/folderB/folderD", function(err) {});
  });
  fs.rmdir("./data/folderA/folderC", function(err) {
    fs.rmdir("./data/folderA/folderC/folderE", function(err) {});
  });
});