/**
 * 将文本复制到剪贴板。
 *
 * @param {string} text - 要复制的文本。
 * @returns {Promise<void>} 复制操作的Promise。
 *
 * @example
 * copyToClipboard('Hello World').then(() => console.log('Text copied!'));
 */
export declare function copyToClipboard(text: string): Promise<void>;
