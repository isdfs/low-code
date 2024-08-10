/**
 * 复制文本到剪贴板。
 *
 * 该方法可以将指定的文本复制到用户的剪贴板中。适用于需要用户复制内容的场景。
 *
 * @param {string} text - 要复制的文本。
 * @returns {Promise<void>} 返回一个 Promise，当文本成功复制到剪贴板时，Promise 解析。
 *
 * @example
 * ```
 * copyToClipboard('Hello, World!')
 *   .then(() => console.log('文本已成功复制到剪贴板！'))
 *   .catch(err => console.error('复制失败:', err));
 * ```
 */
export declare function copyToClipboard(text: string): Promise<void>;
