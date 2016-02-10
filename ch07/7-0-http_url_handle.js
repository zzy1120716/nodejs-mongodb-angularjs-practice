/**
 * Created by Jazzy Hova on 2016/2/10.
 * url的相关处理
 */
var url = require('url');
var qstring = require('querystring');
var http = require('http');
// url
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);
urlString = url.format(urlObj);
console.log("urlObj: \n");
console.log(urlObj);
console.log("urlString: %s", urlString);
// query string
var originalUrl = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var newResource = '/another/path?querynew';
console.log("resolvedUrl: %s", url.resolve(originalUrl, newResource));
var params = qstring.parse("name=Brad&color=red&color=blue");
console.log("parsed qstring: \n");
console.log(params);
// http ClientRequest
var options = {
  hostname: 'www.myserver.com',
  path: '/',
  port: '8080',
  method: 'POST'
};
var req = http.request(options, function(response) {
  var str = '';
  response.on('data', function(chunk) {
    str += chunk;
  });
  response.on('end', function() {
    console.log(str);
  });
});
req.end();
// 创建http服务
http.createServer(function(req, res) {
  // handle the request and response here
}).listen(8080);