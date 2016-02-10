## 6.1 同步和异步文件系统调用
## 6.2 打开和关闭文件
## 6.3 写入文件
### 6-1
## 6.4 读取文件
fs.readFile(path, [options], callback)<br/>
fs.readFileSync(path, [options])<br/>
## 6.5 其他文件任务系统
### 6.5.1 验证路径存在性
### 6.5.2 获取文件信息
### 6.5.3 列出文件
### 6.5.4 删除文件
### 6.5.5 截断文件
### 6.5.6 建立和删除目录
### 6.5.7 重命名文件和目录
### 6.5.8 监视文件更改
#### 一般文件操作有异步和同步两种方式
#### 同步方法名后带有Sync，返回操作结果布尔值true or false，通过判断返回结果进行下一步操作
#### 异步方法最后多一个callback参数，回调函数传入一个err表示操作遇到的错误，有严格顺序的操作采用回调，层层进入
#### 使用nodejs默认的异步线程，则将操作并列写出