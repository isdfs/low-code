/**
 * 读取文件并以文本形式返回。
 *
 * @param {File} file - 要读取的文件。
 * @returns {Promise<string>} 包含文件内容的Promise。
 *
 * @example
 * const fileInput = document.getElementById('fileInput') as HTMLInputElement;
 * fileInput.addEventListener('change', async () => {
 *   if (fileInput.files) {
 *     const content = await readFileAsText(fileInput.files[0]);
 *     console.log(content);
 *   }
 * });
 */
export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
  });
}
