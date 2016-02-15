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
