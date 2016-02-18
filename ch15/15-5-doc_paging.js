/**
 * Created by Administrator on 2016/2/18.
 * 对来自于MongoDB的集合中的一组特定文档的结果进行分页
 */
var MongoClient = require('mongodb').MongoClient;
var myDB;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  myDB = db.db("words");
  myDB.collection("word_stats", function(err, collection) {
    pagedResults(err, collection, 0, 10);
  });
});
function displayWords(msg, cursor, pretty) {
  cursor.toArray(function(err, itemArr) {
    console.log("\n" + msg);
    var wordList = [];
    for(var i = 0; i < itemArr.length; i++) {
      wordList.push(itemArr[i].word);
    }
    console.log(JSON.stringify(wordList, null, pretty) + '\n');
  });
}
function pagedResults(err, words, startIndex, pageSize) {
  words.find(
    {first: 'v'},
    {limit: pageSize, skip: startIndex, sort: [["word", 1]]},
  function(err, cursor) {
    cursor.count(true, function(err, cursorCount) {
      console.log("cursorCount: " + cursorCount);
      displayWords("Page Starting at " + startIndex, cursor);
      if(cursorCount === pageSize) {
        pagedResults(err, words, startIndex + pageSize, pageSize);
      } else {
        myDB.close();
      }
    })
  });
}