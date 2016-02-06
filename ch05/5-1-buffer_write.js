/**
 * Created by Jazzy Hova on 2016/2/6.
 * 用各种方式来写入Buffer对象
 */
buf256 = new Buffer(256);
buf256.fill(0);
buf256.write("add some text");
console.log(buf256.toString());
buf256.write("more text", 9, 9);
console.log(buf256.toString());
buf256[18] = 43;
console.log(buf256.toString());
