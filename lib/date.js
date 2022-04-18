(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.date = void 0;
    /**
     * _date 时间封装
     * @type {Object}
     */
    var is_1 = require("./is");
    exports.date = {
        formatTime: function (d, fmt) {
            if (fmt === void 0) { fmt = "yyyy-MM-dd"; }
            if (is_1.default.empty(d))
                return "";
            d = is_1.default.date(d) ? d : new Date(d);
            if (fmt === "time") {
                return d.getTime();
            }
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                S: d.getMilliseconds(),
                "W+": d.getDay(), //星期
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1
                        ? o[k]
                        : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return fmt;
        },
        time: function (t) {
            if (t === void 0) { t = new Date(); }
            return (is_1.default.date(t) ? t : new Date(t)).getTime();
        },
        getNextDate: function (nDays, fmt) {
            if (nDays === void 0) { nDays = 1; }
            if (fmt === void 0) { fmt = ""; }
            var time = new Date(exports.date.time() + 24 * 60 * 60 * 1000 * Number(nDays));
            return fmt ? exports.date.formatTime(time, fmt) : time;
        },
        getTimeBucket: function (dayArr, fmt) {
            if (dayArr === void 0) { dayArr = [7, 1 * 30, 3 * 30]; }
            if (fmt === void 0) { fmt = ""; }
            var h24 = 24 * 60 * 60 * 1000;
            var t = exports.date.time();
            return dayArr.map(function (v, i) { return ({
                begin: fmt
                    ? exports.date.formatTime(t - Number(v) * h24, fmt)
                    : t - Number(v) * h24,
                end: fmt ? exports.date.formatTime(t, fmt) : t,
            }); });
        },
        compareDate: function (s1, s2) {
            return new Date(s1.replace(/-/g, "/")) > new Date(s2.replace(/-/g, "/"));
        },
        maxExpireDate: function () { return new Date("Fri, 31 Dec 9999 23:59:59 UTC"); },
    };
    exports.default = exports.date;
});
