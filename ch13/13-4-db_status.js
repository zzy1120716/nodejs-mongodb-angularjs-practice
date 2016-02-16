/**
 * Created by Administrator on 2016/2/16.
 * 检索和显示MongoDB服务器状态
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", function(err, db) {
  if(!err) {
    var adminDB = db.admin();
    adminDB.serverStatus(function(err, status) {
      console.log(status);
      db.close();
    });
  } else {
    console.log("Connection Failed.");
  }
});