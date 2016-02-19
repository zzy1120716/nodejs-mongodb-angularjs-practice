# Chapter 15 从Node.js访问MongoDB文档
#### 使用提供的代码15-0-generate_data.js生成数据
#### 启动数据库引擎`mongod --dbpath D:\data\db`
#### 启动命令行客户端`mongo`
#### 命令行中输入`load("15-0-generate_data.js")`
## 一、查找特定文档集合
### 15-1
## 二、清点文档数量
### 15-2
## 三、对结果集进行限制
### 1.限制返回条数
### 15-3
### 2.限制对象返回的字段
### 15-4
### 3.对结果进行分页
### 15-5
### 问题：出现TypeError错误
### 原因：多一次循环导致cursor为undefined？
### 4.排序
### 15-6
### 5.查找不同字段值
### 15-7
### 6.对结果进行分组
### 15-8
#### `group(keys, query, initial, reduce, finalize, command, [options], callback)`
