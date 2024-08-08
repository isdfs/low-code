/**
 * 基于角色的访问控制（RBAC），用于管理用户权限。
 *
 * @template R - 角色类型。
 * @template P - 权限类型。
 * @returns {{
*   addRole: (role: R, permissions: P[]) => void,
*   canAccess: (role: R, permission: P) => boolean,
*   getRoles: () => R[]
* }} - 包含添加角色、检查访问权限和获取所有角色的方法。
*
* @example
* const rbac = roleBasedAccessControl<string, string>();
* rbac.addRole('admin', ['create', 'read', 'update', 'delete']);
* console.log(rbac.canAccess('admin', 'update')); // true
* console.log(rbac.getRoles()); // ['admin']
*/
export declare function roleBasedAccessControl<R extends string, P extends string>(): {
    addRole: (role: R, permissions: P[]) => void;
    canAccess: (role: R, permission: P) => boolean;
    getRoles: () => R[];
};
