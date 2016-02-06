/**
 * Created by Jazzy Hova on 2016/2/6.
 * 拼接Buffer对象
 */
var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());