"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImageThumbnail = void 0;
/**
 * 从图像文件生成缩略图。
 * @param file - 原始图像文件。
 * @param width - 缩略图的宽度。
 * @param height - 缩略图的高度。
 * @returns 返回一个Promise，包含生成的缩略图Blob。
 */
function generateImageThumbnail(file, width, height) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var img = new Image();
            img.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            img.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0, width, height);
                    canvas.toBlob(function (blob) {
                        if (blob) {
                            resolve(blob);
                        }
                        else {
                            reject(new Error('Thumbnail generation failed'));
                        }
                    });
                }
                else {
                    reject(new Error('Canvas context is not supported'));
                }
            };
        };
        reader.onerror = function () {
            reject(new Error('Error reading file'));
        };
        reader.readAsDataURL(file);
    });
}
exports.generateImageThumbnail = generateImageThumbnail;
