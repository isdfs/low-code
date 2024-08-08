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
export declare function flipImage(imageBlob: Blob, horizontal?: boolean, vertical?: boolean): Promise<Blob>;
