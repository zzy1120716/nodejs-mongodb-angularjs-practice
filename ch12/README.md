## 一、MongoDB的安装(Windows)
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
## 二、MongoDB的基本操作
### 1.停止MongoDB服务
`use admin`<br/>
`db.shutdownServer()`
### 2.直接命令行执行mongodb语句(无身份验证情况下)
```
mongo test --eval "printjson(db.getCollectionNames())"
```
### 3.mongodb shell执行JavaScript脚本文件
```
load("/tmp/db_update.js")
```
## 三、MongoDB管理用户账户
### 1.定义用户的方法
```
db.addUser({ user: "testUser",
             userSource: "test",
             roles: [ "read" ],
             otherDBRoles: { testDB2: [ "readWrite" ] }})
```
### 2.列出用户
#### 切换到admin数据库，并列出用户
`use admin`<br/>
`show users`
#### 获取在admin数据库的用户的游标，并返回用户数量
`use admin`<br/>
`cur = db.system.users.find()`<br/>
`cur.count()`
### 3.addUser()方法创建用户时使用的字段
<table>
    <tr>
        <th>字段</th>
        <th>格式</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>user</td>
        <td>string</td>
        <td>指定一个唯一的用户名</td>
    </tr>
    <tr>
        <td>roles</td>
        <td>array</td>
        <td>指定用户角色的数组，MongoDB中提供了大量可以分配给用户的角色，见4</td>
    </tr>
    <tr>
        <td>pwd</td>
        <td>hashorstring</td>
        <td>指定用户的密码（可选），散列值或字符串</td>
    </tr>
    <tr>
        <td>otherDBRoles</td>
        <td>{<database>:[array],<database>:[array]}</td>
        <td>指定这个用户在其他数据库中拥有的角色（可选），数据库名为键，角色数组为值</td>
    </tr>
</table>
### 4.可以分配给用户账户的数据库角色
<table>
    <tr>
        <th>角色</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>read</td>
        <td>读</td>
    </tr>
    <tr>
        <td>readAnyDatabase</td>
        <td>读取任何数据库</td>
    </tr>
    <tr>
        <td>readWrite</td>
        <td>读写</td>
    </tr>
    <tr>
        <td>readWriteAnyDatabase</td>
        <td>读写任何数据库</td>
    </tr>
    <tr>
        <td>dbAdmin</td>
        <td>读写，清理、修改、压缩、得到统计概要，并进行验证</td>
    </tr>
    <tr>
        <td>dbAdminAnyDatabase</td>
        <td>同dbAdmin，但对任何数据库</td>
    </tr>
    <tr>
        <td>clusterAdmin</td>
        <td>执行一般管理，连接、集群、复制、列出数据库、创建数据库、删除数据库</td>
    </tr>
    <tr>
        <td>userAdmin</td>
        <td>创建用户、修改数据库的用户账户</td>
    </tr>
    <tr>
        <td>userAdminAnyDatabase</td>
        <td>同userAdmin，但对任何数据库</td>
    </tr>
</table>
#### 注：带有`AnyDatabase`字样的角色只能应用到admin数据库中
### 5.创建用户
#### 创建普通用户
`use test`<br/>
`db.addUser({user: "testUser",
            pwd: "test",
            roles: ["readWrite, "dbAdmin"]})`
#### 创建带其他数据库权限的用户
`use admin`<br/>
`db.addUser({user: "testUser",
            userSource: "test",
            roles: ["read"],
            otherDBRoles: {testDB2: ["readWrite"]}})`
#### 注意：只能在admin数据库上使用`otherDBRoles`
### 6.删除用户
`use testDB`<br/>
`db.removeUser("testUser")`
## 四、MongoDB配置访问控制
### 1.创建用户管理员账户
`use admin`<br/>
`db.addUser({user: "useradmin",
            pwd: "test",
            roles: ["userAdminAnyDatabase"]})`
#### 注意：使用addUser方法时，会出现以下提示：
```
WARNING: The 'addUser' shell helper is DEPRECATED. Please use 'createUser' instead
```
#### 因此用createUser代替……（其他不变）
`use admin`<br/>
`db.createUser({user: "useradmin",
            pwd: "test",
            roles: ["userAdminAnyDatabase"]})`
### 2.打开身份验证
#### 方法一：
#### 启动命令：
```
mongod -dbpath D:\data\db --auth
```
#### 访问数据库：
`use admin`<br/>
`db.auth("useradmin", "test")`
#### 方法二：
#### 启动命令中添加选项（类似mysql）：
```
mongo admin --username "useradmin" --password "test"
```
### 3.创建数据库管理员账户
`use admin`<br/>
`db.createUser({user: "dbadmin",
                pwd: "test",
                roles: ["readWriteAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin"]})`
#### 验证刚创建的用户身份：
`use admin`<br/>
`db.auth("dbadmin", "test")`
## 五、管理MongoDB数据库
### 1.显示数据库清单
```
show dbs
```
### 2.切换当前数据库
`db = db.getSiblingDB('testDB')`或`use testDB`
### 3.创建新数据库
#### 注意：
#### (1)mongodb没有显示创建数据库的命令
#### (2)使用use \<new_database_name\>切换到新数据库句柄
#### (3)createCollection方法创建新的集合
#### 例如：
`use newDB`<br/>
`db.createCollection("newCollection")`
