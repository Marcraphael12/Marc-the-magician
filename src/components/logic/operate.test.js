import operate from './operate';

const objArr = [
  {
    numberOne: '10',
    numberTwo: '5',
    operation: '÷',
  },
  {
    numberOne: '5',
    numberTwo: '6',
    operation: 'x',
  },
  {
    numberOne: '26',
    numberTwo: '0',
    operation: '+',
  },
  {
    numberOne: '8',
    numberTwo: '4',
    operation: '-',
  },
  {
    numberOne: '14',
    numberTwo: '7',
    operation: '%',
  },
];

const resultArr = ['2', '30', '26', '4', '0'];

describe('calculator displays the correct result', () => {
  test('operators return correct result', () => {
    objArr.forEach((obj, i) => {
      const result = operate(obj.numberOne, obj.numberTwo, obj.operation);
      expect(result).toEqual(resultArr[i]);
    });
  });
  test('division by 0 returns a message', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('any other operator throws an error message', () => {
    expect(() => {
      operate('5', '0', '/');
    }).toThrow("Unknown operation '/'");
  });
});
