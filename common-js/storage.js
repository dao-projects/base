"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
/**
 * storage 浏览器存储工具类封装
 * @description
 *    local:localStorage
 *    session:sessionStorage
 */
exports.storage = {
    /**
     * local localStorage存储
     */
    local: {
        set: function (key, value) {
            localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
            return exports.storage.local;
        },
        get: function (key) {
            var value = localStorage.getItem(key);
            if (value) {
                return value;
            }
            else {
                return null;
            }
        },
        getUseJSON: function (key) {
            var value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value) || null;
            }
            else {
                return null;
            }
        },
        remove: function (key) {
            localStorage.removeItem(key);
            return exports.storage.local;
        },
        clear: function () {
            localStorage.clear();
            return exports.storage.local;
        },
    },
    /**
     * session sessionStorage存储
     */
    session: {
        set: function (key, value) {
            sessionStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
            return exports.storage.session;
        },
        get: function (key) {
            var value = sessionStorage.getItem(key);
            if (value) {
                return value;
            }
            else {
                return null;
            }
        },
        getUseJSON: function (key) {
            var value = sessionStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
            else {
                return null;
            }
        },
        remove: function (key) {
            sessionStorage.removeItem(key);
            return exports.storage.session;
        },
        clear: function () {
            sessionStorage.clear();
            return exports.storage.session;
        },
    },
};
exports.default = exports.storage;
