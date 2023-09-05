import { factorial } from './factorial';

test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of positive numbers', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
});

test('factorial of negative numbers should throw an error', () => {
    expect(() => factorial(-1)).toThrow();
});
