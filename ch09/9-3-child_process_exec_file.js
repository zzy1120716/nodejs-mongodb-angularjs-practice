/**
 * Created by Jazzy Hova on 2016/2/12.
 * 在另一个进程中执行一个可执行文件
 */
var childProcess = require('child_process');
var options = {
  maxBuffer: 100 * 1024,
  encoding: 'utf8',
  timeout: 5000
};
var child = childProcess.execFile('ping.exe', ['-n', '1', 'baidu.com'], options, function(error, stdout, stderr) {
  if(error) {
    console.log(error.stack);
    console.log('Error Code: ' + error.code);
    console.log('Error Signal: ' + error.signal);
  }
  console.log('Results: \n' + stdout);
  if(stderr.length) {
    console.log('Errors: ' + stderr);
  }
});
child.on('exit', function(code) {
  console.log('Child completed with code: ' + code);
});