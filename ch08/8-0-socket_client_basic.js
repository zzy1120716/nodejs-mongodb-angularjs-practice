/**
 * Created by Jazzy Hova on 2016/2/11.
 * 客户端上的Socket对象的基本知识
 */
// 客户端Socket
var net = require('net');
var client = net.connect({port: 8107, host: 'localhost'}, function() {
  console.log('Client connected');
  client.write('Some Data\r\n');
});
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function() {
  console.log('Client disconnected');
});
