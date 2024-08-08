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
export declare function compressImage(imageFile: File, quality: number): Promise<Blob>;
