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
    exports.dom = exports.stripHtml = exports.serialize = exports.replace = exports.insertAfter = exports.getPosition = exports.siblings = exports.isAtBottom = exports.touchSupported = void 0;
    /**
     * 检查当前环境是否支持触摸事件
     * @description
     *  1. 'ontouchstart' in window:  使用in关键字检查windo对象上是否有ontouchstart属性
     *  2. (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']:
     *      2.1： (window as any)['DocumentTouch']： 类型断言 (window as any) 将 window 对象视为 any 类型，然后检查其上是否有 DocumentTouch 属性
     *      2.2： document instanceof (window as any)['DocumentTouch']: DocumentTouch 属性存在，继续检查 document 是否是 DocumentTouch 类型的实例
     */
    var touchSupported = function () { return ('ontouchstart' in window || window['DocumentTouch'] && document instanceof window['DocumentTouch']); };
    exports.touchSupported = touchSupported;
    /**
     * 检查是否已滚动到页面底部
     */
    var isAtBottom = function () { return document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight; };
    exports.isAtBottom = isAtBottom;
    /**
     * 获取给定 DOM 元素的所有同级兄弟节点
     */
    var siblings = function (ele) { return (ele.parentNode ? [].slice.call(ele.parentNode.children).filter(function (child) { return child !== ele; }) : []); };
    exports.siblings = siblings;
    /**
     * 获取指定 DOM 元素的绝对坐标
     */
    var getPosition = function (ele) { return ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY }); };
    exports.getPosition = getPosition;
    /**
     * 将某个元素插入到指定元素之后
     */
    var insertAfter = function (ele, anotherEle) { return anotherEle.insertAdjacentElement('afterend', ele); };
    exports.insertAfter = insertAfter;
    /**
     * 将某个元素替换为指定元素
     */
    var replace = function (ele, newEle) { return (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null); };
    exports.replace = replace;
    /**
     * 将表单数据序列化为 JS 对象
     */
    var serialize = function (formEle) { return Array.from(new FormData(formEle)).reduce(function (p, _a) {
        var _b;
        var k = _a[0], v = _a[1];
        return Object.assign({}, p, (_b = {}, _b[k] = p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v, _b));
    }, {}); };
    exports.serialize = serialize;
    /**
     * 从字符串中移除所有的 HTML 标签
     * @param {String} html html标签内容
     * @returns  {String} 文本
     */
    var stripHtml = function (html) { return new DOMParser().parseFromString(html, 'text/html').body.textContent || ''; };
    exports.stripHtml = stripHtml;
    /**
     * 导出
     */
    exports.dom = {
        touchSupported: exports.touchSupported,
        isAtBottom: exports.isAtBottom,
        siblings: exports.siblings,
        getPosition: exports.getPosition,
        insertAfter: exports.insertAfter,
        replace: exports.replace,
        serialize: exports.serialize,
        stripHtml: exports.stripHtml
    };
    exports.default = exports.dom;
});
