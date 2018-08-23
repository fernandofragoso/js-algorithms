import reduce from './reduce';

test('reduce is a function', () => {
  expect(typeof reduce).toBe('function');
});

test('reduce without initializer', () => {
  const arr = [1, 2, 3];
  const reducer = (acc, item) => acc + item;
  expect(reduce(arr, reducer)).toEqual(6);
});

test('reduce with initializer', () => {
  const arr = [1, 2, 3];
  const reducer = (acc, item) => [...acc, item*2];
  const init = [];
  expect(reduce(arr, reducer, init)).toEqual([2, 4, 6]);
});
