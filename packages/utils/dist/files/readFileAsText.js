"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileAsText = void 0;
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
function readFileAsText(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function () { return reject(reader.error); };
        reader.readAsText(file);
    });
}
exports.readFileAsText = readFileAsText;
