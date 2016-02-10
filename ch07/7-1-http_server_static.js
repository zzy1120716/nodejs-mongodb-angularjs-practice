/**
 * Created by Jazzy Hova on 2016/2/10.
 * 实现一个基本的静态文件服务的Web服务器
 */
var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "./html/";
http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true, false);
  fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
    if(err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);