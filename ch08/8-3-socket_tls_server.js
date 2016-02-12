/**
 * Created by Jazzy Hova on 2016/2/11.
 * 创建TLS套接字服务器
 */
var tls = require('tls');
var fs = require('fs');
var options = {
  key: fs.readFileSync('test/keys/server.pem'),
  cert: fs.readFileSync('test/keys/server.crt'),
  ca: fs.readFileSync('test/keys/client.crt')
};
tls.createServer(options, function(client) {
  client.write("Hello Secure World\r\n");
  client.end();
}).listen(8108);