"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTextFile = void 0;
/**
 * 读取文本文件内容。
 * @param file - 要读取的文本文件。
 * @returns 返回一个Promise，包含文件的文本内容。
 */
function readTextFile(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function () { return reject(new Error('Failed to read file')); };
        reader.readAsText(file);
    });
}
exports.readTextFile = readTextFile;
