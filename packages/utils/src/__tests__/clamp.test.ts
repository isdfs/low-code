import { clamp } from '../number/clamp';

describe('clamp', () => {
    it('应返回限制在范围内的值', () => {
        expect(clamp(5, 1, 10)).toBe(5);
        expect(clamp(-1, 0, 10)).toBe(0);
        expect(clamp(15, 0, 10)).toBe(10);
    });

    it('应返回相等的最小和最大值', () => {
        expect(clamp(5, 5, 5)).toBe(5);
    });
});
