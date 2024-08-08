"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateImage = void 0;
/**
 * 旋转图像
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {number} degrees - 旋转角度（正值为顺时针，负值为逆时针）
 * @returns {Promise<Blob>} 返回旋转后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * rotateImage(blob, 90).then(rotatedBlob => {
 *   // Do something with rotatedBlob
 * });
 */
function rotateImage(imageBlob, degrees) {
    return new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return reject(new Error('Canvas context not supported'));
        }
        img.onload = function () {
            var radians = (degrees * Math.PI) / 180;
            canvas.width = img.height;
            canvas.height = img.width;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(radians);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            canvas.toBlob(function (rotatedBlob) {
                if (rotatedBlob) {
                    resolve(rotatedBlob);
                }
                else {
                    reject(new Error('Rotation failed'));
                }
            }, imageBlob.type);
        };
        img.onerror = function () { return reject(new Error('Image loading failed')); };
        img.src = URL.createObjectURL(imageBlob);
    });
}
exports.rotateImage = rotateImage;
