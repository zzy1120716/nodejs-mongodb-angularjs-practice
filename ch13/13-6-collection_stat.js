/**
 * Created by Administrator on 2016/2/16.
 * 检索和显示集合的统计信息
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", function(err, db) {
  var newDB = db.db("newDB");
  newDB.createCollection("newCollection", function(err, collection) {
    collection.stats(function(err, stats) {
      console.log(stats);
      db.close();
    });
  });
});