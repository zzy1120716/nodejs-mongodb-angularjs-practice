/**
 * Created by Jazzy Hova on 2016/2/11.
 * 实现Server对象的基础知识
 */
// Server
var net = require('net');
var server = net.createServer(function(client) {
  console.log('Client connected');
  client.on('data', function(data) {
    console.log('Client sent ' + data.toString());
  });
  client.on('end', function() {
    console.log('Client disconnected');
  });
  client.write('Hello');
});
server.listen(8107, function() {
  console.log('Server listening for connections');
});