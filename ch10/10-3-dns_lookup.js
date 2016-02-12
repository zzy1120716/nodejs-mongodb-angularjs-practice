/**
 * Created by Jazzy Hova on 2016/2/12.
 * 对域和IP地址执行查找和反向查找
 */
var dns = require('dns');
console.log("Resolving www.baidu.com . . .");
dns.resolve4('www.baidu.com', function(err, addresses) {
  console.log('IPv4 addresses: ' + JSON.stringify(addresses, false, '  '));
  addresses.forEach(function(addr) {
    dns.reverse(addr, function(err, domains) {
      console.log('Reverse for ' + addr + ': ' + JSON.stringify(domains));
    });
  });
});