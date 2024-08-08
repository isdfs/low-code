/**
 * 将 base64 编码字符串转换为 Blob 对象
 *
 * @param {string} base64 - base64 编码字符串
 * @returns {Blob} Blob 对象
 *
 * @example
 * const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
 * const blob = base64ToBlob(base64);
 * console.log(blob);
 */
export declare function base64ToBlob(base64: string): Blob;
