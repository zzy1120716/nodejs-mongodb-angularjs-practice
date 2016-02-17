/**
 * Created by Administrator on 2016/2/17.
 * 使用upsert插入新的文档或更新现有的文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://dbadmin:test@localhost:27017', function(err, db) {
  var myDB = db.db('astro');
  myDB.collection('nebulae', function(err, nebulae) {
    nebulae.find({type: "diffuse"}, function(err, items) {
      items.toArray(function(err, itemArr) {
        console.log("Before Upsert: ");
        console.log(itemArr);
      });
    });
    // 插入
    nebulae.update({type: "diffuse"}, {$set: {ngc: "NGC 3372", name: "Carina", type: "diffuse", location: "Carina"}}, {upsert: true, w: 1, forceServerObjectId: false}, function(err, results) {
      nebulae.find({type: "diffuse"}, function(err, items) {
        items.toArray(function(err, itemArr) {
          console.log("After Upsert 1: ");
          console.log(itemArr);
          var itemID = itemArr[0]._id;
          // 更新
          nebulae.update({_id: itemID}, {$set: {ngc: "NGC 3372", name: "Carina", type: "Diffuse", location: "Carina"}}, {upsert: true, w: 1}, function(err, results) {
            nebulae.findOne({_id: itemID}, function(err, item) {
              console.log("After Upsert 2: ");
              console.log(item);
              db.close();
            })
          });
        });
      });
    });
  });
});