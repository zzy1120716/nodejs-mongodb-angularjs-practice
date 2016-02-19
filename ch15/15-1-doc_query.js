/**
 * Created by Administrator on 2016/2/18.
 * 在MongoDB集合中查找一组特定的文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", findItems);
  setTimeout(function() {
    db.close();
  }, 3000);
});
function displayWords(msg, cursor, pretty) {
  cursor.toArray(function(err, itemArr) {
    console.log("\n" + msg);
    var wordList = [];
    for(var i = 0; i < itemArr.length; i++) {
      wordList.push(itemArr[i].word);
    }
    console.log(JSON.stringify(wordList, null, pretty));
  });
}
function findItems(err, words) {
  // 1.查出所有a,b,c开头的单词
  words.find({first: {$in: ['a', 'b', 'c']}}, function(err, cursor) {
    displayWords("Words starting with a, b or c: ", cursor);
  });
  // 2.查出所有长度大于12的单词
  words.find({size: {$gt: 12}}, function(err, cursor) {
    displayWords("Words longer than 12 characters: ", cursor);
  });
  // 3.查出所有长度为偶数的单词
  words.find({size: {$mod: [2, 0]}}, function(err, cursor) {
    displayWords("Words with even lengths: ", cursor);
  });
  // 4.由12个字母组成的单词
  words.find({letters: {$size: 12}}, function(err, cursor) {
    displayWords("Words with 12 Distinct characters: ", cursor);
  });
  // 5.以元音字母开头和结束的单词
  words.find({$and: [
    {first: { $in: ['a', 'e', 'i', 'o', 'u']}},
    {last: { $in: ['a', 'e', 'i', 'o', 'u']}}
  ]}, function(err, cursor) {
    displayWords("Words that start and end with a vowel: ", cursor);
  });
  // 6.包含超过6个元音的单词
  words.find({"stats.vowels": {$gt: 6}}, function(err, cursor) {
    displayWords("Words containing 7 or more vowels: ", cursor);
  });
  // 7.包含所有元音的单词
  words.find({letters: {$all: ['a', 'e', 'i', 'o', 'u']}}, function(err, cursor) {
    displayWords("Words with all 5 vowels: ", cursor);
  });
  // 8.带有非字母字符的单词
  words.find({otherChars: {$exists: true}}, function(err, cursor) {
    displayWords("Words with non-alphabet characters: ", cursor);
  });
  // 9.有两个非字母的单词(匹配子文档，限制type为other，chars数组字段只有两个)
  words.find({charsets: {$elemMatch: {$and: [
    {type: 'other'},
    {chars: {$size: 2}}
  ]}}}, function(err, cursor) {
    displayWords("Words with 2 non-alphabet characters: ", cursor);
  });
}