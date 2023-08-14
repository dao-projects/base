"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGroup = exports.arrayMapKey = exports.filterBy = exports.objToArray = exports.arrayToObj = exports.flatToTree = exports.bfs = exports.dfs = exports.arrayToTree = exports.entriesOf = exports.keysOf = exports.trim = exports.assert = exports.timeAgo = exports.distanceTime = exports.highlight = exports.toFixed = exports.handleNum = exports.colorGradient = exports.randomColor = exports.rgbToHex = exports.hexToRgb = exports.packedArray = exports.sums = exports.compareVersion = exports.formatMoney = exports.generic_name = exports.toPercent = exports.randomNumBoth = exports.urlEncode = exports.extractURL = exports.extend = exports.merge = exports.getArrayItemRandom = exports.loadJs = exports.loadCss = exports.throttle = exports.debounce = exports.$extend = exports.copyText = exports.isFromMobileBrowser = exports.createIntRandom = exports.createGuid = exports.deepCopy = exports.deserialize = exports.serialize = exports.deepCopyJSON = void 0;
var is_1 = require("./is");
/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
function deepCopyJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepCopyJSON = deepCopyJSON;
/**
 * [serialize 序列化]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
function serialize(item) {
    return JSON.stringify(item);
}
exports.serialize = serialize;
/**
 * [deserialize 反序列化]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function deserialize(data) {
    return data && JSON.parse(data);
}
exports.deserialize = deserialize;
/**
 * 深度复制（采用递归式）
 * @param obj 复制对象
 */
function deepCopy(obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = typeof obj[key] === "object" && obj[key] !== null ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
exports.deepCopy = deepCopy;
/** 创建GUID */
function createGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return "".concat(S4()).concat(S4(), "-").concat(S4(), "-").concat(S4(), "-").concat(S4(), "-").concat(S4()).concat(S4()).concat(S4());
}
exports.createGuid = createGuid;
/**
 * 创建指定范围的随机整数
 * @param minInt 最小整数
 * @param maxInt 最大整数
 */
function createIntRandom(minInt, maxInt) {
    return minInt + Math.round(Math.random() * (maxInt - minInt));
}
exports.createIntRandom = createIntRandom;
/** 判断网页是否通过移动端设备打开 */
function isFromMobileBrowser() {
    return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}
exports.isFromMobileBrowser = isFromMobileBrowser;
/**
 * 复制文本
 * @param text 文本
 */
function copyText(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, text];
            }
        });
    });
}
exports.copyText = copyText;
/**
 * 对象扩展（JQuery $.extend 实现代码）
 * @param _ 深度复制
 * @param sourceObj 源对象
 * @param targetObj 目标对象
 */
function $extend(_deep, sourceObj, targetObj) {
    function isPlainObject(obj) {
        var class2type = {};
        var getProto = Object.getPrototypeOf;
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
        }
        var proto = getProto(obj);
        if (!proto) {
            return true;
        }
        var Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    }
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, // eslint-disable-line
    i = 1, length = arguments.length, // eslint-disable-line
    deep = false; // eslint-disable-line
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {}; // eslint-disable-line
        i = 2;
    }
    if (typeof target !== "object" && typeof target !== "function") {
        target = {};
    }
    if (length === i) {
        target = this;
        --i;
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) !== null) {
            // eslint-disable-line
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }
                    else {
                        clone = src && isPlainObject(src) ? src : {};
                    }
                    target[name] = $extend(deep, clone, copy); // eslint-disable-line
                }
                else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
exports.$extend = $extend;
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
function debounce(fn, delay, isImmediate) {
    var timer = null; //初始化timer，作为计时清除依据
    return function () {
        var context = this; //获取函数所在作用域this
        var args = arguments; //取得传入参数
        clearTimeout(timer);
        if (isImmediate && timer === null) {
            //时间间隔外立即执行
            fn.apply(context, args);
            timer = 0;
            return;
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
        }, delay);
    };
}
exports.debounce = debounce;
/**
 * 节流
 * （当持续触发事件时，
 * 保证一定时间段内只调用一次事件处理函数）
 * @param fn 函数
 * @param wait 间隔毫秒数
 * @param options 配置项
 */
function throttle(fn, wait, options) {
    if (options === void 0) { options = {
        leading: true,
        trailing: true,
    }; }
    var handle = null, previous = 0;
    var throttled = function () {
        var now = Date.now();
        var context = this; //获取函数所在作用域this
        var args = arguments; //取得传入参数
        if (!previous && !options.leading) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (handle) {
                clearTimeout(handle);
                handle = null;
            }
            previous = now;
            fn.apply(context, args);
        }
        else if (!handle && options.trailing) {
            handle = setTimeout(function () {
                previous = !options.leading ? 0 : Date.now();
                handle = null;
                fn.apply(context, args);
            }, remaining);
        }
    };
    throttled.cancle = function () {
        clearTimeout(handle);
        previous = 0;
        handle = null;
    };
    return throttled; // eslint-disable-line @typescript-eslint/no-explicit-any
}
exports.throttle = throttle;
/**
 * 加载css
 * @param cssUrl CSS路径
 */
function loadCss(cssUrl) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    link.media = "all";
    document.head.appendChild(link);
}
exports.loadCss = loadCss;
/**
 * 加载js
 * @param jsUrl JS路径
 */
function loadJs(jsUrl) {
    var script = document.createElement("script");
    script.src = jsUrl;
    document.head.appendChild(script);
}
exports.loadJs = loadJs;
/**
 * 随机获取数组的其中一个子集
 * @param arr 数组
 */
function getArrayItemRandom(arr) {
    var index = createIntRandom(0, arr.length - 1);
    return arr[index];
}
exports.getArrayItemRandom = getArrayItemRandom;
/**
 * merge 对象合并
 * @param  {[type]} foo [description]
 * @param  {[type]} bar [description]
 * @return {[type]}     [description]
 */
function merge(foo, bar) {
    var merged = {};
    for (var each in bar) {
        if (foo.hasOwnProperty(each) && bar.hasOwnProperty(each)) {
            if (typeof foo[each] === "object" && typeof bar[each] === "object") {
                merged[each] = merge(foo[each], bar[each]);
            }
            else {
                merged[each] = bar[each];
            }
        }
        else if (bar.hasOwnProperty(each)) {
            merged[each] = bar[each];
        }
    }
    for (var each in foo) {
        if (!(each in bar) && foo.hasOwnProperty(each)) {
            merged[each] = foo[each];
        }
    }
    return merged;
}
exports.merge = merge;
/**
 * extend 合并对象
 * @param  {[type]} obj   [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
// export function extend(obj, props) {
//   for (var key in props) obj[key] = props[key];
//   return obj;
// }
function extend(target, source) {
    if (Object.assign) {
        Object.assign(target, source);
    }
    else {
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== "__proto__") {
                target[key] = source[key];
            }
        }
    }
    return target;
}
exports.extend = extend;
/**
 * [extractURL description]
 * @param  {[type]} resource: string        | {uri: string} [description]
 * @return {[type]}           [description]
 */
function extractURL(resource) {
    if (typeof resource === "string") {
        return resource;
    }
    if (typeof resource === "object" && typeof resource.uri === "string") {
        return resource.uri;
    }
    return null;
}
exports.extractURL = extractURL;
/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
function urlEncode(param, key, encode) {
    if (param == null)
        return "";
    var paramStr = "";
    var t = typeof param;
    if (t == "string" || t == "number" || t == "boolean") {
        paramStr += "&" + key + "=" + (encode == null || encode ? encodeURIComponent(param) : param);
    }
    else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
}
exports.urlEncode = urlEncode;
/**
 * randomNumBoth随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}     生成区间的值
 */
function randomNumBoth(min, max) {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range); //四舍五入
    return num;
}
exports.randomNumBoth = randomNumBoth;
/**
 * toPercent 转换为%
 * @param  {[type]} point [description]
 * @return {[type]}       [description]
 */
function toPercent(point) {
    var str = Number(point * 100).toFixed(2);
    str += "%";
    return str;
}
exports.toPercent = toPercent;
//生成文件名称
function generic_name() {
    var $chars = "abcdefghijklmnopqrstwxyz0123456789";
    var maxPos = $chars.length;
    var pwd = "";
    for (var i = 0; i < 3; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return new Date().getTime() + pwd;
}
exports.generic_name = generic_name;
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
function formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    places = !isNaN((places = Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "", i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return (symbol +
        negative +
        (j ? i.substr(0, j) + thousand : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) +
        (places
            ? decimal +
                Math.abs(number - Number(i) || 0)
                    .toFixed(places)
                    .slice(2)
            : ""));
}
exports.formatMoney = formatMoney;
/**
 * 版本处理比较
 * @description 0: 版本一致   1: v1大于v2  -1: v1小于v2
 * @param {*} v1    1.0.1
 * @param {*} v2    1.0.2
 */
function compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    var len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push("0");
    }
    while (v2.length < len) {
        v2.push("0");
    }
    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
exports.compareVersion = compareVersion;
/**
 * sums 求数组总和
 * @param  {[type]} datas [{name:'',value:12},{....}]
 * @param  {String} key   [description]
 * @return {[type]}       [description]
 */
function sums(datas, key) {
    if (key === void 0) { key = "value"; }
    return (is_1.default.array(datas) && datas.reduce(function (val, output) { return val + output[key]; }, 0)) || 0;
}
exports.sums = sums;
/**
 * packedArray 合并数组（追加子节点）
 * @param  {[type]} arr  [description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
function packedArray(arr, item) {
    return (!is_1.default.empty(arr) && __spreadArray(__spreadArray([], arr, true), [item], false)) || [item];
}
exports.packedArray = packedArray;
/**
 * hexToRgb hex 转 rgb
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}
exports.hexToRgb = hexToRgb;
/**
 * rgbToHex rgb 转 hex
 * @param  {[type]} r [description]
 * @param  {[type]} g [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
exports.rgbToHex = rgbToHex;
/**
 * randomColor 自动生成hex
 * @return {[type]} [description]
 */
function randomColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
}
exports.randomColor = randomColor;
/**
 * colorGradient 颜色渐变
 * @param  {[type]} startColor [description]
 * @param  {[type]} endColor   [description]
 * @param  {[type]} step       [description]
 * @return {[type]}            [description]
 */
function colorGradient(startColor, endColor, step) {
    var startRGB = hexToRgb(startColor);
    var startR = startRGB.r;
    var startG = startRGB.g;
    var startB = startRGB.b;
    var endRGB = hexToRgb(endColor);
    var endR = endRGB.r;
    var endG = endRGB.g;
    var endB = endRGB.b;
    var sR = (endR - startR) / step;
    var sG = (endG - startG) / step;
    var sB = (endB - startB) / step;
    var colorArr = [];
    for (var i = 0; i < step; i++) {
        startR += sR;
        startG += sG;
        startB += sB;
        colorArr.push(rgbToHex(startR, startG, startB));
    }
    return colorArr;
}
exports.colorGradient = colorGradient;
/**
 * [handleNum 处理数字(上万转换为以万为单位显示，不足万数字显示原本数字)]
 * @param  {[type]} num     [description]
 * @param  {Number} decimal [description]
 * @return {[type]}         [description]
 */
function handleNum(num, decimal) {
    var _a;
    if (decimal === void 0) { decimal = 2; }
    num = parseFloat(num);
    if (num >= 10000) {
        num = ((_a = (num / 10000)) === null || _a === void 0 ? void 0 : _a.toFixed(decimal)) + "万";
    }
    return num;
}
exports.handleNum = handleNum;
/**
 * 数字精度处理
 * @param  {[type]} num   [description]
 * @param  {[type]} fixed [description]
 * @return {[type]}       [description]
 */
var toFixed = function (num, fixed) {
    var _a;
    var temp = num;
    if (num) {
        temp = (_a = Number(num)) === null || _a === void 0 ? void 0 : _a.toFixed(fixed);
    }
    return temp;
};
exports.toFixed = toFixed;
// 文本高亮
var highlight = function (text, search) {
    var pattern = search.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    var regex = new RegExp(pattern, "gi");
    return text.replace(regex, function (match) { return "<span class=\"highlight\">".concat(match, "</span>"); });
};
exports.highlight = highlight;
// 距离时间
var distanceTime = function (time) {
    if (!time)
        return "";
    time = is_1.default.date(time) ? time === null || time === void 0 ? void 0 : time.getTime() : new Date(time).getTime();
    var now = new Date().getTime();
    var distance = now - time;
    var day = Math.floor(distance / (24 * 60 * 60 * 1000));
    var hour = Math.floor((distance / (60 * 60 * 1000)) % 24);
    var minute = Math.floor((distance / (60 * 1000)) % 60);
    var second = Math.floor((distance / 1000) % 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
    };
};
exports.distanceTime = distanceTime;
//  几年前、几月前、几周、几天前、几小时前、几分钟前、刚刚
var timeAgo = function (time) {
    if (!time)
        return "";
    time = is_1.default.date(time) ? time === null || time === void 0 ? void 0 : time.getTime() : new Date(time).getTime();
    var now = new Date().getTime();
    var distance = now - time;
    var seconds = Math.floor(distance / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var weeks = Math.floor(days / 7);
    var months = Math.floor(weeks / 4.35);
    // const years = Math.floor(months / 12);
    if (seconds < 60) {
        return "刚刚";
    }
    else if (minutes <= 60) {
        return "".concat(minutes, "\u5206\u949F\u524D");
    }
    else if (hours <= 24) {
        return "".concat(hours, "\u5C0F\u65F6\u524D");
    }
    else if (days <= 7) {
        return "".concat(days, "\u5929\u524D");
    }
    else if (weeks <= 4.35) {
        return "".concat(weeks, "\u5468\u524D");
    }
    else if (months <= 12) {
        return "".concat(months, "\u6708\u524D");
    }
    else {
        // return `${years}年前`;
        // 年月日
        var dd = new Date(time);
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1;
        var d = dd.getDate();
        return "".concat(y, "-").concat(m > 10 ? m : "0" + m, "-").concat(d > 10 ? d : "0" + d);
    }
};
exports.timeAgo = timeAgo;
/**
 * [assert description]
 * @param  {[type]} condition [description]
 * @param  {[type]} message   [description]
 * @return {[type]}           [description]
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
exports.assert = assert;
/**
 * [trim 去空]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function trim(str) {
    if (str == null) {
        return null;
    }
    else if (typeof str.trim === "function") {
        return str.trim();
    }
    else {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
}
exports.trim = trim;
/**
 * [keys description]
 * @param {[type]} arr [description]
 * @example
 *     keysOf({a:1,b:2}) => ['a','b']
 */
var keysOf = function (arr) { return Object.keys(arr); };
exports.keysOf = keysOf;
/**
 * [entries description]
 * @param {[type]} arr [description]
 * @example
 *       entriesOf({a:1,b:2}) => [['a',1],['b',2]]
 */
var entriesOf = function (arr) { return Object === null || Object === void 0 ? void 0 : Object.entries(arr); };
exports.entriesOf = entriesOf;
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
var arrayToTree = function (arr, key, parentId, rootIdVal) {
    var res = null; // 返回值
    var map = {}; // 映射
    var isHasOwnProperty = function (obj, attr) { return Object.prototype.hasOwnProperty.call(obj, attr); };
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var cId = item[key]; // 当前元素的 id 值
        var pId = item[parentId]; // 当前元素的父级 id 值
        // 将各元素的 id 值作为键，元素本身作为值，并添加 children 属性
        map[cId] = __assign(__assign({}, item), { children: isHasOwnProperty(map, cId) ? map[cId].children : [] });
        if (pId === rootIdVal) {
            res = map[cId]; // 根元素
        }
        else {
            if (!isHasOwnProperty(map, pId)) {
                // 初始化
                map[pId] = {
                    children: [],
                };
            }
            // 为各父级元素添加子元素
            map[pId].children.push(map[cId]);
        }
    }
    return res;
};
exports.arrayToTree = arrayToTree;
/**
 * 深度优先遍历（DFS）算法
 * @param n
 * @returns
 * @example dfs([{id: 1,children:[{id:5},{id:6}]},{id: 2},{id: 3}]) =>// [{id: 1,children:[{id:5},{id:6}]},{id: 5},{id: 6},{id: 2},{id: 3}]
 */
var dfs = function (n, key) {
    if (key === void 0) { key = "children"; }
    return ((n === null || n === void 0 ? void 0 : n.length) ? n.reduce(function (pre, v) { return __spreadArray(__spreadArray(__spreadArray([], pre, true), [v], false), (0, exports.dfs)(v[key]), true); }, []) : []);
};
exports.dfs = dfs;
/**
 * 广度优先遍历（BFS）算法
 * @param n
 * @returns
 * @example bfs([{id: 1,children:[{id:5},{id:6}]},{id: 2},{id: 3}]) =>// [{id: 1,children:[{id:5},{id:6}]},{id: 5},{id: 6},{id: 2},{id: 3}]
 */
var bfs = function (tree, list) {
    if (list === void 0) { list = []; }
    if (!tree.length)
        return;
    var queue = __spreadArray([], tree, true);
    var curr;
    if (queue.length) {
        curr = queue.shift();
        list.push(curr);
        if (curr.children)
            queue = __spreadArray(__spreadArray([], queue, true), curr.children, true);
        (0, exports.bfs)(queue, list);
    }
    return list;
};
exports.bfs = bfs;
/**
 * 扁平数组转树形结构
 * @param arr 数组
 * @param pid 根父级id
 * @param key  父级id名称（key）
 * @returns
 * @example  flatToTree([{ id: 1, name: 'A', pid: null },{ id: 2, name: 'B', pid: 1 },{ id: 3, name: 'C', pid: 1 },{ id: 4, name: 'D', pid: 2 },],1,'id','pid') => // [{id: 2, name: 'B', pid: 1,children:[{}]},{id: 3, name: 'C', pid: 1}]
 */
var flatToTree = function (arr, pId, key, pKey) {
    if (arr === void 0) { arr = []; }
    if (pId === void 0) { pId = null; }
    if (key === void 0) { key = "id"; }
    if (pKey === void 0) { pKey = "parentId"; }
    if (!(arr === null || arr === void 0 ? void 0 : arr.length))
        return [];
    var result = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        if (item[pKey] === pId) {
            var children = (0, exports.flatToTree)(arr, item[key], key, pKey);
            if (children.length) {
                item.children = children;
            }
            result.push(item);
        }
    }
    return result;
};
exports.flatToTree = flatToTree;
/**
 * 将对象数组转换成对象
 * @param arr 待处理的数组
 * @param key 组成对象的键
 * @param value 组成对象的值
 * @example
 *         arrayToObj([{key:'label1',value:1},{key:'label2',value:2}])  => {label1:1,label2:2}
 *         arrayToObj([{name:'label1',id:1},{name:'label2',id:2}],'name','id')  => {label1:1,label2:2}
 */
var arrayToObj = function (arr, key, value) {
    if (arr === void 0) { arr = []; }
    if (key === void 0) { key = "key"; }
    if (value === void 0) { value = "value"; }
    var object = {};
    if (!is_1.default.array(arr)) {
        return [];
        //   return console.error("传入的不是数组");
    }
    for (var index = 0; index < arr.length; index += 1) {
        var item = arr[index];
        object[item[key]] = item[value];
    }
    return object;
};
exports.arrayToObj = arrayToObj;
/**
 * 将对象转换成对象数组
 * @param obj  待处理的对象
 * @param key 组成对象的键
 * @param value 组成对象的值
 * @example
 *          objToArray({label1:1,label2:2})   => [{key:'label1',value:1},{key:'label2',value:2}]
 *          objToArray({label1:1,label2:2} ,'name','id')   => [{name:'label1',id:1},{name:'label2',id:2}]
 */
var objToArray = function (obj, key, value) {
    if (obj === void 0) { obj = {}; }
    if (key === void 0) { key = "key"; }
    if (value === void 0) { value = "value"; }
    var array = [];
    Object.keys(obj).forEach(function (k) {
        var _a;
        var val = obj[k];
        array.push((_a = {},
            _a[key] = k,
            _a[value] = val,
            _a));
    });
    return array;
};
exports.objToArray = objToArray;
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
var filterBy = function (arr, key, value, name) {
    if (arr === void 0) { arr = []; }
    if (key === void 0) { key = "id"; }
    if (name === void 0) { name = "name"; }
    var result = [];
    if (!arr.length || !is_1.default.array(arr))
        return result;
    var arrayFilter = arr.filter(function (item) { return item[key] === value; });
    if (arrayFilter.length > 0) {
        arrayFilter.forEach(function (item) {
            result.push(item[name]);
        });
        if (result.length <= 1) {
            return result[0];
        }
        else {
            return result;
        }
    }
    return undefined;
};
exports.filterBy = filterBy;
/**
 * 数组映射修改
 * @param arr 数组
 * @param mapKey 映射关系
 * @example
 *      arrayMapKey([{title:'标题一',value:12},{title:'标题二',value:13}],{title:'label'})   => [{label:'标题一',value:12},{label:'标题二',value:13}]
 */
var arrayMapKey = function (arr, mapKey) {
    if (arr === void 0) { arr = []; }
    if (mapKey === void 0) { mapKey = {}; }
    if (!is_1.default.array(arr) || !(arr === null || arr === void 0 ? void 0 : arr.length))
        return [];
    return arr === null || arr === void 0 ? void 0 : arr.map(function (item) {
        var _a, _b;
        if (is_1.default.object(mapKey) && ((_a = Object.keys(mapKey)) === null || _a === void 0 ? void 0 : _a.length)) {
            (_b = Object.keys(mapKey)) === null || _b === void 0 ? void 0 : _b.map(function (key) {
                if (is_1.default.hasKey(item, key)) {
                    item[mapKey[key]] = item[key];
                    delete item[key];
                }
            });
        }
        return item;
    });
};
exports.arrayMapKey = arrayMapKey;
/**
 * 列表分组
 * @param arr  原始数组
 * @param key 分组字段
 * @param keyMap 映射值  {title:"label"}
 * @returns
 */
var listGroup = function (arr, key, keyMap) {
    if (arr === void 0) { arr = []; }
    if (key === void 0) { key = "name"; }
    if (keyMap === void 0) { keyMap = {}; }
    if (!is_1.default.array(arr) || !(arr === null || arr === void 0 ? void 0 : arr.length))
        return [];
    var objTemp = {};
    return arr === null || arr === void 0 ? void 0 : arr.reduce(function (val, cur) {
        var _a;
        var _b, _c;
        if (!objTemp[cur === null || cur === void 0 ? void 0 : cur[key]]) {
            objTemp[cur === null || cur === void 0 ? void 0 : cur[key]] = true;
            var objItem_1 = (_a = {}, _a[key] = cur === null || cur === void 0 ? void 0 : cur[key], _a);
            if ((_b = Object.keys(keyMap)) === null || _b === void 0 ? void 0 : _b.length) {
                (_c = Object.keys(keyMap)) === null || _c === void 0 ? void 0 : _c.map(function (k) {
                    objItem_1[cur[k]] = cur === null || cur === void 0 ? void 0 : cur[keyMap[k]];
                });
                val === null || val === void 0 ? void 0 : val.push(objItem_1);
            }
            else {
                val === null || val === void 0 ? void 0 : val.push(__assign(__assign({}, cur), objItem_1));
            }
        }
        else {
            val = val === null || val === void 0 ? void 0 : val.map(function (item) {
                var _a, _b;
                if ((_a = Object.keys(keyMap)) === null || _a === void 0 ? void 0 : _a.length) {
                    (_b = Object.keys(keyMap)) === null || _b === void 0 ? void 0 : _b.map(function (k) {
                        item[cur[k]] = cur === null || cur === void 0 ? void 0 : cur[keyMap[k]];
                    });
                }
                return item;
            });
        }
        return val;
    }, []);
};
exports.listGroup = listGroup;
