import { chunk } from '../array/chunk';

describe('chunk', () => {
    it('应将数组按指定大小分块', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('如果块大小大于数组长度，则应返回整个数组', () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    it('如果块大小为 1，则应返回每个元素单独作为一个块', () => {
        expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });
});
