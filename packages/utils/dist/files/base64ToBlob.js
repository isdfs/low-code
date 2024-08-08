"use strict";
// src/files/base64ToBlob.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToBlob = void 0;
/**
 * 将 base64 编码字符串转换为 Blob 对象
 *
 * @param {string} base64 - base64 编码字符串
 * @returns {Blob} Blob 对象
 *
 * @example
 * const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
 * const blob = base64ToBlob(base64);
 * console.log(blob);
 */
function base64ToBlob(base64) {
    var _a = base64.split(','), metadata = _a[0], base64Data = _a[1];
    var byteString = atob(base64Data);
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var uint8Array = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }
    var mimeType = metadata.split(':')[1].split(';')[0];
    return new Blob([uint8Array], { type: mimeType });
}
exports.base64ToBlob = base64ToBlob;
