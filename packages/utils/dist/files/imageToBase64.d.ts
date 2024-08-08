/**
 * 将图片文件转换为 base64 编码字符串
 *
 * @param {File} imageFile - 图片文件
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const imageFile = new File(["..."], "image.png", { type: "image/png" });
 * imageToBase64(imageFile).then(base64 => console.log(base64));
 */
export declare function imageToBase64(imageFile: File): Promise<string>;
