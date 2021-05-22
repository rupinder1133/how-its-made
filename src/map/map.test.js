const map = require('./map');

it('should return empty array on empty array', () => {
  let iteratorFn = () => null;
  expect(map([], iteratorFn)).toStrictEqual([].map(iteratorFn));
})

it('should return same array for identity function', () => {
  let iteratorFn = (element) => element;
  expect(map([1,2,3], iteratorFn)).toStrictEqual([1,2,3].map(iteratorFn));
})

it('should increment array elements by one', () => {
  let iteratorFn = (element) => element + 1;
  expect(map([1,2,3], iteratorFn)).toStrictEqual([1,2,3].map(iteratorFn));
})

it('should add index to array elements', () => {
  let iteratorFn = (element, index) => element + index;
  expect(map([1,2,3], iteratorFn)).toStrictEqual([1,2,3].map(iteratorFn));
})

it('should add array mirror elements', () => {
  let iteratorFn = (element, index, array) => element + array[array.length - 1 - index];
  expect(map([1, 1, 3, 4], iteratorFn)).toStrictEqual([5, 4, 4, 5]);
})