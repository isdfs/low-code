/**
 * 货币格式化工具模块，用于将数字格式化为特定货币格式。
 */
export declare class CurrencyFormatter {
    private locale;
    private currency;
    /**
     * 创建一个货币格式化工具实例。
     * @param locale 本地化设置（如'en-US'）。
     * @param currency 货币代码（如'USD', 'CNY'）。
     */
    constructor(locale: string, currency: string);
    /**
     * 格式化数字为货币格式。
     * @param amount 要格式化的数字。
     * @returns 格式化后的货币字符串。
     */
    format(amount: number): string;
    /**
     * 将货币格式字符串解析为数字。
     * @param formattedAmount 格式化后的货币字符串。
     * @returns 解析后的数字。
     */
    parse(formattedAmount: string): number;
}
/**
 * 使用示例：
 * ```typescript
 * const usdFormatter = new CurrencyFormatter('en-US', 'USD');
 * console.log(usdFormatter.format(1234.56)); // 输出: $1,234.56
 *
 * const cnyFormatter = new CurrencyFormatter('zh-CN', 'CNY');
 * console.log(cnyFormatter.format(1234.56)); // 输出: ￥1,234.56
 *
 * const parsedAmount = usdFormatter.parse('$1,234.56');
 * console.log(parsedAmount); // 输出: 1234.56
 * ```
 */
