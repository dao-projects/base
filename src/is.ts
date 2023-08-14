/**
 * is 类型判断类封装
 * @type {Boolean}  true | false
 */
const call = (val) => Object.prototype.toString.call(val);
export const is = {
  // 判断一个值的类型是否为指定字符串
  type: (val, str) => call(val) === `[object ${str || "Object"}]`,
  // 判断一个值是否为数组
  array: (arr) => call(arr) === "[object Array]",
  // 判断一个值是否为对象
  object: (obj) => obj != null && call(obj) === "[object Object]",
  // 判断一个值是否为数
  number: (num) => call(num) === "[object Number]",
  // 判断一个值是否为字符串
  string: (str) => call(str) === "[object String]",
  // 判断一个值是否为布尔值
  boolean: (val) => call(val) === "[object Boolean]",
  // 判断一个值是否为函数
  function: (val) => call(val) === "[object Function]",
  // 判断一个值是否为函数(异步)
  asyncFunction: (val) => call(val) === "[object AsyncFunction]",
  // 判断一个值是否为正则表达式
  regExp: (val) => call(val) === "[object RegExp]",
  // 判断一个值是否为Map
  map: (val) => call(val) === "[object Map]",
  // 判断一个值是否为Set
  set: (val) => call(val) === "[object Set]",
  // 判断一个值是否为Promise
  promise: (val) => call(val) === "[object Promise]",
  // 判断一个值是否为日期对象
  date: (d) => call(d) === "[object Date]",
  // isDate:(val) => val instanceof Date,
  // 判断一个值是否为空值（包括 undefined、null、空字符串、空数组和空对象）
  empty: (val) => {
    if (is.object(val) || is.array(val)) {
      return JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
    }
    return val === undefined || val === null || val === "";
  },
  // 与 empty 相反，判断一个值是否非空
  checkData: (val) => {
    if (is.object(val) || is.array(val)) {
      return JSON.stringify(val) !== "{}" && JSON.stringify(val) !== "[]";
    }
    return val !== undefined && val !== null && val !== "";
  },
  // 判断一个对象是否具有指定的键名
  hasKey: (obj, key) => (is.object(obj) && Object.prototype.hasOwnProperty.call(obj, key)),
  // 判断一个数值是否为非负数
  positive: (val) => typeof val === "number" && val >= 0,
  // 判断一个数值是否为负数
  negative: (val) => typeof val === "number" && val < 0,
  // 判断一个数值是否为偶数
  even: (val) => typeof val === "number" && val % 2 === 0,
  // 判断一个数值是否为Symbol
  isSymbol:(val) => typeof val === 'symbol',
  // 判断一个数值是否为null或undefined
  isNullOrUndefined:(val) => {
    if (val === null) return true
    if (typeof val === 'undefined') return true
    return false
  },
  // json字符串
  isJsonString: (str) => {
    try { JSON.parse(str); return true } catch (error) { return false }
  },
  // 是否是数字
  isNumber: (val) => typeof val === "number" && !isNaN(val) && !Number.isNaN(Number(val)),
  // 是否是日期时间
  isDate: (val) => isNaN(val) && !isNaN(Date.parse(val)),
  // 获取值类型
  getType: (val) => {
    const type = typeof val;
    if (type !== 'object') return type;
    return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, "$1").toLowerCase();
  },
  //根据字符串的内容来判断需要转换的类型
  parseString: (str) => {
    // if (str === "NaN") {
    //     return NaN;
    // } else if (str === "null") {
    //     return null;
    // } else if (str === "undefined") {
    //     return undefined;
    // } else if (str === "true" || str === "false") {
    //     return Boolean(str);
    // } else if (!isNaN(Number(str))) {
    //     return Number(str);
    // } else if (str.startsWith("[") && str.endsWith("]")) {
    //     return JSON.parse(str);
    // } else if (str.startsWith("{") && str.endsWith("}")) {
    //     return JSON.parse(str);
    // } else {
    //     return str;
    // }
    if (str === 'null') {
      return null;
    }
    if (str === 'undefined') {
      return undefined;
    }
    if (str === 'true' || str === 'false') {
      return Boolean(str);
    }
    const regex = /^\d+(\.\d+)?$/;
    if (regex.test(str)) {
      return parseFloat(str);
    }
    try {
      const parsedObj = JSON.parse(str);
      if (Array.isArray(parsedObj)) {
        return parsedObj.map((item) => is.parseString(item));
      }
      if (typeof parsedObj === 'object') {
        const result = {};
        for (const key in parsedObj) {
          if (parsedObj.hasOwnProperty(key)) {
            result[key] = is.parseString(parsedObj[key]);
          }
        }
        return result;
      }
    } catch (e) {
      // do nothing
    }
    return str;
  }
};
export default is;



