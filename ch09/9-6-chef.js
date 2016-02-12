/**
 * Created by Jazzy Hova on 2016/2/12.
 * 一个子进程
 * 负责处理message事件和将数据发送回父进程
 */
process.on('message', function(message, parent) {
  var meal = {};
  switch (message.cmd) {
    case 'makeBreakfast':
      meal = ["ham", "egg", "toast"];
      break;
    case 'makeLunch':
      meal = ["burger", "fries", "shake"];
      break;
    case 'makeDinner':
      meal = ["soup", "salad", "steak"];
      break;
  }
  process.send(meal);
});