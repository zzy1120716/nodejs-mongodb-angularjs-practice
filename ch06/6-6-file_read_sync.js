/**
 * Created by Jazzy Hova on 2016/2/8.
 * 执行从文件同步读取
 */
var fs = require('fs');
fd = fs.openSync('veggie.txt', 'r');
var veggies = "";
do {
  var buf = new Buffer(5);
  buf.fill();
  var bytes = fs.readSync(fd, buf, null, 5);
  console.log("read %dbytes", bytes);
  veggies += buf.toString();
} while(bytes > 0);
fs.closeSync(fd);
console.log("Veggies: " + veggies);