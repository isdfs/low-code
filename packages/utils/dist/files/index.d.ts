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
export { base64ToBlob } from './base64ToBlob';
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
export { base64ToFile } from './base64ToFile';
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
export { base64ToImageFile } from './base64ToImageFile';
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
export { blobToBase64 } from './blobToBase64';
/**
 * 将 Blob 对象转换为 File 对象
 *
 * @param {Blob} blob - Blob 对象
 * @param {string} filename - 文件名
 * @returns {File} File 对象
 *
 * @example
 * const blob = new Blob(["Hello, world!"], { type: "text/plain" });
 * const file = blobToFile(blob, 'hello.txt');
 * console.log(file);
 */
export { blobToFile } from './blobToFile';
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
export { readFile } from './fileReader';
/**
 * 将文本保存为文件
 *
 * @param {string} content - 文件内容
 * @param {string} filename - 文件名
 * @param {string} mimeType - 文件类型
 */
export { saveFile } from './fileReader';
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
export { fileToBase64 } from './fileToBase64';
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
export { fileToBlob } from './fileToBlob';
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
export { imageToBase64 } from './imageToBase64';
/**
 * 读取并解析CSV文件，将其转换为对象数组。
 * @param file - 要读取的CSV文件。
 * @returns 返回一个Promise，包含解析后的对象数组。
 */
export { readCSVFile } from './readCSVFile';
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
export { readFileAsText } from './readFileAsText';
/**
 * 虚拟文件系统，用于在内存中模拟文件操作。
 *
 * @returns {{
 *   createFile: (path: string, content: string) => void,
 *   readFile: (path: string) => string | undefined,
 *   deleteFile: (path: string) => void,
 *   listFiles: () => string[]
 * }} - 包含创建、读取、删除和列出文件的方法。
 *
 * @example
 * const vfs = virtualFileSystem();
 * vfs.createFile('/path/to/file.txt', 'Hello, World!');
 * console.log(vfs.readFile('/path/to/file.txt')); // 'Hello, World!'
 * vfs.deleteFile('/path/to/file.txt');
 */
export { virtualFileSystem } from './virtualFileSystem';
