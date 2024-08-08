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
export declare function fileToBase64(file: File): Promise<string>;
