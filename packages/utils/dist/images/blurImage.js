"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blurImage = void 0;
/**
 * 为图像添加模糊效果。
 * @param image - 原始图像的HTMLImageElement。
 * @param blurAmount - 模糊程度，默认为5px。
 * @returns 返回一个Promise，包含模糊处理后的图像Blob。
 */
function blurImage(image, blurAmount) {
    if (blurAmount === void 0) { blurAmount = 5; }
    return new Promise(function (resolve, reject) {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.filter = "blur(".concat(blurAmount, "px)");
            ctx.drawImage(image, 0, 0);
            canvas.toBlob(function (blob) {
                if (blob) {
                    resolve(blob);
                }
                else {
                    reject(new Error('Failed to apply blur effect to image'));
                }
            });
        }
        else {
            reject(new Error('Canvas context is not supported'));
        }
    });
}
exports.blurImage = blurImage;
