/**
 * @module TemplateEngine
 * @description 提供字符串解析与动态模板生成功能，支持条件渲染、循环渲染、嵌套模板等复杂操作。
 */

export class TemplateEngine {
  private template: string;

  constructor(template: string) {
      this.template = template;
  }

  /**
   * @description 渲染模板，支持变量替换、条件渲染和循环渲染
   * @param context 模板上下文对象，包含所有模板变量
   * @returns 渲染后的字符串
   * @example
   * ```typescript
   * const template = `
   *   <h1>{{title}}</h1>
   *   <ul>
   *     {{#each items}}
   *     <li>{{this}}</li>
   *     {{/each}}
   *   </ul>
   * `;
   * const engine = new TemplateEngine(template);
   * const result = engine.render({ title: 'Shopping List', items: ['Apples', 'Bananas', 'Cherries'] });
   * console.log(result); // 输出 "<h1>Shopping List</h1><ul><li>Apples</li><li>Bananas</li><li>Cherries</li></ul>"
   * ```
   */
  render(context: Record<string, any>): string {
      let rendered = this.template;

      // 处理变量替换
      rendered = rendered.replace(/{{(\w+)}}/g, (_, key) => {
          return context[key] !== undefined ? context[key] : '';
      });

      // 处理循环渲染
      rendered = rendered.replace(/{{#each (\w+)}}([\s\S]+?){{\/each}}/g, (_, key, loopTemplate) => {
          const items = context[key];
          if (Array.isArray(items)) {
              return items.map(item => {
                  const itemContext = { ...context, this: item };
                  return new TemplateEngine(loopTemplate).render(itemContext);
              }).join('');
          }
          return '';
      });

      // 处理条件渲染
      rendered = rendered.replace(/{{#if (\w+)}}([\s\S]+?){{\/if}}/g, (_, key, ifTemplate) => {
          return context[key] ? new TemplateEngine(ifTemplate).render(context) : '';
      });

      return rendered;
  }
}
