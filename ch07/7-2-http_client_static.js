/**
 * Created by Jazzy Hova on 2016/2/10.
 * 一个基本的Web客户端检索静态文件
 */
var http = require('http');
var options = {
  hostname: 'localhost',
  port: '8080',
  path: '/hello.html'
};
function handleResponse(response) {
  var serverData = '';
  response.on('data', function(chunk) {
    serverData += chunk;
  });
  response.on('end', function() {
    console.log(serverData);
  });
}
http.request(options, function(response) {
  handleResponse(response);
}).end();