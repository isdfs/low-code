/**
 * AnimationQueue 类实现了动画队列管理。
 */
declare class AnimationQueue {
    private queue;
    private currentIndex;
    /**
     * enqueue 方法将动画添加到队列。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     */
    enqueue(animation: KeyframeAnimation): void;
    /**
     * start 方法开始执行队列中的动画。
     */
    start(): void;
    /**
     * runNextAnimation 方法执行队列中的下一个动画。
     */
    private runNextAnimation;
}
/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const queue = new AnimationQueue();
* queue.enqueue(anim1);
* queue.enqueue(anim2);
* queue.start(); // 顺序执行 anim1 和 anim2
*/
