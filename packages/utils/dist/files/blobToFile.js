"use strict";
// src/files/blobToFile.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobToFile = void 0;
/**
 * 将 Blob 对象转换为 File 对象
 *
 * @param {Blob} blob - Blob 对象
 * @param {string} filename - 文件名
 * @returns {File} File 对象
 *
 * @example
 * const blob = new Blob(["Hello, world!"], { type: "text/plain" });
 * const file = blobToFile(blob, 'hello.txt');
 * console.log(file);
 */
function blobToFile(blob, filename) {
    return new File([blob], filename, { type: blob.type });
}
exports.blobToFile = blobToFile;
