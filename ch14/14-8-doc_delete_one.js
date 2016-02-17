/**
 * Created by Administrator on 2016/2/17.
 * 使用findAndRemove()删除单个文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae) {
    nebulae.find(function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Before Delete : ");
        console.log(itemArr);
        nebulae.findAndRemove({type: "Planetary"}, [['name', 1]], {w: 1}, function(err, results) {
          console.log("Deleted:\n" + JSON.stringify(results));
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