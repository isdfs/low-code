"use strict";
// src/files/fileReader.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFile = exports.readFile = void 0;
/**
 * 读取文本文件内容
 *
 * @param {File} file - 要读取的文件对象
 * @returns {Promise<string>} 文件内容
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * readFile(file).then(content => console.log(content)); // "Hello, world!"
 */
function readFile(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
exports.readFile = readFile;
/**
* 将文本保存为文件
*
* @param {string} content - 文件内容
* @param {string} filename - 文件名
* @param {string} mimeType - 文件类型
*/
function saveFile(content, filename, mimeType) {
    if (mimeType === void 0) { mimeType = 'text/plain'; }
    var blob = new Blob([content], { type: mimeType });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
exports.saveFile = saveFile;
// 使用示例
var content = 'Hello, world!';
saveFile(content, 'hello.txt');
