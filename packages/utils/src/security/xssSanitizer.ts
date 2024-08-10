/**
 * XSS过滤器模块，用于清理用户输入中的恶意脚本。
 */

export class XSSSanitizer {
  /**
   * 清理字符串中的潜在XSS攻击代码。
   * @param input 要清理的输入字符串。
   * @returns 清理后的安全字符串。
   */
  static sanitize(input: string): string {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/`/g, '&#x60;');
  }

  /**
   * 从输入中移除所有HTML标签。
   * @param input 要处理的输入字符串。
   * @returns 移除标签后的字符串。
   */
  static stripTags(input: string): string {
    return input.replace(/<\/?[^>]+(>|$)/g, '');
  }
}

/**
 * 使用示例：
 * ```typescript
 * const userInput = '<script>alert("XSS")</script>';
 * const sanitizedInput = XSSSanitizer.sanitize(userInput);
 * console.log(sanitizedInput); // 输出: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
 * 
 * const cleanText = XSSSanitizer.stripTags(userInput);
 * console.log(cleanText); // 输出: alert("XSS")
 * ```
 */
