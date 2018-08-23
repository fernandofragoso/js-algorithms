import filter from './filter';

test('filter is a function', () => {
  expect(typeof filter).toBe('function');
});

test('filter all items', () => {
  const arr = [1, 2, 3, 4];
  const func = x => x>4;
  expect(filter(arr, func)).toEqual([]);
});

test('filter items', () => {
  const arr = [1, 2, 3, 4];
  const func = x => x===2;
  expect(filter(arr, func)).toEqual([2]);
});
