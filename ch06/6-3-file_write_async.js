/**
 * Created by Jazzy Hova on 2016/2/8.
 * 执行异步写入文件
 */
var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];
function writeFruit(fd) {
  if(fruitBowl.length) {
    var fruit = fruitBowl.pop() + " ";
    fs.write(fd, fruit, null, null, function(err, bytes) {
      if(err) {
        console.log("File Write Failed.");
      } else {
        console.log("Wrote: %s %dbytes", fruit, bytes);
        writeFruit(fd);
      }
    });
  } else {
    fs.close(fd);
  }
}
fs.open('fruits.txt', 'w', function(err, fd) {
  writeFruit(fd);
});