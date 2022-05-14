/**
 *
 * @param file 文件流
 * @param filename 文件名
 * @example
 *      //创建
 *      var blobObject = new Blob(["I scream. You scream. We all scream for ice cream."])
 *      1.msSaveBlob：只提供一个保存按钮
 *          window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.txt');
 *      2.msSaveOrOpenBlob：提供保存和打开按钮
 *          window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.txt');
 */
function downloadFileLogic(file, filename) {
    const blob = new Blob([file]);
    // ie兼容处理  只有ie才有msSaveBlob这个方法
    if ((<any>window.navigator).msSaveBlob) {
        (<any>window.navigator).msSaveBlob(blob, filename);
    } else {
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}

export { downloadFileLogic };
