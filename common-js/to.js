"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = void 0;
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt, fn) {
    if (!errorExt)
        errorExt = {};
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
        if (errorExt) {
            Object.assign(err || {}, errorExt);
        }
        return [err, undefined];
    })
        .finally(function () {
        if (fn)
            fn();
    });
}
exports.to = to;
exports.default = to;
