"use strict";
// src/files/base64ToFile.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToFile = void 0;
var base64ToBlob_1 = require("./base64ToBlob");
/**
 * 将 base64 编码字符串转换为 File 对象
 *
 * @param {string} base64 - base64 编码字符串
 * @param {string} filename - 文件名
 * @returns {File} File 对象
 *
 * @example
 * const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
 * const file = base64ToFile(base64, 'hello.txt');
 * console.log(file);
 */
function base64ToFile(base64, filename) {
    var blob = (0, base64ToBlob_1.base64ToBlob)(base64);
    return new File([blob], filename, { type: blob.type });
}
exports.base64ToFile = base64ToFile;
