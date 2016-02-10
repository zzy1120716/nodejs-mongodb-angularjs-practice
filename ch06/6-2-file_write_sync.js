/**
 * Created by Jazzy Hova on 2016/2/8.
 * 执行同步写入文件
 */
var fs = require('fs');
var veggieTary = ['carrots', 'celery', 'olives'];
fd = fs.openSync('veggie.txt', 'w');
while(veggieTary.length) {
  veggie = veggieTary.pop() + " ";
  var bytes = fs.writeSync(fd, veggie, null, null);
  console.log("Wrote %s %dbytes", veggie, bytes);
}
fs.closeSync(fd);