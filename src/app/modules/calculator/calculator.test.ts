import { Calculator } from './calculator';

describe('Calculator', () => {
  describe('Add', () => {
    const testCases = [
      {
        a: 1,
        b: 2,
        expected: 3,
      },
      {
        a: -5,
        b: 2,
        expected: -3,
      },
      {
        a: 0,
        b: 0,
        expected: 0,
      },
      {
        a: -5,
        b: -5,
        expected: -10,
      },
    ];

    testCases.forEach((testCase) => {
      it(`should return ${testCase.expected} when adding ${testCase.a} and ${testCase.b}`, () => {
        // Arrange
        const calculator = new Calculator();

        // Act
        const result = calculator.add(testCase.a, testCase.b);

        // Assert
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe('Subtract', () => {
    const testCases = [
      {
        a: 1,
        b: 2,
        expected: -1,
      },
      {
        a: -5,
        b: 2,
        expected: -7,
      },
      {
        a: 0,
        b: 0,
        expected: 0,
      },
      {
        a: -5,
        b: -5,
        expected: 0,
      },
    ];

    testCases.forEach((testCase) => {
      it(`should return ${testCase.expected} when subtracting ${testCase.a} and ${testCase.b}`, () => {
        // Arrange
        const calculator = new Calculator();

        // Act
        const result = calculator.subtract(testCase.a, testCase.b);

        // Assert
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe('Multiply', () => {
    const testCases = [
      {
        a: 1,
        b: 2,
        expected: 2,
      },
      {
        a: -5,
        b: 2,
        expected: -10,
      },
      {
        a: 0,
        b: 0,
        expected: 0,
      },
      {
        a: -5,
        b: -5,
        expected: 25,
      },
    ];

    testCases.forEach((testCase) => {
      it(`should return ${testCase.expected} when multiplying ${testCase.a} and ${testCase.b}`, () => {
        // Arrange
        const calculator = new Calculator();

        // Act
        const result = calculator.multiply(testCase.a, testCase.b);

        // Assert
        expect(result).toEqual(testCase.expected);
      });
    });
  });

  describe('Divide', () => {
    const testCases = [
      {
        a: 1,
        b: 2,
        expected: 0.5,
      },
      {
        a: -5,
        b: 2,
        expected: -2.5,
      },
      {
        a: 0,
        b: 0,
        expected: NaN,
      },
      {
        a: -5,
        b: -5,
        expected: 1,
      },
    ];

    testCases.forEach((testCase) => {
      it(`should return ${testCase.expected} when dividing ${testCase.a} by ${testCase.b}`, () => {
        // Arrange
        const calculator = new Calculator();

        // Act
        const result = calculator.divide(testCase.a, testCase.b);

        // Assert
        expect(result).toEqual(testCase.expected);
      });
    });
  });
});
