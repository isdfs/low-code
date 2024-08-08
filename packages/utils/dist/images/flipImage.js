"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipImage = void 0;
/**
 * 翻转图像（水平或垂直）
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {boolean} [horizontal=true] - 是否水平翻转
 * @param {boolean} [vertical=false] - 是否垂直翻转
 * @returns {Promise<Blob>} 返回翻转后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * flipImage(blob, true, false).then(flippedBlob => {
 *   // Do something with flippedBlob
 * });
 */
function flipImage(imageBlob, horizontal, vertical) {
    if (horizontal === void 0) { horizontal = true; }
    if (vertical === void 0) { vertical = false; }
    return new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return reject(new Error('Canvas context not supported'));
        }
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.save();
            ctx.scale(horizontal ? -1 : 1, vertical ? -1 : 1);
            ctx.drawImage(img, horizontal ? -img.width : 0, vertical ? -img.height : 0);
            ctx.restore();
            canvas.toBlob(function (flippedBlob) {
                if (flippedBlob) {
                    resolve(flippedBlob);
                }
                else {
                    reject(new Error('Flipping failed'));
                }
            }, imageBlob.type);
        };
        img.onerror = function () { return reject(new Error('Image loading failed')); };
        img.src = URL.createObjectURL(imageBlob);
    });
}
exports.flipImage = flipImage;
