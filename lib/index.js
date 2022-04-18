(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./common", "./storage", "./is", "./date", "./to", "./verify", "./card"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.card = exports.verify = exports.to = exports.date = exports.is = exports.storage = exports.common = void 0;
    // 导入
    var common = require("./common");
    exports.common = common;
    var storage_1 = require("./storage");
    exports.storage = storage_1.default;
    var is_1 = require("./is");
    exports.is = is_1.default;
    var date_1 = require("./date");
    exports.date = date_1.default;
    var to_1 = require("./to");
    exports.to = to_1.default;
    var verify_1 = require("./verify");
    exports.verify = verify_1.default;
    var card_1 = require("./card");
    exports.card = card_1.default;
});
