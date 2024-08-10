/**
 * @module StringVersionControl
 * @description 提供字符串的版本控制与变更跟踪功能，适用于需要记录和回溯字符串变化的场景。
 */
interface VersionedString {
    version: number;
    content: string;
    timestamp: Date;
}
export declare class StringVersionControl {
    private versions;
    private currentVersion;
    /**
     * @description 初始化字符串版本控制
     * @param initialContent 初始字符串内容
     */
    constructor(initialContent: string);
    /**
     * @description 添加新的字符串版本
     * @param content 新的字符串内容
     * @returns 新的版本号
     * @example
     * ```typescript
     * const svc = new StringVersionControl('Initial content');
     * const newVersion = svc.addVersion('Updated content');
     * console.log(newVersion); // 输出 2
     * ```
     */
    addVersion(content: string): number;
    /**
     * @description 获取指定版本的字符串内容
     * @param version 要获取的版本号
     * @returns 对应版本的字符串内容
     * @example
     * ```typescript
     * const content = svc.getVersion(1);
     * console.log(content); // 输出 "Initial content"
     * ```
     */
    getVersion(version: number): string | null;
    /**
     * @description 获取当前版本的字符串内容
     * @returns 当前版本的字符串内容
     * @example
     * ```typescript
     * const currentContent = svc.getCurrentVersion();
     * console.log(currentContent); // 输出 "Updated content"
     * ```
     */
    getCurrentVersion(): string;
    /**
     * @description 获取字符串的变更历史记录
     * @returns 包含所有版本信息的数组
     * @example
     * ```typescript
     * const history = svc.getHistory();
     * console.log(history); // 输出 [{ version: 1, content: "Initial content", timestamp: ... }, { version: 2, content: "Updated content", timestamp: ... }]
     * ```
     */
    getHistory(): VersionedString[];
}
export {};
