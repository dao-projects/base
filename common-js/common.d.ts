/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
export declare function deepCopyJSON(obj: any): any;
/**
 * [serialize 序列化]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export declare function serialize(item: any): string;
/**
 * [deserialize 反序列化]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export declare function deserialize(data: any): any;
/**
 * 深度复制（采用递归式）
 * @param obj 复制对象
 */
export declare function deepCopy(obj: any): {};
/** 创建GUID */
export declare function createGuid(): string;
/**
 * 创建指定范围的随机整数
 * @param minInt 最小整数
 * @param maxInt 最大整数
 */
export declare function createIntRandom(minInt: any, maxInt: any): any;
/** 判断网页是否通过移动端设备打开 */
export declare function isFromMobileBrowser(): boolean;
/**
 * 复制文本
 * @param text 文本
 */
export declare function copyText(text: any): Promise<any>;
/**
 * 对象扩展（JQuery $.extend 实现代码）
 * @param _ 深度复制
 * @param sourceObj 源对象
 * @param targetObj 目标对象
 */
export declare function $extend(_deep: any, sourceObj: any, targetObj: any): any;
/**
 * 防抖:fn函数在最后一次调用时刻的delay毫秒之后执行
 * （当持续触发事件时，
 * 一定时间段内没有再触发事件，
 * 事件处理函数才会执行一次，
 * 如果设定的时间到来之前，
 * 又一次触发了事件，
 * 就重新开始延时）
 * @param fn 执行函数
 * @param delay 时间间隔
 * @param isImmediate 为true，debounce会在delay时间间隔的开始时立即调用这个函数
 * @returns {Function}
 */
export declare function debounce(fn: any, delay: any, isImmediate: any): () => void;
/**
 * 节流
 * （当持续触发事件时，
 * 保证一定时间段内只调用一次事件处理函数）
 * @param fn 函数
 * @param wait 间隔毫秒数
 * @param options 配置项
 */
export declare function throttle(fn: any, wait: any, options?: {
    leading: boolean;
    trailing: boolean;
}): {
    (): void;
    cancle(): void;
};
/**
 * 加载css
 * @param cssUrl CSS路径
 */
export declare function loadCss(cssUrl: any): void;
/**
 * 加载js
 * @param jsUrl JS路径
 */
export declare function loadJs(jsUrl: any): void;
/**
 * 随机获取数组的其中一个子集
 * @param arr 数组
 */
export declare function getArrayItemRandom(arr: any): any;
/**
 * merge 对象合并
 * @param  {[type]} foo [description]
 * @param  {[type]} bar [description]
 * @return {[type]}     [description]
 */
export declare function merge(foo: any, bar: any): {};
/**
 * extend 合并对象
 * @param  {[type]} obj   [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export declare function extend(target: any, source: any): any;
/**
 * [extractURL description]
 * @param  {[type]} resource: string        | {uri: string} [description]
 * @return {[type]}           [description]
 */
export declare function extractURL(resource: any): any;
/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
export declare function urlEncode(param: any, key: any, encode: any): string;
/**
 * randomNumBoth随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}     生成区间的值
 */
export declare function randomNumBoth(min: any, max: any): any;
/**
 * toPercent 转换为%
 * @param  {[type]} point [description]
 * @return {[type]}       [description]
 */
export declare function toPercent(point: any): string;
export declare function generic_name(): string;
/**
 * 货币格式化方法，不用prototype对Number进行拓展的版本
 * @param {*} number  数据
 * @param {*} places  保留几位小数
 * @param {*} symbol 货币符号
 * @param {*} thousand  千位分隔符
 * @param {*} decimal 小数分隔符
 * @example
 *      formatMoney(199999,2,'',',','.');
 */
export declare function formatMoney(number: any, places: any, symbol: any, thousand: any, decimal: any): string;
/**
 * 版本处理比较
 * @description 0: 版本一致   1: v1大于v2  -1: v1小于v2
 * @param {*} v1    1.0.1
 * @param {*} v2    1.0.2
 */
export declare function compareVersion(v1: any, v2: any): 0 | 1 | -1;
/**
 * sums 求数组总和
 * @param  {[type]} datas [{name:'',value:12},{....}]
 * @param  {String} key   [description]
 * @return {[type]}       [description]
 */
export declare function sums(datas: any, key?: string): any;
/**
 * packedArray 合并数组（追加子节点）
 * @param  {[type]} arr  [description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export declare function packedArray(arr: any, item: any): any[];
/**
 * hexToRgb hex 转 rgb
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
export declare function hexToRgb(hex: any): {
    r: number;
    g: number;
    b: number;
};
/**
 * rgbToHex rgb 转 hex
 * @param  {[type]} r [description]
 * @param  {[type]} g [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
export declare function rgbToHex(r: any, g: any, b: any): string;
/**
 * randomColor 自动生成hex
 * @return {[type]} [description]
 */
export declare function randomColor(): string;
/**
 * colorGradient 颜色渐变
 * @param  {[type]} startColor [description]
 * @param  {[type]} endColor   [description]
 * @param  {[type]} step       [description]
 * @return {[type]}            [description]
 */
export declare function colorGradient(startColor: any, endColor: any, step: any): any[];
/**
 * [handleNum 处理数字(上万转换为以万为单位显示，不足万数字显示原本数字)]
 * @param  {[type]} num     [description]
 * @param  {Number} decimal [description]
 * @return {[type]}         [description]
 */
export declare function handleNum(num: any, decimal?: number): any;
/**
 * 数字精度处理
 * @param  {[type]} num   [description]
 * @param  {[type]} fixed [description]
 * @return {[type]}       [description]
 */
export declare const toFixed: (num: any, fixed: any) => any;
export declare const highlight: (text: any, search: any) => any;
export declare const distanceTime: (time: any) => "" | {
    day: number;
    hour: number;
    minute: number;
    second: number;
};
export declare const timeAgo: (time: any) => string;
/**
 * [assert description]
 * @param  {[type]} condition [description]
 * @param  {[type]} message   [description]
 * @return {[type]}           [description]
 */
export declare function assert(condition: any, message: any): void;
/**
 * [trim 去空]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export declare function trim(str: any): any;
/**
 * [keys description]
 * @param {[type]} arr [description]
 * @example
 *     keysOf({a:1,b:2}) => ['a','b']
 */
export declare const keysOf: <T extends object>(arr: T) => (keyof T)[];
/**
 * [entries description]
 * @param {[type]} arr [description]
 * @example
 *       entriesOf({a:1,b:2}) => [['a',1],['b',2]]
 */
export declare const entriesOf: <T extends object>(arr: T) => Entries<T>;
/**
 * 一维数组转树形结构。
 *
 * @param { Array } arr 需要转换的数组
 * @param { String } key 数组中每个元素的唯一标识属性
 * @param { String } parentId 数组中每个元素的父级 id 属性
 * @param { Number | String } rootIdVal 数组中可以作为根节点的父级 id 的值，具有唯一性
 * @param { Object } res 返回值
 * @example  // arrayToTree(arr, 'id', 'pid', 0)
 */
export declare const arrayToTree: (arr: any, key: any, parentId: any, rootIdVal: any) => any;
/**
 * 深度优先遍历（DFS）算法
 * @param n
 * @returns
 * @example dfs([{id: 1,children:[{id:5},{id:6}]},{id: 2},{id: 3}]) =>// [{id: 1,children:[{id:5},{id:6}]},{id: 5},{id: 6},{id: 2},{id: 3}]
 */
export declare const dfs: (n: any, key?: string) => any;
/**
 * 广度优先遍历（BFS）算法
 * @param n
 * @returns
 * @example bfs([{id: 1,children:[{id:5},{id:6}]},{id: 2},{id: 3}]) =>// [{id: 1,children:[{id:5},{id:6}]},{id: 5},{id: 6},{id: 2},{id: 3}]
 */
export declare const bfs: (tree: any, list?: any[]) => any[];
/**
 * 扁平数组转树形结构
 * @param arr 数组
 * @param pid 根父级id
 * @param key  父级id名称（key）
 * @returns
 * @example  flatToTree([{ id: 1, name: 'A', pid: null },{ id: 2, name: 'B', pid: 1 },{ id: 3, name: 'C', pid: 1 },{ id: 4, name: 'D', pid: 2 },],1,'id','pid') => // [{id: 2, name: 'B', pid: 1,children:[{}]},{id: 3, name: 'C', pid: 1}]
 */
export declare const flatToTree: (arr?: any[], pId?: any, key?: string, pKey?: string) => any[];
/**
 * 将对象数组转换成对象
 * @param arr 待处理的数组
 * @param key 组成对象的键
 * @param value 组成对象的值
 * @example
 *         arrayToObj([{key:'label1',value:1},{key:'label2',value:2}])  => {label1:1,label2:2}
 *         arrayToObj([{name:'label1',id:1},{name:'label2',id:2}],'name','id')  => {label1:1,label2:2}
 */
export declare const arrayToObj: (arr?: any[], key?: string, value?: string) => {};
/**
 * 将对象转换成对象数组
 * @param obj  待处理的对象
 * @param key 组成对象的键
 * @param value 组成对象的值
 * @example
 *          objToArray({label1:1,label2:2})   => [{key:'label1',value:1},{key:'label2',value:2}]
 *          objToArray({label1:1,label2:2} ,'name','id')   => [{name:'label1',id:1},{name:'label2',id:2}]
 */
export declare const objToArray: (obj?: {}, key?: string, value?: string) => any[];
/**
 * 简化 filter 的取值
 * @param arr 待处理的数组
 * @param key 匹配 value 的对象的键
 * @param value 与 需要相等 的value值
 * @param name  需要获取的对象值
 * @returns
 * @example
 *      filterBy([{id:1,name:'张先生'},{id:2,name:'李先生'}], 'id', 1, 'name')  => 张先生
 */
export declare const filterBy: (arr: any[], key: string, value: any, name?: string) => any;
/**
 * 数组映射修改
 * @param arr 数组
 * @param mapKey 映射关系
 * @example
 *      arrayMapKey([{title:'标题一',value:12},{title:'标题二',value:13}],{title:'label'})   => [{label:'标题一',value:12},{label:'标题二',value:13}]
 */
export declare const arrayMapKey: (arr?: any[], mapKey?: {}) => any[];
/**
 * 列表分组
 * @param arr  原始数组
 * @param key 分组字段
 * @param keyMap 映射值  {title:"label"}
 * @returns
 */
export declare const listGroup: (arr?: any[], key?: string, keyMap?: {}) => any;
