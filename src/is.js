/**
 * is 类型判断类封装
 * @type {Boolean}  true | false
 */
const call = () => Object.prototype.toString.call
export const is = {
    type: (val, str = "Object") => call(val) === `[object ${str}]`,
    // isType: (type) => (str = 'Object') => call(val) === `[object ${str}]`,
    array: arr => call(arr) === '[object Array]',
    object: obj => (obj != null && call(obj) === '[object Object]'),
    number: num => call(num) === '[object Number]',
    string: str => call(str) === '[object String]',
    boolean: val => call(val) === "[object Boolean]",
    date: d => call(d) === '[object Date]',
    empty: val => ['undefined', 'null', '', 'NaN', '[]', '{}'].includes((is.object(val) || is.array(val)) && JSON.stringify(val) || String(val)),
    hasKey: (obj, key) => is.object(obj) && Object.prototype.hasOwnProperty.call(obj, key),
    positive: val => (typeof value === 'number' && value >= 0),
    negative: val => (typeof value === 'number' && value < 0),
    even: val => (typeof value === 'number' && value % 2 === 0),
    // json字符串
        
}
export default is