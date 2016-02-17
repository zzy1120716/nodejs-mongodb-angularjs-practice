/**
 * Created by Administrator on 2016/2/17.
 * 使用save()更新和保存现有的文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db('astro');
  myDB.collection("nebulae", function(err, nebulae) {
    nebulae.findOne({type: 'Super Nova'}, function(err, item) {
      console.log("Before Save: ");
      console.log(item);
      item.info = "Some New Info";
      nebulae.save(item, {w: 1}, function(err, results) {
        nebulae.findOne({_id: item._id}, function(err, savedItem) {
          console.log("After Saved: ");
          console.log(savedItem);
          db.close();
        });
      });
    });
  });
});