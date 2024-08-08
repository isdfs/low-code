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
export declare function readFile(file: File): Promise<string>;
/**
* 将文本保存为文件
*
* @param {string} content - 文件内容
* @param {string} filename - 文件名
* @param {string} mimeType - 文件类型
*/
export declare function saveFile(content: string, filename: string, mimeType?: string): void;
