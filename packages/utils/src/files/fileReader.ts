// src/files/fileReader.ts

/**
 * 读取文本文件内容
 *
 * @param {File} file - 要读取的文件对象
 * @returns {Promise<string>} 文件内容
 *
 * @example
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * readFile(file).then(content => console.log(content)); // "Hello, world!"
 */
export function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
  });
}

/**
* 将文本保存为文件
*
* @param {string} content - 文件内容
* @param {string} filename - 文件名
* @param {string} mimeType - 文件类型
*/
export function saveFile(content: string, filename: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 使用示例
const content = 'Hello, world!';
saveFile(content, 'hello.txt');
