/**
 * Created by Jazzy Hova on 2016/2/11.
 * 创建HTTPS服务器
 */
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('test/keys/server.pem'),
  cert: fs.readFileSync('test/keys/server.crt')
};
https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end("Hello Secure World\n");
}).listen(8080);