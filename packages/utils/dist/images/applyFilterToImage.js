"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFilterToImage = void 0;
/**
 * 将指定滤镜应用到图像上。
 * @param image - 原始图像的HTMLImageElement。
 * @param filter - 要应用的CSS滤镜，如"grayscale(100%)"。
 * @returns 返回一个Promise，包含应用滤镜后的图像Blob。
 */
function applyFilterToImage(image, filter) {
    return new Promise(function (resolve, reject) {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.filter = filter;
            ctx.drawImage(image, 0, 0);
            canvas.toBlob(function (blob) {
                if (blob) {
                    resolve(blob);
                }
                else {
                    reject(new Error('Failed to apply filter to image'));
                }
            });
        }
        else {
            reject(new Error('Canvas context is not supported'));
        }
    });
}
exports.applyFilterToImage = applyFilterToImage;
