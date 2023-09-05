import { sumOfDigits } from './sumOfDigits';

test('sumOfDigits returns the correct sum for positive numbers', () => {
    expect(sumOfDigits(123)).toBe(6); // 1 + 2 + 3 = 6
    expect(sumOfDigits(456)).toBe(15); // 4 + 5 + 6 = 15
});

test('sumOfDigits returns the correct sum for negative numbers', () => {
    expect(sumOfDigits(-123)).toBe(6); // 1 + 2 + 3 = 6
    expect(sumOfDigits(-456)).toBe(15); // 4 + 5 + 6 = 15
});

test('sumOfDigits returns 0 for 0', () => {
    expect(sumOfDigits(0)).toBe(0);
});
