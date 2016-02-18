/**
 * Created by Administrator on 2016/2/18.
 * 限制一组文档返回的字段
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", limitFields);
  setTimeout(function() {
    db.close();
  }, 3000);
});
function limitFields(err, words) {
  words.findOne({word: 'the'}, {fields: {charset: 0}}, function(err, item) {
    console.log("Excluding fields object: ");
    console.log(JSON.stringify(item, null, 2));
  });
  words.findOne({word: 'the'}, {fields: {word: 1, size: 1, stats: 1}}, function(err, item) {
    console.log("Including fields object: ");
    console.log(JSON.stringify(item, null, 2));
  });
}