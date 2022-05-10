const calculator = require('./task3');

describe('calculator', () => {
    test('the sum the two numbers ', () => {
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.add(2,4)).toBe(6);
    expect(calculator.add(1000,-2)).toBe(998);
  });
    test('the subtraction the two numbers ', () => {
        expect(calculator.subtract(2,3)).toBe(-1);
        expect(calculator.subtract(2,4)).toBe(-2);
        expect(calculator.subtract(1000,-2)).toBe(1002);
    });
    test('the division the two numbers ', () => {
        expect(calculator.divide(6,3)).toBe(2);
        expect(calculator.divide(4,2)).toBe(2);
        expect(calculator.divide(1000,2)).toBe(500);
    });
    test('the multiple the two numbers ', () => {
        expect(calculator.multiply(2,3)).toBe(6);
        expect(calculator.multiply(2,4)).toBe(8);
        expect(calculator.multiply(1000,-2)).toBe(-2000);
    });
});

