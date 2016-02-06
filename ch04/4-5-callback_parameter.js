/**
 * Created by Jazzy Hova on 2016/2/6.
 * 创建一个匿名函数来添加由事件发出的附加参数
 */
var events = require('events');
function Carshow() {
  events.EventEmitter.call(this);
  this.seeCar = function(make) {
    this.emit('sawCar', make);
  };
}
Carshow.prototype.__proto__ = events.EventEmitter.prototype;
var show = new Carshow();
function logCar(make) {
  console.log("Saw a " + make);
}
function logColorCar(make, color) {
  console.log("Saw a %s %s", color, make);
}
show.on("sawCar", logCar);
show.on("sawCar", function(make) {
  var colors = ['red', 'blue', 'black'];
  var color = colors[Math.floor(Math.random() * 3)];
  logColorCar(make, color);
});
show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");
