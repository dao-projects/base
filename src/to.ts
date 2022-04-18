/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt) {
    return promise
        .then(function (data) {
            return [null, data];
        })
        .catch(function (err) {
            if (errorExt) {
                (<any>Object).assign(err, errorExt);
            }
            return [err, undefined];
        });
}

export { to };
export default to;
