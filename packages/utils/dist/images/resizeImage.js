"use strict";
// src/images/resizeImage.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
/**
 * 将图片文件缩放为指定尺寸
 *
 * @param {File} imageFile - 图片文件
 * @param {number} width - 缩放后的宽度
 * @param {number} height - 缩放后的高度
 * @returns {Promise<Blob>} 缩放后的图片 Blob 对象
 *
 * @example
 * const imageFile = new File(["..."], "image.png", { type: "image/png" });
 * resizeImage(imageFile, 200, 200).then(blob => console.log(blob));
 */
function resizeImage(imageFile, width, height) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = URL.createObjectURL(imageFile);
        img.onload = function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Canvas context is not available.'));
                return;
            }
            // 设置画布的尺寸为目标宽度和高度
            canvas.width = width;
            canvas.height = height;
            // 将图片绘制到画布上，并缩放到目标尺寸
            ctx.drawImage(img, 0, 0, width, height);
            // 将画布内容转换为 Blob 对象
            canvas.toBlob(function (blob) {
                if (blob)
                    resolve(blob);
                else
                    reject(new Error('Image resizing failed.'));
            }, imageFile.type);
        };
        img.onerror = reject;
    });
}
exports.resizeImage = resizeImage;
