/**
 * 检查当前环境是否支持触摸事件
 * @description
 *  1. 'ontouchstart' in window:  使用in关键字检查windo对象上是否有ontouchstart属性
 *  2. (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']: 
 *      2.1： (window as any)['DocumentTouch']： 类型断言 (window as any) 将 window 对象视为 any 类型，然后检查其上是否有 DocumentTouch 属性
 *      2.2： document instanceof (window as any)['DocumentTouch']: DocumentTouch 属性存在，继续检查 document 是否是 DocumentTouch 类型的实例
 */
export const touchSupported = (): boolean => (
    'ontouchstart' in window || (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']
);

/**
 * 检查是否已滚动到页面底部
 */
export const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;

/**
 * 获取给定 DOM 元素的所有同级兄弟节点
 */

export const siblings = (ele: Node): Node[] => (ele.parentNode ? [].slice.call(ele.parentNode.children).filter((child) => child !== ele) : []);


/**
 * 获取指定 DOM 元素的绝对坐标
 */
export const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY });

/**
 * 将某个元素插入到指定元素之后
 */
export const insertAfter = (ele: Element, anotherEle: Element): Element | null => anotherEle.insertAdjacentElement('afterend', ele);

/**
 * 将某个元素替换为指定元素
 */
export const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode ? ele.parentNode.replaceChild(newEle, ele) : null);

/**
 * 将表单数据序列化为 JS 对象
 */
export const serialize = (formEle) => Array.from(new FormData(formEle)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});

/**
 * 从字符串中移除所有的 HTML 标签
 * @param {String} html html标签内容
 * @returns  {String} 文本
 */
export const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

/**
 * 导出
 */
export const dom = {
    touchSupported,
    isAtBottom,
    siblings,
    getPosition,
    insertAfter,
    replace,
    serialize,
    stripHtml
}
export default dom;