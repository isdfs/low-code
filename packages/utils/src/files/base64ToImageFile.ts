// src/images/base64ToImageFile.ts

import { base64ToFile } from "./base64ToFile";

/**
 * 将 base64 编码字符串转换为图片文件
 *
 * @param {string} base64 - base64 编码字符串
 * @param {string} filename - 文件名
 * @returns {File} 图片文件
 *
 * @example
 * const base64 = "data:image/png;base64,iVBORw0KGgoAAAANS...";
 * const imageFile = base64ToImageFile(base64, 'image.png');
 * console.log(imageFile);
 */
export function base64ToImageFile(base64: string, filename: string): File {
  return base64ToFile(base64, filename);
}
