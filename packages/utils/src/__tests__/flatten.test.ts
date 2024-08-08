import { flatten } from '../array/flatten';

describe('flatten', () => {
    it('应展平嵌套数组', () => {
        expect(flatten([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it('处理空数组应返回空数组', () => {
        expect(flatten([])).toEqual([]);
    });

    it('应处理已展平的数组', () => {
        expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
