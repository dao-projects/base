/**
 * 检查当前环境是否支持触摸事件
 * @description
 *  1. 'ontouchstart' in window:  使用in关键字检查windo对象上是否有ontouchstart属性
 *  2. (window as any)['DocumentTouch'] && document instanceof (window as any)['DocumentTouch']:
 *      2.1： (window as any)['DocumentTouch']： 类型断言 (window as any) 将 window 对象视为 any 类型，然后检查其上是否有 DocumentTouch 属性
 *      2.2： document instanceof (window as any)['DocumentTouch']: DocumentTouch 属性存在，继续检查 document 是否是 DocumentTouch 类型的实例
 */
export declare const touchSupported: () => boolean;
/**
 * 检查是否已滚动到页面底部
 */
export declare const isAtBottom: () => boolean;
/**
 * 获取给定 DOM 元素的所有同级兄弟节点
 */
export declare const siblings: (ele: Node) => Node[];
/**
 * 获取指定 DOM 元素的绝对坐标
 */
export declare const getPosition: (ele: any) => {
    left: any;
    top: any;
};
/**
 * 将某个元素插入到指定元素之后
 */
export declare const insertAfter: (ele: Element, anotherEle: Element) => Element | null;
/**
 * 将某个元素替换为指定元素
 */
export declare const replace: (ele: Element, newEle: Element) => Element | null;
/**
 * 将表单数据序列化为 JS 对象
 */
export declare const serialize: (formEle: any) => any;
/**
 * 将JSON 转 fromData
 */
export declare const fromData: <T extends object>(obj: T) => any;
/**
 * 从字符串中移除所有的 HTML 标签
 * @param {String} html html标签内容
 * @returns  {String} 文本
 */
export declare const stripHtml: (html: string) => string;
/**
 * 导出
 */
export declare const dom: {
    touchSupported: () => boolean;
    isAtBottom: () => boolean;
    siblings: (ele: Node) => Node[];
    getPosition: (ele: any) => {
        left: any;
        top: any;
    };
    insertAfter: (ele: Element, anotherEle: Element) => Element | null;
    replace: (ele: Element, newEle: Element) => Element | null;
    serialize: (formEle: any) => any;
    stripHtml: (html: string) => string;
};
export default dom;
