/**
 * Created by Administrator on 2016/2/16.
 * 使用MongoDB Node.js驱动程序创建、列出和删除数据库
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost/", function(err, db) {
  // 获取Admin对象
  var adminDB = db.admin();
  adminDB.listDatabases(function(err, databases) {
    console.log("Before Add Database List: ");
    console.log(databases);
  });
  // 创建数据库
  var newDB = db.db("newDB");
  // 创建集合
  newDB.createCollection("newCollection", function(err, collection) {
    if(!err) {
      console.log("New Database and Collection Created");
      adminDB.listDatabases(function(err, databases) {
        console.log("After Add Database List: ");
        console.log(databases);
        db.db("newDB").dropDatabase(function(err, results) {
          if(!err) {
            console.log("Database Dropped.");
            // 15秒后查看是否删除成功
            setTimeout(function() {
              adminDB.listDatabases(function(err, results) {
                var found = false;
                for(var i = 0; i < results.databases.length; i++) {
                  if(results.databases[i].name == "newDB") {
                    found = true;
                  }
                }
                if(!found) {
                  console.log("After Delete Database List: ");
                  console.log(results);
                }
                db.close();
              });
            }, 15000);
          }
        });
      });
    }
  });
});