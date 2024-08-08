// src/files/base64ToFile.ts

import { base64ToBlob } from "./base64ToBlob";

/**
 * 将 base64 编码字符串转换为 File 对象
 *
 * @param {string} base64 - base64 编码字符串
 * @param {string} filename - 文件名
 * @returns {File} File 对象
 *
 * @example
 * const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
 * const file = base64ToFile(base64, 'hello.txt');
 * console.log(file);
 */
export function base64ToFile(base64: string, filename: string): File {
  const blob = base64ToBlob(base64);
  return new File([blob], filename, { type: blob.type });
}
