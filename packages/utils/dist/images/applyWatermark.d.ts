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
export declare function applyWatermark(imageBlob: Blob, watermarkText: string, font?: string, color?: string, x?: number, y?: number): Promise<Blob>;
