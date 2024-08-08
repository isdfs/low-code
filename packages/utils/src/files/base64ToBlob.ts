// src/files/base64ToBlob.ts

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
export function base64ToBlob(base64: string): Blob {
  const [metadata, base64Data] = base64.split(',');
  const byteString = atob(base64Data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
  }

  const mimeType = metadata.split(':')[1].split(';')[0];
  return new Blob([uint8Array], { type: mimeType });
}
