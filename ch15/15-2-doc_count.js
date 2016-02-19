/**
 * Created by Administrator on 2016/2/18.
 * 在MongoDB集合中清点一组特定的文档
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
  var myDB = db.db("words");
  myDB.collection("word_stats", countItems);
  setTimeout(function() {
    db.close();
  }, 3000);
});
function countItems(err, words) {
  // 1.查出所有a,b,c开头的单词的数量
  words.count({first: {$in: ['a', 'b', 'c']}}, function(err, count) {
    console.log("Words starting with a, b or c: " + count);
  });
  // 2.查出所有长度大于12的单词的数量
  words.count({size: {$gt: 12}}, function(err, count) {
    console.log("Words longer than 12 characters: " + count);
  });
  // 3.查出所有长度为偶数的单词的数量
  words.count({size: {$mod: [2, 0]}}, function(err, count) {
    console.log("Words with even lengths: " + count);
  });
  // 4.由12个字母组成的单词的数量
  words.count({letters: {$size: 12}}, function(err, count) {
    console.log("Words with 12 Distinct characters: " + count);
  });
  // 5.以元音字母开头和结束的单词的数量
  words.count({$and: [
    {first: { $in: ['a', 'e', 'i', 'o', 'u']}},
    {last: { $in: ['a', 'e', 'i', 'o', 'u']}}
  ]}, function(err, count) {
    console.log("Words that start and end with a vowel: " + count);
  });
  // 6.包含超过6个元音的单词的数量
  words.count({"stats.vowels": {$gt: 6}}, function(err, count) {
    console.log("Words containing 7 or more vowels: " + count);
  });
  // 7.包含所有元音的单词的数量
  words.count({letters: {$all: ['a', 'e', 'i', 'o', 'u']}}, function(err, count) {
    console.log("Words with all 5 vowels: " + count);
  });
  // 8.带有非字母字符的单词的数量
  words.count({otherChars: {$exists: true}}, function(err, count) {
    console.log("Words with non-alphabet characters: " + count);
  });
  // 9.有两个非字母的单词的数量(匹配子文档，限制type为other，chars数组字段只有两个)
  words.count({charsets: {$elemMatch: {$and: [
    {type: 'other'},
    {chars: {$size: 2}}
  ]}}}, function(err, count) {
    console.log("Words with 2 non-alphabet characters: " + count);
  });
}