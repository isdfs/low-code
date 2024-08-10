/**
 * SQL查询构建器模块，支持构建复杂的SQL查询语句。
 */

type ConditionOperator = '=' | '>' | '<' | '>=' | '<=' | '<>' | 'LIKE';

interface Condition {
  field: string;
  operator: ConditionOperator;
  value: any;
}

interface Join {
  table: string;
  alias?: string;
  on: Condition;
}

interface OrderBy {
  field: string;
  direction: 'ASC' | 'DESC';
}

class QueryBuilder {
  private table: string = '';
  private fields: string[] = [];
  private conditions: Condition[] = [];
  private joins: Join[] = [];
  private orderBy2: OrderBy[] = [];
  private limitValue?: number;
  private offsetValue?: number;

  /**
   * 设置查询的表名。
   * @param table 表名。
   * @param alias 表的别名。
   * @returns 当前查询构建器实例。
   */
  from(table: string, alias?: string): this {
    this.table = alias ? `${table} AS ${alias}` : table;
    return this;
  }

  /**
   * 选择要查询的字段。
   * @param fields 字段名数组。
   * @returns 当前查询构建器实例。
   */
  select(...fields: string[]): this {
    this.fields = fields;
    return this;
  }

  /**
   * 添加查询条件。
   * @param field 字段名。
   * @param operator 条件操作符。
   * @param value 条件值。
   * @returns 当前查询构建器实例。
   */
  where(field: string, operator: ConditionOperator, value: any): this {
    this.conditions.push({ field, operator, value });
    return this;
  }

  /**
   * 添加JOIN操作。
   * @param table 要连接的表名。
   * @param on 连接条件。
   * @param alias 表的别名。
   * @returns 当前查询构建器实例。
   */
  join(table: string, on: Condition, alias?: string): this {
    this.joins.push({ table, alias, on });
    return this;
  }

  /**
   * 设置ORDER BY排序。
   * @param field 要排序的字段名。
   * @param direction 排序方向，ASC或DESC。
   * @returns 当前查询构建器实例。
   */
  orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): this {
    this.orderBy2.push({ field, direction });
    return this;
  }

  /**
   * 设置LIMIT限制。
   * @param limit 结果的最大行数。
   * @returns 当前查询构建器实例。
   */
  limit(limit: number): this {
    this.limitValue = limit;
    return this;
  }

  /**
   * 设置OFFSET偏移量。
   * @param offset 结果的偏移行数。
   * @returns 当前查询构建器实例。
   */
  offset(offset: number): this {
    this.offsetValue = offset;
    return this;
  }

  /**
   * 生成最终的SQL查询字符串。
   * @returns SQL查询字符串。
   */
  toSQL(): string {
    let query = `SELECT ${this.fields.length > 0 ? this.fields.join(', ') : '*'} FROM ${this.table}`;

    if (this.joins.length > 0) {
      this.joins.forEach(({ table, alias, on }) => {
        const joinCondition = `${on.field} ${on.operator} ${typeof on.value === 'string' ? `'${on.value}'` : on.value}`;
        query += ` JOIN ${alias ? `${table} AS ${alias}` : table} ON ${joinCondition}`;
      });
    }

    if (this.conditions.length > 0) {
      const whereClauses = this.conditions.map(cond => `${cond.field} ${cond.operator} ${typeof cond.value === 'string' ? `'${cond.value}'` : cond.value}`);
      query += ` WHERE ${whereClauses.join(' AND ')}`;
    }

    if (this.orderBy.length > 0) {
      const orderByClauses = this.orderBy2.map(order => `${order.field} ${order.direction}`);
      query += ` ORDER BY ${orderByClauses.join(', ')}`;
    }

    if (this.limitValue !== undefined) {
      query += ` LIMIT ${this.limitValue}`;
    }

    if (this.offsetValue !== undefined) {
      query += ` OFFSET ${this.offsetValue}`;
    }

    return query;
  }
}

/**
 * 使用示例：
 * ```typescript
 * const query = new QueryBuilder()
 *   .from('users', 'u')
 *   .select('u.id', 'u.name', 'p.phone')
 *   .join('profiles', { field: 'u.id', operator: '=', value: 'p.user_id' }, 'p')
 *   .where('u.status', '=', 'active')
 *   .orderBy('u.name', 'ASC')
 *   .limit(10)
 *   .offset(0)
 *   .toSQL();
 * 
 * console.log(query);
 * // 输出: SELECT u.id, u.name, p.phone FROM users AS u JOIN profiles AS p ON u.id = 'p.user_id' WHERE u.status = 'active' ORDER BY u.name ASC LIMIT 10 OFFSET 0
 * ```
 */
