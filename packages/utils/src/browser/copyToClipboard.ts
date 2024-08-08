/**
 * 将文本复制到剪贴板。
 *
 * @param {string} text - 要复制的文本。
 * @returns {Promise<void>} 复制操作的Promise。
 *
 * @example
 * copyToClipboard('Hello World').then(() => console.log('Text copied!'));
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
  } catch (err) {
      console.error('Failed to copy text: ', err);
  }
}
