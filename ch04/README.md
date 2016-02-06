# 心得体会
## 4-3
该程序运行结果为：
```
Next Tick 1 Executed
Next Tick 2 Executed
Immediate Timer 1 Executed
Immediate Timer 2 Executed
4-3-nexttick.js Exists
```
此处与书中执行顺序略有不同<br/>
## 4-4
该程序运行结果为：
```
Account balance: $220
Account balance: $540
Account balance: $1140
Goal Achieved!!!
Account balance: $-60
Account overdrawn!!!
```
1. emitter.on(msg, callback)<br/>
监听函数的第一个参数作为监听消息的内容，一旦捕获值为msg的消息，则执行回调<br/>
第二个参数是一个回调函数，注意一定传入函数对象，而非返回值<br/>
2. 注意Account是自定义的对象，要想实现对事件的监听，就需要把events.EventEmitter.prototype添加到对象原型<br/>