"use strict";
// src/images/imageToBase64.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageToBase64 = void 0;
var fileToBase64_1 = require("./fileToBase64");
/**
 * 将图片文件转换为 base64 编码字符串
 *
 * @param {File} imageFile - 图片文件
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const imageFile = new File(["..."], "image.png", { type: "image/png" });
 * imageToBase64(imageFile).then(base64 => console.log(base64));
 */
function imageToBase64(imageFile) {
    return (0, fileToBase64_1.fileToBase64)(imageFile);
}
exports.imageToBase64 = imageToBase64;
