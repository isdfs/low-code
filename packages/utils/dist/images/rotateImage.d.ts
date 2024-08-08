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
export declare function rotateImage(imageBlob: Blob, degrees: number): Promise<Blob>;
