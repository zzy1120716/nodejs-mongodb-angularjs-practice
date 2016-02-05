/**
 * Created by JAZZY HOVA on 2016/2/5.
 * 过滤指定单词（简单敏感词过滤程序）
 */
var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
  for(idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for(idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }
  return inStr;
}
function addCensoredWord(word) {
  customCensoredWords.push(word);
}
function getCensoredWords() {
  return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;