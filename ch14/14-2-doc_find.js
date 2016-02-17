/**
 * Created by Administrator on 2016/2/17.
 * 在MongoDB集合中查找文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db("astro");
  myDB.collection("nebulae", function(err, nebulae) {
    nebulae.find(function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Document Array: ");
        console.log(itemArr);
      });
    });
    nebulae.find(function(err, items) {
      items.each(function(err, item) {
        if(item) {
          console.log("Singular Document: ");
          console.log(item);
        }
      });
    });
    nebulae.findOne({type: "planetary"}, function(err, item) {
      console.log("Found One");
      console.log(item);
    });
  });
  setTimeout(function() {
    db.close();
  }, 3000);
});