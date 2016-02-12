## net.Socket对象
### Socket实现的是Duplex对象，可以对流进行读写操作
### 六种创建方式均返回Socket对象，最后一个参数都是执行的回调，区别在前面的1-2个参数
#### 1.options -- port/host/localAddress/allowHalfOpen
#### 2.port & host
#### 3.path -- Unix系统位置