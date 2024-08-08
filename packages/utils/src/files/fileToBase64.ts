// src/files/fileToBase64.ts

/**
 * 将文件转换为 base64 编码字符串
 *
 * @param {File} file - 要转换的文件
 * @returns {Promise<string>} base64 编码字符串
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * fileToBase64(file).then(base64 => console.log(base64));
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
  });
}
