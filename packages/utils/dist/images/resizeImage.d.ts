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
export declare function resizeImage(imageFile: File, width: number, height: number): Promise<Blob>;
