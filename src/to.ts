/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt, fn) {
    if (!errorExt) errorExt = {};
    return promise
      .then(data => [null, data])
      .catch(err => {
        if (errorExt) {
          Object.assign(err || {}, errorExt);
        }
        return [err, undefined];
      })
      .finally(() => {
        if (fn) fn();
      });
 }
  

export { to };
export default to;
