/**
 * Created by Jazzy Hova on 2016/2/5.
 * 实现了一系列阻塞fs调用，即时计时器和nextTick()调用来显示执行顺序
 */
var fs = require("fs");
fs.stat("4-3-nexttick.js", function(err, stats) {
  if(stats) {
    console.log("4-3-nexttick.js Exists");
  }
});
setImmediate(function() {
  console.log("Immediate Timer 1 Executed");
});
setImmediate(function() {
  console.log("Immediate Timer 2 Executed");
});
process.nextTick(function() {
  console.log("Next Tick 1 Executed");
});
process.nextTick(function() {
  console.log("Next Tick 2 Executed");
});