(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.is = void 0;
    /**
     * is 类型判断类封装
     * @type {Boolean}  true | false
     */
    var call = function (val) { return Object.prototype.toString.call(val); };
    exports.is = {
        // 判断一个值的类型是否为指定字符串
        type: function (val, str) { return call(val) === "[object ".concat(str || "Object", "]"); },
        // 判断一个值是否为数组
        array: function (arr) { return call(arr) === "[object Array]"; },
        // 判断一个值是否为对象
        object: function (obj) { return obj != null && call(obj) === "[object Object]"; },
        // 判断一个值是否为数
        number: function (num) { return call(num) === "[object Number]"; },
        // 判断一个值是否为字符串
        string: function (str) { return call(str) === "[object String]"; },
        // 判断一个值是否为布尔值
        boolean: function (val) { return call(val) === "[object Boolean]"; },
        // 判断一个值是否为日期对象
        date: function (d) { return call(d) === "[object Date]"; },
        // 判断一个值是否为空值（包括 undefined、null、空字符串、空数组和空对象）
        empty: function (val) {
            if (exports.is.object(val) || exports.is.array(val)) {
                return JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
            }
            return val === undefined || val === null || val === "";
        },
        // 与 empty 相反，判断一个值是否非空
        checkData: function (val) {
            if (exports.is.object(val) || exports.is.array(val)) {
                return JSON.stringify(val) !== "{}" && JSON.stringify(val) !== "[]";
            }
            return val !== undefined && val !== null && val !== "";
        },
        // 判断一个对象是否具有指定的键名
        hasKey: function (obj, key) { return (exports.is.object(obj) && Object.prototype.hasOwnProperty.call(obj, key)); },
        // 判断一个数值是否为非负数
        positive: function (val) { return typeof val === "number" && val >= 0; },
        // 判断一个数值是否为负数
        negative: function (val) { return typeof val === "number" && val < 0; },
        // 判断一个数值是否为偶数
        even: function (val) { return typeof val === "number" && val % 2 === 0; },
        // json字符串
        isJsonString: function (str) {
            try {
                JSON.parse(str);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        // 是否是数字
        isNumber: function (val) { return typeof val === "number" && !isNaN(val); },
        // 是否是日期时间
        isDate: function (val) { return isNaN(val) && !isNaN(Date.parse(val)); },
        // 获取值类型
        getType: function (val) {
            var type = typeof val;
            if (type !== 'object')
                return type;
            return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, "$1").toLowerCase();
        },
        //根据字符串的内容来判断需要转换的类型
        parseString: function (str) {
            if (str === "NaN") {
                return NaN;
            }
            else if (str === "null") {
                return null;
            }
            else if (str === "undefined") {
                return undefined;
            }
            else if (str === "true" || str === "false") {
                return Boolean(str);
            }
            else if (!isNaN(Number(str))) {
                return Number(str);
            }
            else if (str.startsWith("[") && str.endsWith("]")) {
                return JSON.parse(str);
            }
            else if (str.startsWith("{") && str.endsWith("}")) {
                return JSON.parse(str);
            }
            else {
                return str;
            }
        }
    };
    exports.default = exports.is;
});
