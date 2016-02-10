/**
 * Created by Jazzy Hova on 2016/2/9.
 * 实现一个fs.stats()调用来检索有关文件的信息
 */
var fs = require('fs');
fs.stat('6-9-file_stats.js', function(err, stats) {
  if(!err) {
    console.log('stats: ' + JSON.stringify(stats, null, '  '));
    console.log(stats.isFile() ? "Is a File" : "Is not a File");
    console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");
    console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
    stats.isDirectory();
    stats.isBlockDevice();
    stats.isCharacterDevice();
    //stats.isSymbolicLink();  //only lstat
    stats.isFIFO();
    stats.isSocket();
  }
});