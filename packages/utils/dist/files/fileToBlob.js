"use strict";
// src/files/fileToBlob.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBlob = void 0;
/**
 * 将文件转换为 Blob 对象
 *
 * @param {File} file - 要转换的文件
 * @returns {Promise<Blob>} Blob 对象
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * fileToBlob(file).then(blob => console.log(blob));
 */
function fileToBlob(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(new Blob([reader.result])); };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}
exports.fileToBlob = fileToBlob;
