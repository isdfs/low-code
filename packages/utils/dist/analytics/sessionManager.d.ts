/**
 * 会话管理器模块，用于管理用户会话。
 */
export interface SessionData {
    userId: string;
    token: string;
    expiresAt: number;
}
export declare class SessionManager {
    private sessionKey;
    constructor(sessionKey: string);
    /**
     * 创建新的会话。
     * @param data 会话数据。
     */
    createSession(data: SessionData): void;
    /**
     * 获取当前会话数据。
     * @returns 当前会话数据，如果会话已过期或不存在则返回null。
     */
    getSession(): SessionData | null;
    /**
     * 销毁当前会话。
     */
    destroySession(): void;
    /**
     * 检查会话是否有效。
     * @returns 如果会话有效，返回true；否则返回false。
     */
    isSessionValid(): boolean;
}
/**
 * 使用示例：
 * ```typescript
 * const sessionManager = new SessionManager('user_session');
 *
 * sessionManager.createSession({
 *   userId: '12345',
 *   token: 'abcdefg',
 *   expiresAt: Date.now() + 3600000, // 1小时后过期
 * });
 *
 * if (sessionManager.isSessionValid()) {
 *   console.log('会话有效:', sessionManager.getSession());
 * } else {
 *   console.log('会话已过期或不存在');
 * }
 *
 * sessionManager.destroySession();
 * ```
 */
