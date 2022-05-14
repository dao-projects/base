"use strict";
/**
 * 队列操作
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(_a) {
        var _b = _a.maxSize, maxSize = _b === void 0 ? Infinity : _b, _c = _a.autoRun, autoRun = _c === void 0 ? true : _c;
        this.queue = []; // 队列数据
        this.running = false; // 是否运行中
        this.stop = false; // 停止
        this.autoRun = true; // 自动运行
        this.maxSize = maxSize || Number.MAX_VALUE;
        this.autoRun = autoRun;
    }
    /**
     * 添加到队列中（队列上一项运行结束且队列未停止运行）
     * @param item 队列项
     */
    Queue.prototype.add = function (item) {
        if (this.queue.length >= this.maxSize) {
            this.queue.shift();
        }
        this.queue.push(item);
        if (!this.running && !this.stop && this.autoRun) {
            this.next();
        }
    };
    /**
     * 队列继续运行下一项(队列不为空或未强制被停止时)
     */
    Queue.prototype.next = function () {
        this.running = true;
        if (this.queue.length < 1 || this.stop) {
            this.running = false;
            return;
        }
        this.queue.shift().bind(this)();
    };
    /**
     * 清空队列(即删除队列中的剩余项)
     * @returns {any[]}
     */
    Queue.prototype.clear = function () {
        this.queue = [];
        return this.queue;
    };
    /**
     * 队列修改
     * @param index 队列索引
     * @param item 队列项
     */
    Queue.prototype.update = function (item, index) {
        this.queue[index] = item;
    };
    /**
     * 队列删除
     * @param index 队列索引
     * @returns {any}
     */
    Queue.prototype.remove = function (index) {
        this.queue.splice(index, 1);
    };
    /**
     * 队列停止
     */
    Queue.prototype.stopQueue = function () {
        this.stop = true;
    };
    /**
     * 获取队列最大长度
     * @returns {number}
     */
    Queue.prototype.getMaxSize = function () {
        return this.maxSize;
    };
    /**
     * 队列开始
     */
    Queue.prototype.startQueue = function () {
        this.stop = false;
        if (this.queue.length > 0 && this.autoRun) {
            this.next();
        }
    };
    /**
     * 队列长度
     * @returns {number}
     */
    Queue.prototype.length = function () {
        return this.queue.length;
    };
    /**
     * 队列是否运行中
     * @returns {boolean}
     */
    Queue.prototype.isRunning = function () {
        return this.running;
    };
    /**
     * 队列是否停止
     * @returns {boolean}
     */
    Queue.prototype.isStop = function () {
        return this.stop;
    };
    /**
     * 队列是否为空
     * @returns {boolean}
     */
    Queue.prototype.isEmpty = function () {
        return this.queue.length < 1;
    };
    /**
     * 队列是否已满
     * @returns {boolean}
     */
    Queue.prototype.isFull = function () {
        return this.queue.length >= this.maxSize;
    };
    /**
     * 获取队列
     * @returns {any[]}
     */
    Queue.prototype.getQueue = function () {
        return this.queue;
    };
    /**
     * 获取队列中某项
     * @param index 队列索引
     * @returns {any}
     */
    Queue.prototype.getQueueItem = function (index) {
        return this.queue[index];
    };
    /**
     * 获取队列中某项是否存在（not includes）
     */
    Queue.prototype.hasQueueItem = function (item) {
        return this.queue.filter(function (queueItem) { return queueItem === item; }).length > 0;
    };
    /**
     * 设置队列
     * @param queue 队列
     * @returns {any[]}
     */
    Queue.prototype.setQueue = function (queue) {
        this.queue = queue;
        return this.queue;
    };
    return Queue;
}());
exports.Queue = Queue;
exports.default = Queue;
