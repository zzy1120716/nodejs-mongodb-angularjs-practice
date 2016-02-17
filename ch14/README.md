# Chapter 14 从Node.js操作MongoDB文档
## 一、了解数据库更改选项
<table>
    <tr>
        <th>选项</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>w</td>
        <td>写入关注级别，参见ch13</td>
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
        <td>serializeFunctions</td>
        <td>true表示附加到对象的函数存储在文档中时应进行序列化</td>
    </tr>
    <tr>
        <td>forceServerObjectId</td>
        <td>true表示任何对象ID插入过程中会被服务器覆盖</td>
    </tr>
    <tr>
        <td>checkKeys</td>
        <td>不要轻易设为false</td>
    </tr>
    <tr>
        <td>upsert</td>
        <td>true表示无匹配时自动创建</td>
    </tr>
    <tr>
        <td>multi</td>
        <td>true表示更新所有匹配的文档</td>
    </tr>
    <tr>
        <td>new</td>
        <td>true表示返回findAndModify()方法新修改的对象，非原始对象</td>
    </tr>
</table>
## 二、了解数据库更新运算符
### $inc/$rename/$setOnInsert/$set/$unset/$/$addToSet/$pop/$pullAll/$pull/$push/$each/$slice/$sort/$bit
## 三、将文档添加到集合
`insert(docs, [options], callback)`
### 14-1
## 四、从集合获取文档
`find(query, [options], callback)`<br/>
`findOne(query, [options], callback)`
### 方法一返回Cursor对象，使用`toArray()`或者`each()`进行遍历
### 方法二返回单个对象
### 14-2
## 五、更新集合中的文档
`update(query, update, [options], [callback])`
### 14-3
## 六、原子地修改文档的集合
### 14-4
`findAndModify(query, sort, update, [options], callback)`
#### 注意：`[['name', 1]]`表示按name字段升序排列，w为1表示启用写入关注，new为true表示返回修改后的对象，callback参数是必须的
## 七、保存集合中的文档
`save(doc, [options], [callback])`
### 14-5
## 八、使用upsert往集合中插入文档
### 14-6
`update([query], [options], [callback])`
## 九、从集合中删除文档
### 14-7
`remove([query], [options], [callback])`
## 十、从集合中删除单个文档
### 14-8
`findAndRemove(query, sort, [options], callback)`
