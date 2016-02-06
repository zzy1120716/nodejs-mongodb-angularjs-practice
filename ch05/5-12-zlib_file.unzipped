/**
 * Created by Jazzy Hova on 2016/2/6.
 * 使用Zlib模块压缩/解压缩文件流
 */
var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('5-12-zlib_file.js');
var outFile = fs.createWriteStream('5-12-zlib-file.gz');
inFile.pipe(gzip).pipe(outFile);
setTimeout(function() {
  var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
  var inFile = fs.createReadStream('5-12-zlib-file.gz');
  var outFile = fs.createWriteStream('5-12-zlib_file.unzipped');
  inFile.pipe(gunzip).pipe(outFile);
}, 3000);