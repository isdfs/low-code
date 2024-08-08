// src/files/fileToBlob.ts

/**
 * 将文件转换为 Blob 对象
 *
 * @param {File} file - 要转换的文件
 * @returns {Promise<Blob>} Blob 对象
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * fileToBlob(file).then(blob => console.log(blob));
 */
export function fileToBlob(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(new Blob([reader.result!]));
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
  });
}
