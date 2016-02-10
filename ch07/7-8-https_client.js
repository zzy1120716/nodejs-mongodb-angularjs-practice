/**
 * Created by Jazzy Hova on 2016/2/11.
 * 创建HTTPS客户端
 */
var https = require('https');
var fs = require('fs');
var options = {
  hostname: 'encrypted.mysite.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('test/keys/client.pem'),
  cert: fs.readFileSync('test/keys/client.crt'),
  agent: false
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
https.request(options, function(response) {
  handleResponse(response);
}).end();
