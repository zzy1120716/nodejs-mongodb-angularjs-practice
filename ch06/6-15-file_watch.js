/**
 * Created by Jazzy Hova on 2016/2/10.
 * 监视文件更改
 */
var fs = require("fs");
fs.watchFile("log.txt", {persistent: true, interval: 5000}, function(curr, prev) {
  console.log("log.txt modified at: " + curr.mtime);
  console.log("Previous modification was: " + prev.mtime);
});