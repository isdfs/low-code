"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.roleBasedAccessControl = exports.policyEvaluator = exports.generateSecureToken = exports.decrypt = exports.encrypt = exports.accessControl = void 0;
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
var accessControl_1 = require("./accessControl");
Object.defineProperty(exports, "accessControl", { enumerable: true, get: function () { return accessControl_1.accessControl; } });
/**
 * 简单的加密函数（Caesar Cipher）
 *
 * @param {string} text - 要加密的文本
 * @param {number} shift - 位移量
 * @returns {string} 加密后的文本
 *
 * @example
 * const encrypted = encrypt('hello', 3); // khoor
 */
var encrypt_1 = require("./encrypt");
Object.defineProperty(exports, "encrypt", { enumerable: true, get: function () { return encrypt_1.encrypt; } });
/**
 * 简单的解密函数（Caesar Cipher）
 *
 * @param {string} text - 要解密的文本
 * @param {number} shift - 位移量
 * @returns {string} 解密后的文本
 *
 * @example
 * const decrypted = decrypt('khoor', 3); // hello
 */
var encrypt_2 = require("./encrypt");
Object.defineProperty(exports, "decrypt", { enumerable: true, get: function () { return encrypt_2.decrypt; } });
/**
 * 生成一个安全的随机令牌。
 * @param length - 令牌的长度，默认为32。
 * @returns 生成的随机令牌字符串。
 */
var generateSecureToken_1 = require("./generateSecureToken");
Object.defineProperty(exports, "generateSecureToken", { enumerable: true, get: function () { return generateSecureToken_1.generateSecureToken; } });
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
var policyEvaluator_1 = require("./policyEvaluator");
Object.defineProperty(exports, "policyEvaluator", { enumerable: true, get: function () { return policyEvaluator_1.policyEvaluator; } });
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
var roleBasedAccessControl_1 = require("./roleBasedAccessControl");
Object.defineProperty(exports, "roleBasedAccessControl", { enumerable: true, get: function () { return roleBasedAccessControl_1.roleBasedAccessControl; } });
/**
 * 验证密码的复杂性，检查是否符合指定的安全标准。
 * @param password - 需要验证的密码。
 * @param minLength - 密码的最小长度，默认为8。
 * @param requireUppercase - 是否要求包含大写字母，默认为true。
 * @param requireLowercase - 是否要求包含小写字母，默认为true。
 * @param requireNumber - 是否要求包含数字，默认为true。
 * @param requireSpecialChar - 是否要求包含特殊字符，默认为true。
 * @returns 如果密码符合标准则返回true，否则返回false。
 */
var validatePassword_1 = require("./validatePassword");
Object.defineProperty(exports, "validatePassword", { enumerable: true, get: function () { return validatePassword_1.validatePassword; } });
