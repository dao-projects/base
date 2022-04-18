/**
 * is 类型判断类封装
 * @type {Boolean}  true | false
 */
const call = (val) => Object.prototype.toString.call(val);
export const is = {
    type: (val, str) => call(val) === `[object ${str || "Object"}]`,
    array: (arr) => call(arr) === "[object Array]",
    object: (obj) => obj != null && call(obj) === "[object Object]",
    number: (num) => call(num) === "[object Number]",
    string: (str) => call(str) === "[object String]",
    boolean: (val) => call(val) === "[object Boolean]",
    date: (d) => call(d) === "[object Date]",
    // empty: (val: any) =>
    //     ["undefined", "null", "", "NaN", "[]", "{}"].includes(
    //         ((is.object(val) || is.array(val)) && JSON.stringify(val)) ||
    //             String(val)
    //     ),
    empty: (val) => {
        if (is.object(val) || is.array(val)) {
            return JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
        }
        return val === undefined || val === null || val === "";
    },
    checkData: (val) => {
        if (is.object(val) || is.array(val)) {
            return JSON.stringify(val) !== "{}" && JSON.stringify(val) !== "[]";
        }
        return val !== undefined && val !== null && val !== "";
    },
    hasKey: (obj, key) =>
        is.object(obj) && Object.prototype.hasOwnProperty.call(obj, key),
    positive: (val) => typeof val === "number" && val >= 0,
    negative: (val) => typeof val === "number" && val < 0,
    even: (val) => typeof val === "number" && val % 2 === 0,
    // json字符串
};
export default is;
