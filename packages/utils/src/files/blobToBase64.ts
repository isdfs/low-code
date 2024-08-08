// src/files/blobToBase64.ts

/**
 * 将 Blob 对象转换为 base64 编码字符串
 *
 * @param {Blob} blob - Blob 对象
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const blob = new Blob(["Hello, world!"], { type: "text/plain" });
 * blobToBase64(blob).then(base64 => console.log(base64));
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
  });
}
