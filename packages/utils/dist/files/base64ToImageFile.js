"use strict";
// src/images/base64ToImageFile.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToImageFile = void 0;
var base64ToFile_1 = require("./base64ToFile");
/**
 * 将 base64 编码字符串转换为图片文件
 *
 * @param {string} base64 - base64 编码字符串
 * @param {string} filename - 文件名
 * @returns {File} 图片文件
 *
 * @example
 * const base64 = "data:image/png;base64,iVBORw0KGgoAAAANS...";
 * const imageFile = base64ToImageFile(base64, 'image.png');
 * console.log(imageFile);
 */
function base64ToImageFile(base64, filename) {
    return (0, base64ToFile_1.base64ToFile)(base64, filename);
}
exports.base64ToImageFile = base64ToImageFile;
