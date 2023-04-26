import is from "./is";
/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
export function deepCopyJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * [serialize 序列化]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export function serialize(item) {
    return JSON.stringify(item);
}
/**
 * [deserialize 反序列化]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function deserialize(data) {
    return data && JSON.parse(data);
}
/**
 * 深度复制（采用递归式）
 * @param obj 复制对象
 */
export function deepCopy(obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] =
                typeof obj[key] === "object" && obj[key] !== null
                    ? deepCopy(obj[key])
                    : obj[key];
        }
    }
    return newObj;
}
/** 创建GUID */
export function createGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
/**
 * 创建指定范围的随机整数
 * @param minInt 最小整数
 * @param maxInt 最大整数
 */
export function createIntRandom(minInt, maxInt) {
    return minInt + Math.round(Math.random() * (maxInt - minInt));
}
/** 判断网页是否通过移动端设备打开 */
export function isFromMobileBrowser() {
    return !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
}
/**
 * 复制文本
 * @param text 文本
 */
export async function copyText(text) {
    await navigator.clipboard.writeText(text);
    return text;
}
/**
 * 对象扩展（JQuery $.extend 实现代码）
 * @param _ 深度复制
 * @param sourceObj 源对象
 * @param targetObj 目标对象
 */
export function $extend(_deep, sourceObj, targetObj) {
    function isPlainObject(obj) {
        const class2type = {};
        const getProto = Object.getPrototypeOf;
        const toString = class2type.toString;
        const hasOwn = class2type.hasOwnProperty;
        const fnToString = hasOwn.toString;
        const ObjectFunctionString = fnToString.call(Object);
        if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
        }
        const proto = getProto(obj);
        if (!proto) {
            return true;
        }
        const Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return (
            typeof Ctor === "function" &&
            fnToString.call(Ctor) === ObjectFunctionString
        );
    }
    let options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {}, // eslint-disable-line
        i = 1,
        length = arguments.length, // eslint-disable-line
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
                if (
                    deep &&
                    copy &&
                    (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
                ) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }
                    target[name] = $extend(deep, clone, copy); // eslint-disable-line
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
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
export function debounce(fn, delay, isImmediate) {
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

/**
 * 节流
 * （当持续触发事件时，
 * 保证一定时间段内只调用一次事件处理函数）
 * @param fn 函数
 * @param wait 间隔毫秒数
 * @param options 配置项
 */
export function throttle(
    fn,
    wait,
    options = {
        leading: true,
        trailing: true,
    }
) {
    let handle = null,
        previous = 0;
    const throttled = function () {
        const now = Date.now();
        const context = this; //获取函数所在作用域this
        const args = arguments; //取得传入参数
        if (!previous && !options.leading) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (handle) {
                clearTimeout(handle);
                handle = null;
            }
            previous = now;
            fn.apply(context, args);
        } else if (!handle && options.trailing) {
            handle = setTimeout(() => {
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
/**
 * 加载css
 * @param cssUrl CSS路径
 */
export function loadCss(cssUrl) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    link.media = "all";
    document.head.appendChild(link);
}
/**
 * 加载js
 * @param jsUrl JS路径
 */
export function loadJs(jsUrl) {
    const script = document.createElement("script");
    script.src = jsUrl;
    document.head.appendChild(script);
}
/**
 * 随机获取数组的其中一个子集
 * @param arr 数组
 */
export function getArrayItemRandom(arr) {
    const index = createIntRandom(0, arr.length - 1);
    return arr[index];
}
/**
 * merge 对象合并
 * @param  {[type]} foo [description]
 * @param  {[type]} bar [description]
 * @return {[type]}     [description]
 */
export function merge(foo, bar) {
    const merged = {};
    for (const each in bar) {
        if (foo.hasOwnProperty(each) && bar.hasOwnProperty(each)) {
            if (
                typeof foo[each] === "object" &&
                typeof bar[each] === "object"
            ) {
                merged[each] = merge(foo[each], bar[each]);
            } else {
                merged[each] = bar[each];
            }
        } else if (bar.hasOwnProperty(each)) {
            merged[each] = bar[each];
        }
    }
    for (const each in foo) {
        if (!(each in bar) && foo.hasOwnProperty(each)) {
            merged[each] = foo[each];
        }
    }
    return merged;
}

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
export function extend(target, source) {
    if ((<any>Object).assign) {
        (<any>Object).assign(target, source);
    } else {
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== "__proto__") {
                target[key] = source[key];
            }
        }
    }
    return target;
}
/**
 * [extractURL description]
 * @param  {[type]} resource: string        | {uri: string} [description]
 * @return {[type]}           [description]
 */
export function extractURL(resource) {
    if (typeof resource === "string") {
        return resource;
    }
    if (typeof resource === "object" && typeof resource.uri === "string") {
        return resource.uri;
    }
    return null;
}
/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
export function urlEncode(param, key, encode) {
    if (param == null) return "";
    var paramStr = "";
    var t = typeof param;
    if (t == "string" || t == "number" || t == "boolean") {
        paramStr +=
            "&" +
            key +
            "=" +
            (encode == null || encode ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k =
                key == null
                    ? i
                    : key + (param instanceof Array ? "[" + i + "]" : "." + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
}
/**
 * randomNumBoth随机数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}     生成区间的值
 */
export function randomNumBoth(min, max) {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range); //四舍五入
    return num;
}
/**
 * toPercent 转换为%
 * @param  {[type]} point [description]
 * @return {[type]}       [description]
 */
export function toPercent(point) {
    var str = Number(point * 100).toFixed(2);
    str += "%";
    return str;
}
//生成文件名称
export function generic_name() {
    var $chars = "abcdefghijklmnopqrstwxyz0123456789";
    var maxPos = $chars.length;
    var pwd = "";
    for (let i = 0; i < 3; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return new Date().getTime() + pwd;
}
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
export function formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    places = !isNaN((places = Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
        i =
            parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) +
            "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return (
        symbol +
        negative +
        (j ? i.substr(0, j) + thousand : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) +
        (places
            ? decimal +
            Math.abs(number - Number(i) || 0)
                .toFixed(places)
                .slice(2)
            : "")
    );
}
/**
 * 版本处理比较
 * @description 0: 版本一致   1: v1大于v2  -1: v1小于v2
 * @param {*} v1    1.0.1
 * @param {*} v2    1.0.2
 */
export function compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push("0");
    }
    while (v2.length < len) {
        v2.push("0");
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
/**
 * sums 求数组总和
 * @param  {[type]} datas [{name:'',value:12},{....}]
 * @param  {String} key   [description]
 * @return {[type]}       [description]
 */
export function sums(datas, key = "value") {
    return (
        (is.array(datas) &&
            datas.reduce((val, output) => val + output[key], 0)) ||
        0
    );
}
/**
 * packedArray 合并数组（追加子节点）
 * @param  {[type]} arr  [description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export function packedArray(arr, item) {
    return (!is.empty(arr) && [...arr, item]) || [item];
}

/**
 * hexToRgb hex 转 rgb
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}

/**
 * rgbToHex rgb 转 hex
 * @param  {[type]} r [description]
 * @param  {[type]} g [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * randomColor 自动生成hex
 * @return {[type]} [description]
 */
export function randomColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
}

/**
 * colorGradient 颜色渐变
 * @param  {[type]} startColor [description]
 * @param  {[type]} endColor   [description]
 * @param  {[type]} step       [description]
 * @return {[type]}            [description]
 */
export function colorGradient(startColor, endColor, step) {
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

/**
 * [handleNum 处理数字(上万转换为以万为单位显示，不足万数字显示原本数字)]
 * @param  {[type]} num     [description]
 * @param  {Number} decimal [description]
 * @return {[type]}         [description]
 */
export function handleNum(num, decimal = 2) {
    num = parseFloat(num);
    if (num >= 10000) {
        num = (num / 10000)?.toFixed(decimal) + "万";
    }
    return num;
}

/**
 * 数字精度处理
 * @param  {[type]} num   [description]
 * @param  {[type]} fixed [description]
 * @return {[type]}       [description]
 */
export const toFixed = (num, fixed) => {
    let temp = num;
    if (num) {
        temp = Number(num)?.toFixed(fixed);
    }
    return temp;
};

// 文本高亮
export const highlight = (text, search) => {
    const pattern = search.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    const regex = new RegExp(pattern, "gi");
    return text.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
    );
};

// 距离时间
export const distanceTime = (time) => {
    if (!time) return "";
    time = is.date(time) ? time?.getTime() : new Date(time).getTime();
    const now = new Date().getTime();
    const distance = now - time;
    const day = Math.floor(distance / (24 * 60 * 60 * 1000));
    const hour = Math.floor((distance / (60 * 60 * 1000)) % 24);
    const minute = Math.floor((distance / (60 * 1000)) % 60);
    const second = Math.floor((distance / 1000) % 60);
    return {
        day,
        hour,
        minute,
        second,
    };
};

//  几年前、几月前、几周、几天前、几小时前、几分钟前、刚刚
export const timeAgo = (time) => {
    if (!time) return "";
    time = is.date(time) ? time?.getTime() : new Date(time).getTime();
    const now = new Date().getTime();
    const distance = now - time;
    const seconds = Math.floor(distance / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.35);
    // const years = Math.floor(months / 12);
    if (seconds < 60) {
        return "刚刚";
    } else if (minutes <= 60) {
        return `${minutes}分钟前`;
    } else if (hours <= 24) {
        return `${hours}小时前`;
    } else if (days <= 7) {
        return `${days}天前`;
    } else if (weeks <= 4.35) {
        return `${weeks}周前`;
    } else if (months <= 12) {
        return `${months}月前`;
    } else {
        // return `${years}年前`;
        // 年月日
        const dd = new Date(time);
        const y = dd.getFullYear();
        const m = dd.getMonth() + 1;
        const d = dd.getDate();
        return `${y}-${m > 10 ? m : "0" + m}-${d > 10 ? d : "0" + d}`;
    }
};

/**
 * [assert description]
 * @param  {[type]} condition [description]
 * @param  {[type]} message   [description]
 * @return {[type]}           [description]
 */
export function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * [trim 去空]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function trim(str) {
    if (str == null) {
        return null;
    } else if (typeof str.trim === "function") {
        return str.trim();
    } else {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
}

/**
 * [keys description]
 * @param {[type]} arr [description]
 * @example
 *     keysOf({a:1,b:2}) => ['a','b']
 */
export const keysOf = <T extends object>(arr: T) => Object.keys(arr) as Array<keyof T>

/**
 * [entries description]
 * @param {[type]} arr [description]
 * @example
 *       entriesOf({a:1,b:2}) => [['a',1],['b',2]] 
 */
export const entriesOf = <T extends object>(arr: T) => Object?.entries(arr) as Entries<T>