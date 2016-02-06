/**
 * Created by Jazzy Hova on 2016/2/6.
 * 创建和操作一个Buffer对象的切片
 */
var numbers = new Buffer("123456789");
console.log(numbers.toString());
var slice = numbers.slice(3, 6);
console.log(slice.toString());
slice[0] = '#'.charCodeAt(0);
slice[slice.length - 1] = '#'.charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());