/**
 * 权限策略评估器，用于根据复杂的策略规则评估用户的权限。
 *
 * @param {Record<string, any>} userAttributes - 用户的属性对象，如角色、部门等。
 * @param {Record<string, (user: Record<string, any>) => boolean>} policies - 权限策略的映射表，键为策略名称，值为评估函数。
 * @returns {{
*   evaluate: (policyName: string) => boolean,
*   addPolicy: (policyName: string, evaluator: (user: Record<string, any>) => boolean) => void
* }} - 包含评估权限和添加策略的方法。
*
* @example
* const user = { role: 'admin', department: 'IT' };
* const policies = {
*   canEdit: (user) => user.role === 'admin',
*   canView: (user) => user.department === 'IT'
* };
* const evaluator = policyEvaluator(user, policies);
* console.log(evaluator.evaluate('canEdit')); // true
* evaluator.addPolicy('canDelete', (user) => user.role === 'admin' && user.department === 'IT');
* console.log(evaluator.evaluate('canDelete')); // true
*/
export declare function policyEvaluator(userAttributes: Record<string, any>, policies: Record<string, (user: Record<string, any>) => boolean>): {
    evaluate: (policyName: string) => boolean;
    addPolicy: (policyName: string, evaluator: (user: Record<string, any>) => boolean) => void;
};
