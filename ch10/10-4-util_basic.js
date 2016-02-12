/**
 * Created by Jazzy Hova on 2016/2/12.
 * 使用util模块
 */
// 格式化字符串
var util = require('util');
console.log(util.format('%s = %s', 'Item1'));
console.log(util.format('%s = %s', 'Item1', 'Item2', 'Item3'));
console.log(util.format(1, 2, 3));
// 检查对象类型
console.log([1, 2, 3] instanceof Array);
console.log(util.isArray([1, 2, 3]));
// 同步写入输出流
//util.debug("Errors");  // 已过时，采用console.error
console.error("Errors");
//util.error(401, "errorname");  // 已过时，采用console.error
console.error(404, "Not Found");
util.puts(200, "Success");  // 已过时，采用console.log
util.print(203, "Empty");  // 已过时，采用console.log
util.log("Some message.");
// 将JavaScript对象转换为字符串
var obj = { first: 'Brad', last: 'Dayley' };
obj.inspect = function(depth) {
  return '{ name: "' + this.first + " " + this.last + '" }';
};
console.log(util.inspect(obj));