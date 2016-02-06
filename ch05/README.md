# 5.1 处理JSON
# 5.2 使用Buffer模块缓冲数据
## 5-1
1.write(string, offset, length)<br/>
offset - 偏移量<br/>
length - 字符串长度<br/>
2.buffer.toString([encoding], [start], [end])
缓冲区对象转字符串<br/>
## 5-3
1.copy(targetBuffer, [targetStart], [sourceStart], [sourceIndex])<br/>
复制缓冲区<br/>
2.buffer.fill(character)<br/>
以某个指定字符填充缓冲区，不传参数即是空白字符<br/>
3.不使用copy方法，直接将缓冲区中某个字符直接赋值也可以<br/>
## 5-4
1.copy得来的缓冲区副本的改变不会影响原缓冲区<br/>
2.但是，slice得来的切片的改变会使得原缓冲区一同改变，因此，切片是指向原缓冲区内存地址的<br/>
## 5-5
1.concat(list, [totalLength])<br/>
list - 多个缓冲区为元素的数组<br/>
totalLength - 最大字节数<br/>
# 5.3 使用Stream模块来传送数据
## 5-6 Readable流
1.read([size])<br/>
events:<br/>
  readable<br/>
  data<br/>
  end<br/>
  close<br/>
  error<br/>
## 5-7 Writable流
1.write(chunk, [encoding], [callback])
chunk - 数据块，包含要写入的数据
events:<br/>
  drain<br/>
  finish<br/>
  pipe<br/>
  unpipe<br/>
## 5-8 Duplex流
1.结合读写功能，需要同时实现_read(size)和_write(chunk, encoding, callback)方法<br/>
## 5-9 Transform流
1.不需要实现_read(size)和_write(chunk, encoding, callback)方法
2.而是要实现_transform(chunk, encoding, callback)和_flush(callback)方法
3._transform()方法需要接受来自write()请求的数据，修改并推出
4.注意：经过_transform方法后，JSON中增加了handled属性
# 5.4 用Zlib压缩和解压缩数据


