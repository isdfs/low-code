import { capitalize } from '../string/capitalize';

describe('capitalize', () => {
    it('应将首字母大写', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('空字符串应返回空字符串', () => {
        expect(capitalize('')).toBe('');
    });
});
