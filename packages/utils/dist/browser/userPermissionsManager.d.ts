/**
 * 浏览器用户权限管理模块，提供对地理位置、通知、摄像头等权限的管理。
 * @module UserPermissionsManager
 */
export declare type PermissionName = 'geolocation' | 'notifications' | 'camera' | 'microphone';
declare class UserPermissionsManager {
    /**
     * 请求用户权限。
     * @param {PermissionName} permission - 要请求的权限名称。
     * @returns {Promise<PermissionStatus>} 权限状态的 Promise 对象。
     */
    requestPermission(permission: PermissionName): Promise<PermissionStatus | {
        state: NotificationPermission;
    }>;
    /**
     * 查询权限状态。
     * @param {PermissionName} permission - 要查询的权限名称。
     * @returns {Promise<PermissionStatus>} 权限状态的 Promise 对象。
     */
    queryPermission(permission: PermissionName): Promise<PermissionStatus>;
    /**
     * 监听权限状态变化。
     * @param {PermissionName} permission - 要监听的权限名称。
     * @param {(status: PermissionStatus) => void} callback - 权限状态变化时的回调函数。
     */
    watchPermission(permission: PermissionName, callback: (status: PermissionStatus) => void): Promise<void>;
}
declare const userPermissionsManager: UserPermissionsManager;
export default userPermissionsManager;
