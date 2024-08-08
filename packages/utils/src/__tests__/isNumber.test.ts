import { isNumber } from '../number/isNumber';

describe('isNumber', () => {
    it('应识别数字', () => {
        expect(isNumber(123)).toBe(true);
        expect(isNumber(NaN)).toBe(false);
    });

    it('应返回 false 对于非数字值', () => {
        expect(isNumber('123')).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber([])).toBe(false);
    });
});
