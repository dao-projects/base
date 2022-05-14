/**
 * 队列操作
 */
declare class Queue {
    private queue;
    private running;
    private stop;
    private maxSize;
    private autoRun;
    constructor({ maxSize, autoRun, }: {
        maxSize?: number;
        autoRun?: boolean;
    });
    /**
     * 添加到队列中（队列上一项运行结束且队列未停止运行）
     * @param item 队列项
     */
    add(item: any): void;
    /**
     * 队列继续运行下一项(队列不为空或未强制被停止时)
     */
    next(): void;
    /**
     * 清空队列(即删除队列中的剩余项)
     * @returns {any[]}
     */
    clear(): any[];
    /**
     * 队列修改
     * @param index 队列索引
     * @param item 队列项
     */
    update(item: any, index: number): void;
    /**
     * 队列删除
     * @param index 队列索引
     * @returns {any}
     */
    remove(index: number): void;
    /**
     * 队列停止
     */
    stopQueue(): void;
    /**
     * 获取队列最大长度
     * @returns {number}
     */
    getMaxSize(): number;
    /**
     * 队列开始
     */
    startQueue(): void;
    /**
     * 队列长度
     * @returns {number}
     */
    length(): number;
    /**
     * 队列是否运行中
     * @returns {boolean}
     */
    isRunning(): boolean;
    /**
     * 队列是否停止
     * @returns {boolean}
     */
    isStop(): boolean;
    /**
     * 队列是否为空
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * 队列是否已满
     * @returns {boolean}
     */
    isFull(): boolean;
    /**
     * 获取队列
     * @returns {any[]}
     */
    getQueue(): any[];
    /**
     * 获取队列中某项
     * @param index 队列索引
     * @returns {any}
     */
    getQueueItem(index: number): any;
    /**
     * 获取队列中某项是否存在（not includes）
     */
    hasQueueItem(item: any): boolean;
    /**
     * 设置队列
     * @param queue 队列
     * @returns {any[]}
     */
    setQueue(queue: any[]): any[];
}
export { Queue };
export default Queue;
