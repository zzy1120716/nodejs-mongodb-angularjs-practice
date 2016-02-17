/**
 * Created by Administrator on 2016/2/17.
 * 把文档插入集合
 */
var MongoClient = require('mongodb').MongoClient;
function addObject(collection, object) {
  collection.insert(object, function(err, result) {
    if(!err) {
      console.log("Inserted : ");
      console.log(result);
    }
  });
}
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", function(err, db) {
  var myDB = db.db("astro");// 创建'天文'数据库
  myDB.dropCollection("nebulae");
  // 创建'星云'集合
  myDB.createCollection("nebulae", function(err, nebulae) {
    addObject(nebulae, {ngc: "NGC 7293", name: "Helix", type: "planetary", location: "Aquila"});
    addObject(nebulae, {ngc: "NGC 6543", name: "Cat's Eye", type: "planetary", location: "Draco"});
    addObject(nebulae, {ngc: "NGC 1952", name: "Crab", type: "supernova", location: "Taurus"});
  });
  setTimeout(function() {
    db.close();
  }, 3000);
});