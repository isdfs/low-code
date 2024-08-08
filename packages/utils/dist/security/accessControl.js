"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessControl = void 0;
/**
 * 权限管理工具，用于检查用户是否有权访问特定资源。
 *
 * @param {string[]} userRoles - 用户的角色数组。
 * @param {Record<string, string[]>} rolePermissions - 每个角色的权限映射。
 * @returns {{
*  canAccess: (permission: string) => boolean,
*  addRole: (role: string) => void,
*  removeRole: (role: string) => void
* }} - 包含检查权限、添加角色和删除角色的方法。
*
* @example
* const acl = accessControl(['user'], {
*   admin: ['create', 'edit', 'delete'],
*   user: ['read', 'edit']
* });
* console.log(acl.canAccess('edit')); // true
* acl.addRole('admin');
* console.log(acl.canAccess('delete')); // true
*/
function accessControl(userRoles, rolePermissions) {
    function canAccess(permission) {
        return userRoles.some(function (role) { var _a; return (_a = rolePermissions[role]) === null || _a === void 0 ? void 0 : _a.includes(permission); });
    }
    function addRole(role) {
        if (!userRoles.includes(role)) {
            userRoles.push(role);
        }
    }
    function removeRole(role) {
        var index = userRoles.indexOf(role);
        if (index > -1) {
            userRoles.splice(index, 1);
        }
    }
    return {
        canAccess: canAccess,
        addRole: addRole,
        removeRole: removeRole,
    };
}
exports.accessControl = accessControl;
