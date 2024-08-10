/**
 * 获取页面或元素的滚动位置。
 * @param element - 可选，目标元素，默认是window。
 * @returns 返回一个包含x和y滚动位置的对象。
 */
export declare function getScrollPos(element?: HTMLElement | Window): {
    x: number;
    y: number;
};
