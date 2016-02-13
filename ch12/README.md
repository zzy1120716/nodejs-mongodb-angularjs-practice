## MongoDB的安装(Windows)
### 1.官网下载.msi文件，双击运行(区分32位/64位)
### 默认安装路径为：C:\Program Files\MongoDB\Server\3.2
### 2.配置环境变量：
#### 系统变量：MONGODB_HOME -- C:\Program Files\MongoDB\Server\3.2\
#### 用户变量（系统变量也可）：Path -- %MONGODB_HOME%\bin
### 3.指定数据存放路径，同时开启MongoDB服务：
#### 命令行中输入(数据路径可任意指定，默认为C:\data\db)：
```
mongod --dbpath D:\data\db
```
#### 默认端口27017：浏览器输入地址：localhost:27017，看到一行字，说明服务开启
#### 打开另外的命令行窗口，输入
```
mongo
```
#### 进入mongodb的shell控制台
## MongoDB的基本操作
### 1.停止MongoDB服务
```
use admin
db.shutdownServer()
```
### 2.直接命令行执行mongodb语句(无身份验证情况下)
```
mongo test --eval "printjson(db.getCollectionNames())"
```
### 3.mongodb shell执行JavaScript脚本文件
```
load("/tmp/db_update.js")
```
### 4.定义用户的方法
```
db.addUser({ user: "testUser",
             userSource: "test",
             roles: [ "read" ],
             otherDBRoles: { testDB2: [ "readWrite" ] }})
```
### 5.列出用户
#### 切换到admin数据库，并列出用户
```
use admin
show users
```
#### 获取在admin数据库的用户的游标，并返回用户数量
```
use admin
cur = db.system.users.find()
cur.count()
```