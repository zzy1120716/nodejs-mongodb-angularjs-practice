/**
 * Created by Jazzy Hova on 2016/2/12.
 * process模块基础知识
 */
//接收输入，回显
process.stdin.on('data', function(data) {
  console.log("Console Input: " + data);
});
//事件处理，ctrl + break
process.on('SIGBREAK', function() {
  console.log("Got a SIGBREAK");
});
//控制进程
process.exit(0);