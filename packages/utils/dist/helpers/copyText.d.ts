/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<{ type: string; text?: string; err?: unknown }>}
 */
export declare const copyText: (text: string) => Promise<{
    type: string;
    text?: string | undefined;
    err?: unknown;
}>;
