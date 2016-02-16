## 一、把MongoDB的驱动程序添加到Node.js
#### 项目根目录下打开命令行，输入以下命令：
`npm install mongodb@1.4.2`<br/>
`npm install mongoose@3.8.8`
#### 也可以添加package.json文件，命令行中输入：
`npm install`
#### 目前，最新的mongodb版本号为`2.1.7`，mongoose版本号为`4.4.3`
## 二、从Node.js连接到MongoDB
#### nodejs程序添加语句：`require('mongodb')`
#### 创建MongoDB连接的方法：
#### (1)创建`MongoClient`对象的一个实例
#### (2)使用连接字符串
### 1.了解和写入关注
#### MongoDB连接的写入关注级别
<table>
    <tr>
        <th>级别</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>-1</td>
        <td>网络错误被忽略</td>
    </tr>
    <tr>
        <td>0</td>
        <td>写确认不是必须进行</td>
    </tr>
    <tr>
        <td>1</td>
        <td>请求写确认</td>
    </tr>
    <tr>
        <td>2</td>
        <td>写确认请求跨主服务器和副本集里面的一个辅助服务器</td>
    </tr>
    <tr>
        <td>majority</td>
        <td>副本集的主服务器请求写确认</td>
    </tr>
</table>
### 2.了解Server对象
#### Server对象的选项
<table>
    <tr>
        <th>选项</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>readPreference</td>
        <td>读取首选项：ReadPreference.PRIMARY/ReadPreference.PRIMARY_PREFERRED/ReadPreference.SECONDARY/ReadPreference.SECONDARY_PREFERRED/ReadPreference.NEAREST</td>
    </tr>
    <tr>
        <td>ssl</td>
        <td>是否使用ssl证书</td>
    </tr>
    <tr>
        <td>poolSize</td>
        <td>连接池使用的连接数量，默认5</td>
    </tr>
    <tr>
        <td>socketOptions</td>
        <td>
            套接字创建选项<br/>
            `noDelay`--若为true，则表示无延迟套接字<br/>
            `keepAlive`--套接字保持活动的时间<br/>
            `connectTimeoutMS`--连接超时，单位毫秒<br/>
            `socketTimeoutMS`--套接字超时,单位毫秒
        </td>
    </tr>
    <tr>
        <td>auto_reconnect</td>
        <td>若为true，则表示客户端遇到错误自动重连</td>
    </tr>
</table>
### 3.通过Client对象连接到MongoDB
#### `MongoClient(Server, options)`
#### 连接选项
<table>
    <tr>
        <th>选项</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>w</td>
        <td>写入关注级别，参见1</td>
    </tr>
    <tr>
        <td>wtimeout</td>
        <td>等待写入关注结束时间量，单位毫秒</td>
    </tr>
    <tr>
        <td>fsync</td>
        <td>true表示返回前等待fsync完成</td>
    </tr>
    <tr>
        <td>journal</td>
        <td>true表示返回前等待日志同步完成</td>
    </tr>
    <tr>
        <td>retryMilliSeconds</td>
        <td>重连等待时间，单位毫秒，默认5000</td>
    </tr>
    <tr>
        <td>numberOfRetries</td>
        <td>重连尝试次数，默认5</td>
    </tr>
    <tr>
        <td>bufferMaxEntries</td>
        <td>失败前被缓冲等待连接操作的最大数量，默认-1，即无限制</td>
    </tr>
</table>
#### 运行13-1过程中出错：`TypeError: client.open is not a function`
#### 原因：2.0以上的mongodb不支持该方法
#### 解决方法：按照官方文档推荐使用的连接字符串方法连接到mongodb
#### 运行13-2过程中出错：`Connection Failed Via Connection String.`
#### 原因：dbadmin用户没有操作test数据库的权限
#### 解决方法：重新创建一个test数据库管理员用户
`use test`<br/>
`db.createUser({user: "dbadmin",pwd: "test", roles: [{role:"readWrite",db:"test"}, {role: "dbAdmin",db:"test"}]})`
## 三、MongoDB Node.js驱动程序中的对象
### 1.Db对象
#### 通过`MongoClient.connect(... , function(err,db){...})`回调函数获取
### 2.Admin对象
#### 方法一：
`var adminDb = db.admin()`
#### 方法二：
`var adminDb = new Admin(db)`
### 3.Collection对象
`var collection = db.collection()`<br/>
`var collection = new Collection(db, "myCollection")`<br/>
`db.createCollection("newCollection", function(err, collection) {})`
### 4.Cursor对象（游标）
## 四、访问和操作数据库
### 1.创建、列出、删除数据库实例（13-3）
### 2.获取MongoDB服务器的状态（13-4）
#### 问题：只能在admin中查看serverStatus？test数据库连接后，status输出结果为false
## 五、访问和操作集合
### 1.创建、列出和删除集合的示例（13-5）
#### ①列出集合的两种方法`collectionNames()`和`collections()`的区别：
#### 回调中创建的第二个参数对象不同
#### 方法一创建集合名称对象数组
#### 方法二创建Collection对象数组
#### 注意：目前mongodb已经没有`collectionNames()`方法
#### 只有`collection(name, options, callback)`（获取指定集合）和`collections()`（获取全部集合组成的数组）
#### ②删除集合的两种方法：
```
var myDB = db.db("myDB");
myDB.dropCollection("collectionA", function(err, results) {   });
```
#### 或
```
myDB.collection("collectionB", function(err, collB) {
    collB.drop();
});
```
#### 问题：程序运行结果显示newCollection未被成功删除
### 2.获取集合信息（13-6）`stat()`
