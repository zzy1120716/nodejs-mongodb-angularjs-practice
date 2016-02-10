/**
 * Created by Jazzy Hova on 2016/2/9.
 * 异步创建目录
 */
var fs = require('fs');
fs.mkdir("./data", function(err) {
  fs.mkdir("./data/folderA", function(err) {
    fs.mkdir("./data/folderA/folderB", function(err) {
      fs.mkdir("./data/folderA/folderB/folderD", function(err) {
      });
    });
    fs.mkdir("./data/folderA/folderC", function(err) {
      fs.mkdir("./data/folderA/folderC/folderE", function(err) {
      });
    });
  });
});