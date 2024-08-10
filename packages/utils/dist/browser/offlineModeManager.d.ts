/**
 * 浏览器离线模式管理模块，提供离线模式下的资源缓存和加载管理功能。
 * @module OfflineModeManager
 */
declare class OfflineModeManager {
    private cacheName;
    private cache;
    constructor(cacheName?: string);
    private initCache;
    cacheResource(url: string): Promise<void>;
    loadResource(url: string): Promise<Response | null>;
    clearCache(): Promise<void>;
    isResourceCached(url: string): Promise<boolean>;
}
declare const offlineModeManager: OfflineModeManager;
export default offlineModeManager;
