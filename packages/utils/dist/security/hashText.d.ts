/**
 * 使用SHA-256算法对文本进行哈希处理。
 * @param text - 要哈希的文本。
 * @returns 返回一个Promise，包含哈希值的十六进制字符串。
 */
export declare function hashText(text: string): Promise<string>;
