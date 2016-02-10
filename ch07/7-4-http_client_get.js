/**
 * Created by Jazzy Hova on 2016/2/10.
 * 针对清单7.3的服务器发出GET请求的基本Web客户端
 */
var http = require('http');
var options = {
  hostname: 'localhost',
  port: '8080'
};
function handleResponse(response) {
  var serverData = '';
  response.on('data', function(chunk) {
    serverData += chunk;
  });
  response.on('end', function() {
    console.log("Response Status: ", response.statusCode);
    console.log("Response Headers: ", response.headers);
    console.log(serverData);
  });
}
http.request(options, function(response) {
  handleResponse(response);
}).end();
