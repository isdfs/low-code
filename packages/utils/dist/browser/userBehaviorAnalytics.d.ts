/**
 * 用户行为分析模块，用于捕获并分析用户在网页上的行为。
 * @module UserBehaviorAnalytics
 */
interface UserBehaviorData {
    eventType: string;
    element: string;
    timestamp: number;
    additionalInfo?: Record<string, any>;
}
declare class UserBehaviorAnalytics {
    private data;
    constructor();
    private initEventListeners;
    private captureClickEvent;
    private captureScrollEvent;
    private sendDataToServer;
    /**
     * 获取收集到的用户行为数据。
     * @returns {UserBehaviorData[]} 用户行为数据数组。
     */
    getCollectedData(): UserBehaviorData[];
}
declare const userBehaviorAnalytics: UserBehaviorAnalytics;
export default userBehaviorAnalytics;
