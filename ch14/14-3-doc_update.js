/**
 * Created by Administrator on 2016/2/17.
 * 更新数据库中的多个文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae) {
    nebulae.find({type: "planetary"}, function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Before Update : ");
        console.log(itemArr);
      });
      nebulae.update({type: "planetary", $isolated: 1}, {$set: { type: "Planetary", updated: true }}, {upsert: false, multi: true, w: 1}, function(err, results) {
          nebulae.find({type: "Planetary"}, function(err, items) {
            items.toArray(function(err, itemArray) {
              console.log("After Updated : ");
              console.log(itemArray);
              db.close();
            });
          });
        });
    });
  });
});