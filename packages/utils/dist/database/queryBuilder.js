"use strict";
/**
 * SQL查询构建器模块，支持构建复杂的SQL查询语句。
 */
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
        this.table = '';
        this.fields = [];
        this.conditions = [];
        this.joins = [];
        this.orderBy2 = [];
    }
    /**
     * 设置查询的表名。
     * @param table 表名。
     * @param alias 表的别名。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.from = function (table, alias) {
        this.table = alias ? "".concat(table, " AS ").concat(alias) : table;
        return this;
    };
    /**
     * 选择要查询的字段。
     * @param fields 字段名数组。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.select = function () {
        var fields = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fields[_i] = arguments[_i];
        }
        this.fields = fields;
        return this;
    };
    /**
     * 添加查询条件。
     * @param field 字段名。
     * @param operator 条件操作符。
     * @param value 条件值。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.where = function (field, operator, value) {
        this.conditions.push({ field: field, operator: operator, value: value });
        return this;
    };
    /**
     * 添加JOIN操作。
     * @param table 要连接的表名。
     * @param on 连接条件。
     * @param alias 表的别名。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.join = function (table, on, alias) {
        this.joins.push({ table: table, alias: alias, on: on });
        return this;
    };
    /**
     * 设置ORDER BY排序。
     * @param field 要排序的字段名。
     * @param direction 排序方向，ASC或DESC。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.orderBy = function (field, direction) {
        if (direction === void 0) { direction = 'ASC'; }
        this.orderBy2.push({ field: field, direction: direction });
        return this;
    };
    /**
     * 设置LIMIT限制。
     * @param limit 结果的最大行数。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.limit = function (limit) {
        this.limitValue = limit;
        return this;
    };
    /**
     * 设置OFFSET偏移量。
     * @param offset 结果的偏移行数。
     * @returns 当前查询构建器实例。
     */
    QueryBuilder.prototype.offset = function (offset) {
        this.offsetValue = offset;
        return this;
    };
    /**
     * 生成最终的SQL查询字符串。
     * @returns SQL查询字符串。
     */
    QueryBuilder.prototype.toSQL = function () {
        var query = "SELECT ".concat(this.fields.length > 0 ? this.fields.join(', ') : '*', " FROM ").concat(this.table);
        if (this.joins.length > 0) {
            this.joins.forEach(function (_a) {
                var table = _a.table, alias = _a.alias, on = _a.on;
                var joinCondition = "".concat(on.field, " ").concat(on.operator, " ").concat(typeof on.value === 'string' ? "'".concat(on.value, "'") : on.value);
                query += " JOIN ".concat(alias ? "".concat(table, " AS ").concat(alias) : table, " ON ").concat(joinCondition);
            });
        }
        if (this.conditions.length > 0) {
            var whereClauses = this.conditions.map(function (cond) { return "".concat(cond.field, " ").concat(cond.operator, " ").concat(typeof cond.value === 'string' ? "'".concat(cond.value, "'") : cond.value); });
            query += " WHERE ".concat(whereClauses.join(' AND '));
        }
        if (this.orderBy.length > 0) {
            var orderByClauses = this.orderBy2.map(function (order) { return "".concat(order.field, " ").concat(order.direction); });
            query += " ORDER BY ".concat(orderByClauses.join(', '));
        }
        if (this.limitValue !== undefined) {
            query += " LIMIT ".concat(this.limitValue);
        }
        if (this.offsetValue !== undefined) {
            query += " OFFSET ".concat(this.offsetValue);
        }
        return query;
    };
    return QueryBuilder;
}());
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
