/**
 * 读取文本文件内容。
 * @param file - 要读取的文本文件。
 * @returns 返回一个Promise，包含文件的文本内容。
 */
export function readTextFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
  });
}
