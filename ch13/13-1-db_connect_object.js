/**
 * Created by Administrator on 2016/2/15.
 * 使用MongoClient对象实例连接到MongoDB
 */
// 创建MongoClient和Server实例
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost', 27017, {
  socketOptions: { connectTimeoutMS: 500 },
  poolSize: 5,
  auto_reconnect: true
}), {
  numberOfRetries: 3,
  retryMilliSeconds: 500
});
// 打开连接
client.open(function(err, client) {
  if(err) {
    console.log("Connection Failed Via Client Object.");
  } else {
    // 创建数据库实例
    var db = client.db("test");
    if(db) {
      console.log("Connected Via Client Object...");
      // 验证用户
      db.authenticate("dbadmin", "test", function(err, results) {
        if(err) {
          console.log("Authentication failed...");
        } else {
          console.log("Authenticated Via Client Object...");
          // 注销数据库
          db.logout(function(err, result) {
            if(!err) {
              console.log("Logged out Via Client Object...");
            }
            // 关闭连接
            client.close();
            console.log("Connection closed...");
          });
        }
      });
    }
  }
});