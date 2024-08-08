/**
 * 在图像上应用水印
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {string} watermarkText - 要应用的水印文本
 * @param {string} [font='30px Arial'] - 水印文本的字体样式
 * @param {string} [color='rgba(255, 255, 255, 0.5)'] - 水印文本的颜色
 * @param {number} [x=10] - 水印在图像上 x 轴的起始位置
 * @param {number} [y=50] - 水印在图像上 y 轴的起始位置
 * @returns {Promise<Blob>} 返回添加水印后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * applyWatermark(blob, 'My Watermark').then(watermarkedBlob => {
 *   // Do something with watermarkedBlob
 * });
 */
export { applyWatermark } from './applyWatermark';

/**
 * 压缩图片
 *
 * @param {File} imageFile - 图片文件
 * @param {number} quality - 压缩质量（0 - 1）
 * @returns {Promise<Blob>} 压缩后的图片 Blob 对象
 *
 * @example
 * const imageFile = new File(["..."], "image.png", { type: "image/png" });
 * compressImage(imageFile, 0.8).then(blob => console.log(blob));
 */
export { compressImage } from './compressImage';

/**
 * 裁剪图像
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {number} startX - 裁剪区域的起始 x 坐标
 * @param {number} startY - 裁剪区域的起始 y 坐标
 * @param {number} width - 裁剪区域的宽度
 * @param {number} height - 裁剪区域的高度
 * @returns {Promise<Blob>} 返回裁剪后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * cropImage(blob, 10, 10, 200, 200).then(croppedBlob => {
 *   // Do something with croppedBlob
 * });
 */
export { cropImage } from './cropImage';

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
export { downloadImage } from './downloadImage';

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
export { flipImage } from './flipImage';

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
export { resizeImage } from './resizeImage';

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
export { rotateImage } from './rotateImage';

/**
 * 将图片文件上传到指定的服务器端点
 *
 * @param {File} file - 图片文件对象
 * @param {string} uploadUrl - 服务器上传端点的 URL
 * @returns {Promise<Response>} 返回包含上传响应的 Promise
 *
 * @example
 * const file = document.querySelector('input[type="file"]').files[0];
 * uploadImage(file, 'https://example.com/upload')
 *   .then(response => console.log('Upload successful', response))
 *   .catch(error => console.error('Upload failed', error));
 */
export { uploadImage } from './uploadImage';