/**
 * Created by Administrator on 2016/2/17.
 * 使用findAndModify()原子地修改文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae) {
    nebulae.find({type: "supernova"}, function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Before Modify : ");
        console.log(itemArr);
        nebulae.findAndModify({type: "supernova"}, [['name', 1]], {$set: {type: "Super Nova", "updated": true}}, {w: 1, new: true}, function(err, doc) {
          console.log("After Modify : ");
          console.log(doc);
          db.close();
        });
      });
    });
  });
});