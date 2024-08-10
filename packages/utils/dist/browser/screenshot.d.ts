/**
 * 页面截图。
 *
 * 该方法使用 HTML5 Canvas API 截取指定元素的屏幕快照，并将其转换为图片数据。
 *
 * @param {HTMLElement} element - 要截取的元素。
 * @returns {Promise<string>} 返回一个 Promise，解析为 base64 格式的图片数据。
 *
 * @example
 * ```
 * captureScreenshot(document.getElementById('myElement'))
 *   .then(dataUrl => {
 *     console.log('截图完成:', dataUrl);
 *     // 可以将 dataUrl 赋值给 img 标签的 src 属性以显示截图
 *   })
 *   .catch(error => {
 *     console.error('截图失败:', error);
 *   });
 * ```
 */
export declare function captureScreenshot(element: HTMLElement): Promise<string>;
