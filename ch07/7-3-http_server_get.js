/**
 * Created by Jazzy Hova on 2016/2/10.
 * 实现基本的GET Web服务器
 */
var http = require('http');
var messages = [
  'Hello World',
  'From a basic Node.js server',
  'Take Luck'
];
http.createServer(function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.write('<html><head><title>Simple Http Server</title></head>');
  res.write('<body>');
  for(var idx in messages) {
    res.write('\n<h1>' + messages[idx] + '</h1>');
  }
  res.end('\n</body></html>');
}).listen(8080);