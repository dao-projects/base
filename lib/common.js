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
        while (_) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
    exports.trim = exports.assert = exports.timeAgo = exports.distanceTime = exports.highlight = exports.toFixed = exports.handleNum = exports.colorGradient = exports.randomColor = exports.rgbToHex = exports.hexToRgb = exports.packedArray = exports.sums = exports.compareVersion = exports.formatMoney = exports.generic_name = exports.toPercent = exports.randomNumBoth = exports.urlEncode = exports.extractURL = exports.extend = exports.merge = exports.getArrayItemRandom = exports.loadJs = exports.loadCss = exports.throttle = exports.debounce = exports.$extend = exports.copyText = exports.isFromMobileBrowser = exports.createIntRandom = exports.createGuid = exports.deepCopy = exports.deserialize = exports.serialize = exports.deepCopyJSON = void 0;
    var is_1 = require("./is");
    /**
     * ?????????????????????JSON???????????????
     * @param obj ????????????
     */
    function deepCopyJSON(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    exports.deepCopyJSON = deepCopyJSON;
    /**
     * [serialize ?????????]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    function serialize(item) {
        return JSON.stringify(item);
    }
    exports.serialize = serialize;
    /**
     * [deserialize ????????????]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    function deserialize(data) {
        return data && JSON.parse(data);
    }
    exports.deserialize = deserialize;
    /**
     * ?????????????????????????????????
     * @param obj ????????????
     */
    function deepCopy(obj) {
        var newObj = Array.isArray(obj) ? [] : {};
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] =
                    typeof obj[key] === "object" && obj[key] !== null
                        ? deepCopy(obj[key])
                        : obj[key];
            }
        }
        return newObj;
    }
    exports.deepCopy = deepCopy;
    /** ??????GUID */
    function createGuid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return "" + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    }
    exports.createGuid = createGuid;
    /**
     * ?????????????????????????????????
     * @param minInt ????????????
     * @param maxInt ????????????
     */
    function createIntRandom(minInt, maxInt) {
        return minInt + Math.round(Math.random() * (maxInt - minInt));
    }
    exports.createIntRandom = createIntRandom;
    /** ????????????????????????????????????????????? */
    function isFromMobileBrowser() {
        return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }
    exports.isFromMobileBrowser = isFromMobileBrowser;
    /**
     * ????????????
     * @param text ??????
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
     * ???????????????JQuery $.extend ???????????????
     * @param _ ????????????
     * @param sourceObj ?????????
     * @param targetObj ????????????
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
            return (typeof Ctor === "function" &&
                fnToString.call(Ctor) === ObjectFunctionString);
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
                    if (deep &&
                        copy &&
                        (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
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
     * ??????:fn????????????????????????????????????delay??????????????????
     * ??????????????????????????????
     * ??????????????????????????????????????????
     * ???????????????????????????????????????
     * ????????????????????????????????????
     * ???????????????????????????
     * ????????????????????????
     * @param fn ????????????
     * @param delay ????????????
     * @param isImmediate ???true???debounce??????delay????????????????????????????????????????????????
     * @returns {Function}
     */
    function debounce(fn, delay, isImmediate) {
        var timer = null; //?????????timer???????????????????????????
        return function () {
            var context = this; //???????????????????????????this
            var args = arguments; //??????????????????
            clearTimeout(timer);
            if (isImmediate && timer === null) {
                //???????????????????????????
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
     * ??????
     * ??????????????????????????????
     * ????????????????????????????????????????????????????????????
     * @param fn ??????
     * @param wait ???????????????
     * @param options ?????????
     */
    function throttle(fn, wait, options) {
        if (options === void 0) { options = {
            leading: true,
            trailing: true,
        }; }
        var handle = null, previous = 0;
        var throttled = function () {
            var now = Date.now();
            var context = this; //???????????????????????????this
            var args = arguments; //??????????????????
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
     * ??????css
     * @param cssUrl CSS??????
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
     * ??????js
     * @param jsUrl JS??????
     */
    function loadJs(jsUrl) {
        var script = document.createElement("script");
        script.src = jsUrl;
        document.head.appendChild(script);
    }
    exports.loadJs = loadJs;
    /**
     * ???????????????????????????????????????
     * @param arr ??????
     */
    function getArrayItemRandom(arr) {
        var index = createIntRandom(0, arr.length - 1);
        return arr[index];
    }
    exports.getArrayItemRandom = getArrayItemRandom;
    /**
     * merge ????????????
     * @param  {[type]} foo [description]
     * @param  {[type]} bar [description]
     * @return {[type]}     [description]
     */
    function merge(foo, bar) {
        var merged = {};
        for (var each in bar) {
            if (foo.hasOwnProperty(each) && bar.hasOwnProperty(each)) {
                if (typeof foo[each] === "object" &&
                    typeof bar[each] === "object") {
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
     * extend ????????????
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
     * param ????????????URL????????????????????????
     * key URL????????????????????????
     * encode true/false ????????????URL??????,?????????true
     *
     * return URL???????????????
     */
    function urlEncode(param, key, encode) {
        if (param == null)
            return "";
        var paramStr = "";
        var t = typeof param;
        if (t == "string" || t == "number" || t == "boolean") {
            paramStr +=
                "&" +
                    key +
                    "=" +
                    (encode == null || encode ? encodeURIComponent(param) : param);
        }
        else {
            for (var i in param) {
                var k = key == null
                    ? i
                    : key + (param instanceof Array ? "[" + i + "]" : "." + i);
                paramStr += urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    }
    exports.urlEncode = urlEncode;
    /**
     * randomNumBoth?????????
     * @param  {Number} min ?????????
     * @param  {Number} max ?????????
     * @return {Number}     ??????????????????
     */
    function randomNumBoth(min, max) {
        var range = max - min;
        var rand = Math.random();
        var num = min + Math.round(rand * range); //????????????
        return num;
    }
    exports.randomNumBoth = randomNumBoth;
    /**
     * toPercent ?????????%
     * @param  {[type]} point [description]
     * @return {[type]}       [description]
     */
    function toPercent(point) {
        var str = Number(point * 100).toFixed(2);
        str += "%";
        return str;
    }
    exports.toPercent = toPercent;
    //??????????????????
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
     * ??????????????????????????????prototype???Number?????????????????????
     * @param {*} number  ??????
     * @param {*} places  ??????????????????
     * @param {*} symbol ????????????
     * @param {*} thousand  ???????????????
     * @param {*} decimal ???????????????
     * @example
     *      formatMoney(199999,2,'',',','.');
     */
    function formatMoney(number, places, symbol, thousand, decimal) {
        number = number || 0;
        places = !isNaN((places = Math.abs(places))) ? places : 2;
        symbol = symbol !== undefined ? symbol : "$";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var negative = number < 0 ? "-" : "", i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) +
            "", j = (j = i.length) > 3 ? j % 3 : 0;
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
     * ??????????????????
     * @description 0: ????????????   1: v1??????v2  -1: v1??????v2
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
     * sums ???????????????
     * @param  {[type]} datas [{name:'',value:12},{....}]
     * @param  {String} key   [description]
     * @return {[type]}       [description]
     */
    function sums(datas, key) {
        if (key === void 0) { key = "value"; }
        return ((is_1.default.array(datas) &&
            datas.reduce(function (val, output) { return val + output[key]; }, 0)) ||
            0);
    }
    exports.sums = sums;
    /**
     * packedArray ?????????????????????????????????
     * @param  {[type]} arr  [description]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    function packedArray(arr, item) {
        return (!is_1.default.empty(arr) && __spreadArray(__spreadArray([], arr), [item])) || [item];
    }
    exports.packedArray = packedArray;
    /**
     * hexToRgb hex ??? rgb
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
     * rgbToHex rgb ??? hex
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
     * randomColor ????????????hex
     * @return {[type]} [description]
     */
    function randomColor() {
        return "#" + Math.random().toString(16).slice(2, 8);
    }
    exports.randomColor = randomColor;
    /**
     * colorGradient ????????????
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
     * [handleNum ????????????(????????????????????????????????????????????????????????????????????????)]
     * @param  {[type]} num     [description]
     * @param  {Number} decimal [description]
     * @return {[type]}         [description]
     */
    function handleNum(num, decimal) {
        var _a;
        if (decimal === void 0) { decimal = 2; }
        num = parseFloat(num);
        if (num >= 10000) {
            num = ((_a = (num / 10000)) === null || _a === void 0 ? void 0 : _a.toFixed(decimal)) + "???";
        }
        return num;
    }
    exports.handleNum = handleNum;
    /**
     * ??????????????????
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
    // ????????????
    var highlight = function (text, search) {
        var pattern = search.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        var regex = new RegExp(pattern, "gi");
        return text.replace(regex, function (match) { return "<span class=\"highlight\">" + match + "</span>"; });
    };
    exports.highlight = highlight;
    // ????????????
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
    //  ?????????????????????????????????????????????????????????????????????????????????
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
            return "??????";
        }
        else if (minutes <= 60) {
            return minutes + "\u5206\u949F\u524D";
        }
        else if (hours <= 24) {
            return hours + "\u5C0F\u65F6\u524D";
        }
        else if (days <= 7) {
            return days + "\u5929\u524D";
        }
        else if (weeks <= 4.35) {
            return weeks + "\u5468\u524D";
        }
        else if (months <= 12) {
            return months + "\u6708\u524D";
        }
        else {
            // return `${years}??????`;
            // ?????????
            var dd = new Date(time);
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();
            return y + "-" + (m > 10 ? m : "0" + m) + "-" + (d > 10 ? d : "0" + d);
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
     * [trim ??????]
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
});
