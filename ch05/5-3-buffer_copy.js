/**
 * Created by Jazzy Hova on 2016/2/6.
 * 将一个Buffer对象中的数据复制到另一个Buffer对象的各种方法
 */
var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());
// copy full buffer
var blank = new Buffer(26);
blank.fill();
console.log("Blank: " + blank.toString());
alphabet.copy(blank);
console.log("Blank: " + blank.toString());
// copy part of buffer
var dashes = new Buffer(26);
dashes.fill('-');
console.log("Dashes: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);
console.log("Dashes: " + dashes.toString());
// copy to and from direct indexes of buffers
var dots = new Buffer('---------------------');
dots.fill('.');
console.log('Dots: ' + dots.toString());
for(var i=0; i < dots.length; i++) {
  if(i % 2) {
    dots[i] = alphabet[i];
  }
}
console.log("Dots: " + dots.toString());