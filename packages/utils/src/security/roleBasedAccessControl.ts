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
export function roleBasedAccessControl<R extends string, P extends string>() {
   const roles = new Map<R, Set<P>>();

   function addRole(role: R, permissions: P[]) {
       roles.set(role, new Set(permissions));
   }

   function canAccess(role: R, permission: P): boolean {
       return roles.has(role) && roles.get(role)!.has(permission);
   }

   function getRoles(): R[] {
       return Array.from(roles.keys());
   }

   return {
       addRole,
       canAccess,
       getRoles,
   };
}
