/**
 * Created by Jazzy Hova on 2016/2/12.
 * 一个主进程，它最多创建4个工作进程
 */
var cluster = require('cluster');
var http = require('http');
if(cluster.isMaster) {
  cluster.on('fork', function(worker) {
    console.log("Worker " + worker.id + " created");
  });
  cluster.on('listening', function(worker, address) {
    console.log("Worker " + worker.id + " is listening on " + address.address + ":" + address.port);
  });
  cluster.on('exit', function(worker, code, signal) {
    console.log("Worker " + worker.id + " Exited");
  });
  cluster.setupMaster({exec: '9-8-cluster_worker.js'});
  var numCPUs = require('os').cpus().length;
  for(var i = 0; i < numCPUs; i++) {
    if(i >= 4) {
      break;
    }
    cluster.fork();
  }
  Object.keys(cluster.workers).forEach(function(id) {
    cluster.workers[id].on('message', function(message) {
      console.log(message);
    });
  });
}