/**
 * Created by Administrator on 2016/2/16.
 * 创建、检索和删除MongoDB数据库中的集合
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", function(err, db) {
  var newDB = db.db("newDB");
  newDB.collections(function(err, collections) {
    console.log("Initial collections: ");
    console.log(collections);
    newDB.createCollection("newCollection", function(err, collection) {
      newDB.collections(function(err, collections) {
        console.log("Collections after creation: ");
        console.log(collections);
        // 方法一
        /*newDB.dropCollection("newCollection", function(err, results) {
          console.log("Collections after deletion: ");
          console.log(collections);
          db.close();
        });*/
        // 方法二
        newDB.collection("newCollection", function(err, newCollection) {
          newCollection.drop();
          console.log("Collections after deletion: ");
          console.log(collections);
          db.close();
        });
      });
    });
  });
});