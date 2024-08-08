"use strict";
// src/files/fileToBase64.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBase64 = void 0;
/**
 * 将文件转换为 base64 编码字符串
 *
 * @param {File} file - 要转换的文件
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * fileToBase64(file).then(base64 => console.log(base64));
 */
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
exports.fileToBase64 = fileToBase64;
