/**
 * Created by Jazzy Hova on 2016/2/12.
 * 一个HTTP客户端，它发送一系列的请求来测试服务器
 */
var http = require('http');
var options = { port: '8080' };
function sendRequest() {
  http.request(options, function(response) {
    var serverData = '';
    response.on('data', function(chunk) {
      serverData += chunk;
    });
    response.on('end', function() {
      console.log(serverData);
    });
  }).end();
}
for(var i = 0; i < 5; i++) {
  console.log("Sending Request");
  sendRequest();
}
