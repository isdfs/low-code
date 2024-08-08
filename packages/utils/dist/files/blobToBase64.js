"use strict";
// src/files/blobToBase64.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobToBase64 = void 0;
/**
 * 将 Blob 对象转换为 base64 编码字符串
 *
 * @param {Blob} blob - Blob 对象
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const blob = new Blob(["Hello, world!"], { type: "text/plain" });
 * blobToBase64(blob).then(base64 => console.log(base64));
 */
function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
exports.blobToBase64 = blobToBase64;
