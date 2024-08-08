"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyText = void 0;
/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<{ type: string; text?: string; err?: unknown }>}
 */
var copyText = function (text) {
    return new Promise(function (resolve, rejects) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                resolve({ type: 'success', text: text });
            }).catch(function (err) {
                rejects({ type: 'error', err: err });
            });
        }
        else {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed'; // 防止页面滚动
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
                resolve({ type: 'success', text: text });
            }
            catch (err) {
                rejects({ type: 'error', err: err });
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
    });
};
exports.copyText = copyText;
