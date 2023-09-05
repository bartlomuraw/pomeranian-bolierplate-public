import { isPrime } from './isPrime';


test('3 is a prime number', () => {
    expect(isPrime(3)).toBe(true);
});

test('4 is not a prime number', () => {
    expect(isPrime(4)).toBe(false);
});

test('29 is a prime number', () => {
    expect(isPrime(29)).toBe(true);
});

test('1 is not a prime number', () => {
    expect(isPrime(1)).toBe(false);
});