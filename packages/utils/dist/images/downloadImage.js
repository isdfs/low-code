"use strict";
// src/images/downloadImage.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadImage = void 0;
/**
 * 生成图片文件的下载链接并自动触发下载
 *
 * @param {Blob} blob - 图片 Blob 对象
 * @param {string} filename - 文件名
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/png" });
 * downloadImage(blob, 'download.png');
 */
function downloadImage(blob, filename) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
exports.downloadImage = downloadImage;
