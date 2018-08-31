import reduce from './reduce';

test('reduce should be a function', () => {
  expect(typeof reduce).toBe('function');
});

test('reduce without initializer should use 0', () => {
  const arr = [1, 2, 3];
  const reducer = (acc, item) => acc + item;
  expect(reduce(arr, reducer)).toEqual(6);
});

test('reduce with an array initializer should return an array', () => {
  const arr = [1, 2, 3];
  const reducer = (acc, item) => [...acc, item*2];
  const init = [];
  expect(reduce(arr, reducer, init)).toEqual([2, 4, 6]);
});
