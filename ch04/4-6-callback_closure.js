/**
 * Created by Jazzy Hova on 2016/2/6.
 * 创建一个包装器函数来提供异步回调所需的变量的闭包
 */
function logCar(logMsg, callback) {
  process.nextTick(function() {
    callback(logMsg);
  });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for(var idx in cars) {
  var message = "Saw a " + cars[idx];
  logCar(message, function() {
    console.log("Normal Callback: " + message);
  });
}
for(var idx in cars) {
  var message = "Saw a " + cars[idx];
  (function(msg) {
    logCar(msg, function() {
      console.log("Closure Callback: " + msg);
    });
  })(message);
}