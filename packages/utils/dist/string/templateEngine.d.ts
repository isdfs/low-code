/**
 * @module TemplateEngine
 * @description 提供字符串替换与模板引擎功能，支持模板字符串与动态数据的绑定。
 */
export declare class TemplateEngine {
    /**
     * @description 渲染模板字符串，将模板中的占位符替换为提供的数据
     * @param template 模板字符串，使用 {{key}} 作为占位符
     * @param data 用于替换占位符的对象数据
     * @returns 渲染后的字符串
     * @example
     * const result = TemplateEngine.render('Hello, {{name}}!', { name: 'Alice' });
     * console.log('Rendered:', result); // 输出 "Hello, Alice!"
     */
    static render(template: string, data: Record<string, any>): string;
    /**
     * @description 渲染带有循环逻辑的模板字符串
     * @param template 模板字符串，使用 {{#each items}}{{this}}{{/each}} 进行循环
     * @param data 用于替换占位符的对象数据
     * @returns 渲染后的字符串
     * @example
     * const result = TemplateEngine.renderWithLoop('Items: {{#each items}}{{this}}, {{/each}}', { items: ['apple', 'banana', 'cherry'] });
     * console.log('Rendered with Loop:', result); // 输出 "Items: apple, banana, cherry, "
     */
    static renderWithLoop(template: string, data: Record<string, any>): string;
}
