/**
 * 队列操作
 */

class Queue {
    private queue: any[] = []; // 队列数据
    private running: boolean = false; // 是否运行中
    private stop: boolean = false; // 停止
    private maxSize: number; // 最大队列长度
    private autoRun: boolean = true; // 自动运行
    constructor({
        maxSize = 100,
        autoRun = true,
    }: {
        maxSize?: number;
        autoRun?: boolean;
    }) {
        this.maxSize = maxSize || Number.MAX_VALUE;
        this.autoRun = autoRun;
    }

    /**
     * 添加到队列中（队列上一项运行结束且队列未停止运行）
     * @param item 队列项
     */
    public add(item: any) {
        if (this.queue.length >= this.maxSize) {
            this.queue.shift();
        }
        this.queue.push(item);
        if (!this.running && !this.stop && this.autoRun) {
            this.next();
        }
    }

    /**
     * 队列继续运行下一项(队列不为空或未强制被停止时)
     */
    public next() {
        this.running = true;
        if (this.queue.length < 1 || this.stop) {
            this.running = false;
            return;
        }
        // this.queue.shift().bind(this)();
       (this.queue.shift())()
    }
    /**
     * 清空队列(即删除队列中的剩余项)
     * @returns {any[]}
     */
    public clear() {
        this.queue = [];
        return this.queue;
    }

    /**
     * 队列修改
     * @param index 队列索引
     * @param item 队列项
     */
    public update(item: any, index: number) {
        this.queue[index] = item;
    }

    /**
     * 队列删除
     * @param index 队列索引
     * @returns {any}
     */
    public remove(index: number) {
        this.queue.splice(index, 1);
    }

    /**
     * 队列停止
     */
    public stopQueue() {
        this.stop = true;
    }

    /**
     * 获取队列最大长度
     * @returns {number}
     */
    public getMaxSize() {
        return this.maxSize;
    }

    /**
     * 队列开始
     */
    public startQueue() {
        this.stop = false;
        if (this.queue.length > 0 && this.autoRun) {
            this.next();
        }
    }

    /**
     * 队列长度
     * @returns {number}
     */
    public length() {
        return this.queue.length;
    }

    /**
     * 队列是否运行中
     * @returns {boolean}
     */
    public isRunning() {
        return this.running;
    }

    /**
     * 队列是否停止
     * @returns {boolean}
     */
    public isStop() {
        return this.stop;
    }

    /**
     * 队列是否为空
     * @returns {boolean}
     */
    public isEmpty() {
        return this.queue.length < 1;
    }

    /**
     * 队列是否已满
     * @returns {boolean}
     */
    public isFull() {
        return this.queue.length >= this.maxSize;
    }

    /**
     * 获取队列
     * @returns {any[]}
     */
    public getQueue() {
        return this.queue;
    }

    /**
     * 获取队列中某项
     * @param index 队列索引
     * @returns {any}
     */
    public getQueueItem(index: number) {
        return this.queue[index];
    }

    /**
     * 获取队列中某项是否存在（not includes）
     */
    public hasQueueItem(item: any) {
        return this.queue.filter((queueItem: any) => queueItem === item).length > 0;
    }

    /**
     * 设置队列
     * @param queue 队列
     * @returns {any[]}
     */
    public setQueue(queue: any[]) {
        this.queue = queue;
        return this.queue;
    }
}

export { Queue };
export default Queue;
