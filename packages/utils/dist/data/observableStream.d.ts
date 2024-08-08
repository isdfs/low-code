/**
 * 可观察数据流，用于处理和订阅实时数据流。
 *
 * @template T - 数据流中的数据类型。
 * @returns {{
*   subscribe: (callback: (data: T) => void) => () => void,
*   next: (data: T) => void,
*   complete: () => void
* }} - 包含订阅、发送数据和完成流的方法。
*
* @example
* const stream = observableStream<number>();
* const unsubscribe = stream.subscribe(data => console.log('Received:', data));
* stream.next(42); // 输出: Received: 42
* unsubscribe();
* stream.next(100); // 不再输出
* stream.complete();
*/
export declare function observableStream<T>(): {
    subscribe: (callback: (data: T) => void) => () => void;
    next: (data: T) => void;
    complete: () => void;
};
