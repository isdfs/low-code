/**
 * 检查剪贴板权限并读取内容。
 *
 * 该方法用于检查用户是否授予了读取剪贴板内容的权限，并在获得权限后读取剪贴板中的内容。
 *
 * @returns {Promise<string>} 返回一个 Promise，解析为剪贴板中的文本内容。
 *
 * @example
 * ```
 * readClipboardContent()
 *   .then(text => {
 *     console.log('剪贴板内容:', text);
 *   })
 *   .catch(error => {
 *     console.error('无法读取剪贴板内容:', error);
 *   });
 * ```
 */
export declare function readClipboardContent(): Promise<string>;
