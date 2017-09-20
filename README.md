## 颜色工具

> 安装

```
npm install smaller-web
```

> 使用

1. 引用
```
import Color from 'pretty-color'
```
或
```
<script src="pretty-color/dist/index.js"></script>
```
2. Color对象
+ Constructor
```
    Color(param[,rgb(a), number, string])
```
+ Methods
```
    toRgb(opaction) 转换成rgb(a)格式
```
```
    toHex() 转换成十六进制
```
```
    toDec() 转换成十进制
```
+ Examples
```js
var color = new Color('#ccc')
color.toRgb(0.3)  // => rgba(204,204,204,30)
var color = new Color('red')
color.toHex()     // => #FF0000
```