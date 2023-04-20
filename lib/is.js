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
        type: function (val, str) { return call(val) === "[object ".concat(str || "Object", "]"); },
        array: function (arr) { return call(arr) === "[object Array]"; },
        object: function (obj) { return obj != null && call(obj) === "[object Object]"; },
        number: function (num) { return call(num) === "[object Number]"; },
        string: function (str) { return call(str) === "[object String]"; },
        boolean: function (val) { return call(val) === "[object Boolean]"; },
        date: function (d) { return call(d) === "[object Date]"; },
        // empty: (val: any) =>
        //     ["undefined", "null", "", "NaN", "[]", "{}"].includes(
        //         ((is.object(val) || is.array(val)) && JSON.stringify(val)) ||
        //             String(val)
        //     ),
        empty: function (val) {
            if (exports.is.object(val) || exports.is.array(val)) {
                return JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
            }
            return val === undefined || val === null || val === "";
        },
        checkData: function (val) {
            if (exports.is.object(val) || exports.is.array(val)) {
                return JSON.stringify(val) !== "{}" && JSON.stringify(val) !== "[]";
            }
            return val !== undefined && val !== null && val !== "";
        },
        hasKey: function (obj, key) {
            return exports.is.object(obj) && Object.prototype.hasOwnProperty.call(obj, key);
        },
        positive: function (val) { return typeof val === "number" && val >= 0; },
        negative: function (val) { return typeof val === "number" && val < 0; },
        even: function (val) { return typeof val === "number" && val % 2 === 0; },
        // json字符串
    };
    exports.default = exports.is;
});
