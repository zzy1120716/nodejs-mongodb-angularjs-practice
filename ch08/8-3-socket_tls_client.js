/**
 * Created by Jazzy Hova on 2016/2/11.
 * 创建TLS套接字客户端
 */
var tls = require('tls');
var fs = require('fs');
var options = {
  hostname: 'encrypted.mysite.com',
  port: 8108,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('test/keys/client.pem'),
  cert: fs.readFileSync('test/keys/client.crt'),
  ca: fs.readFileSync('test/keys/server.crt')
};
function getConnection(connName) {
  var req = tls.connect(options, function(res) {
    console.log(connName + ' Connected: ');
    console.log('   local = %s:%s', this.localAddress, this.localPort);
    console.log('   remote = %s:%s', this.remoteAddress, this.remotePort);
    this.setTimeout(500);
    this.setEncoding('utf8');
    this.on('data', function(data) {
      console.log(connName + " From Server: " + data.toString());
      this.end();
    });
    this.on('end', function() {
      console.log(connName + " Client disconnected");
    });
    this.on('error', function(err) {
      console.log("Socket Error: ", JSON.stringify(err));
    });
    this.on('timeout', function() {
      console.log("Socket Timed Out");
    });
    this.on('close', function() {
      console.log("Socket Closed");
    });
  });
  return req;
}
function writeData(socket, data) {
  var success = !socket.write(data);
  if(!success) {
    (function(socket, data) {
      socket.once('drain', function() {
        writeData(socket, data);
      });
    })(socket, data);
  }
}
var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");
writeData(Dwarves, "More Axes");
writeData(Elves, "More Arrows");
writeData(Hobbits, "More Pipe Weed");