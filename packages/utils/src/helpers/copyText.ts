/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<{ type: string; text?: string; err?: unknown }>}
 */
export const copyText = (
  text: string,
): Promise<{ type: string; text?: string; err?: unknown }> => {
  return new Promise((resolve, rejects) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        resolve({ type: 'success', text });
      }).catch((err) => {
        rejects({ type: 'error', err });
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; // 防止页面滚动
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        resolve({ type: 'success', text });
      } catch (err) {
        rejects({ type: 'error', err });
      } finally {
        document.body.removeChild(textarea);
      }
    }
  });
};
