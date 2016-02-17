/**
 * Created by Administrator on 2016/2/17.
 * 从集合删除文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db('astro');
  myDB.collection('nebulae', function(err, nebulae) {
    nebulae.find(function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Before Delete: ");
        console.log(itemArr);
        nebulae.remove({type: "Planetary"}, function(err, results) {
          console.log("Deleted " + results + " documents.");
          nebulae.find(function(err, items) {
            items.toArray(function(err, itemArr) {
              console.log("After Delete: ");
              console.log(itemArr);
              db.close();
            });
          });
        });
      });
    });
  });
});