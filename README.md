# @daoxin/base
## 安装

```bash
npm install @daoxin/base
```

## 接口文档

```
import {common,storage,is,date,to,verify} from "@daoxin/base"

```

### common

```
common.compareVersion("1.0.1", "1.0.3")
```

| 方法                   | 描述                                |
| ---------------------- | ------------------------------------ |
| deepCopyJSON()        | 深度复制（采用JSON解析方式）         |
| deepCopy()            | 深度复制（采用递归式）               |
| createGuid ()          | 创建GUID                             |
| createIntRandom()     | 创建指定范围的随机整数               |
| isFromMobileBrowser() | 判断网页是否通过移动端设备打开       |
| copyText()            | 复制文本                             |
| $extend()             | 对象扩展（JQuery $.extend 实现代码） |
| debounce()            | 防抖                                 |
| throttle()            | 节流                                 |
| loadCss()             | 加载css                              |
| loadJs()              | 加载js                               |
| getArrayItemRandom()  | 随机获取数组中的一个子集               |
| extend()              | 对象合并(简单)               |
| merge()               | 对象合并               |
| compareVersion(v1, v2)      | 版本比较  //=> 1,-1,0             |
| sums(datas, key = 'value')                | 求数组总和             |
| highlight |文本高亮|
| distanceTime |距离时间|
| timeAgo |几年前、几月前、几周、几天前、几小时前、几分钟前、刚刚|


```
'extractURL', 'urlEncode', 'randomNumBoth', 'toPercent', 'generic_name', 'formatMoney', 'serialize', 'deserialize', 'packedArray'
```


### storage

```
const {local,session} =  storage

local.set(key, value)  //=> storage.local.set("xxx", 123);
local.get(key)
local.getUseJSON(key)
local.remove(key)
local.clear()

session.set(key, value)
session.get(key)
session.getUseJSON(key)
session.remove(key)
session.clear()
```

| 方法                   | 描述                                |
| ---------------------- | ------------------------------------ |
| set(key, value)        | 保存指定key数据         |
| get(key)               | 获取指定key数据               |
| getUseJSON(key)        | 获取指定key数据（JSON）                |
| remove(key)            | 删除指定key数据               |
| clear()                | 清空所有数据               |


### is

```
is.type(val, str = "Object")
is.array(arr)
is.object(obj)
is.number(num)
is.string(str)
is.boolean(val)
is.date(d)
is.empty(val)
is.hasKey((obj, key))
is.positive(val)
is.negative(val)
is.even(val)
```

| 方法                   | 描述                                |
| ---------------------- | ------------------------------------ |
| type(val, str)         | 判断值类型  `is.type(123,'Number')`         |
| array(arr)             | 是否是数组               |
| object(arr)            | 是否是对象              |
| number(num)            | 是否是数字               |
| string(str)            | 是否是字符串               |
| boolean(val)           | 是否是布尔值               |
| date(d)                | 是否是日期              |
| empty(val)             | 是否为空              |
| empty(val)             | 是否为空              |


### date

```
date.formatTime(date, "yyyy-MM-dd")
date.time(date)
date.getNextDate(nDays = 1, fmt = "yyyy-MM-dd")
date.getTimeBucket(dayArr = [7, 1 * 30, 3 * 30], fmt = "")
date.compareDate(s1, s2)
date.maxExpireDate()
```


### to

```
 let [err, result] = await to(axios[method](url, data, {headers}));
if (err) {
  setError(true);
  setNodata(true);
  setLoading(false);
  cb.current && cb.current(err, undefined);
  callback && callback(err, undefined);
  return err;
}
```

### verify
```
verify.regex(17898479990,verify.phone) //=> true
verify.regex(17898179973,"phone")
```


```
$ npm link
$ npm adduser
$ npm publish --access public
```