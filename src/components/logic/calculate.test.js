import calculate from './calculate';

const objArr = [
  {
    total: '10',
    next: '5',
    operation: '÷',
  },
  {
    total: '5',
    next: '6',
    operation: 'x',
  },
  {
    total: '26',
    next: '0',
    operation: '+',
  },
  {
    total: '8',
    next: '4',
    operation: '-',
  },
  {
    total: '14',
    next: '7',
    operation: '%',
  },
];
const objReturnFromAC = { total: null, next: null, operation: null };
const resultArr = ['2', '30', '26', '4', '0'];
const signedArr = ['-5', '-6', '0', '-4', '-7'];
describe('calculator displays the correct result', () => {
  test('operators return correct result', () => {
    objArr.forEach((obj, i) => {
      const result = calculate(obj, '=');
      expect(result.total).toEqual(resultArr[i]);
    });
  });
  test('"AC" operator returns null', () => {
    objArr.forEach((obj) => {
      const result = calculate(obj, 'AC');
      expect(result).toEqual(objReturnFromAC);
    });
  });

  test('"+/-" operator returns signed number', () => {
    objArr.forEach((obj, i) => {
      const result = calculate(obj, '+/-');
      expect(result.next).toEqual(signedArr[i]);
    });
  });
});
