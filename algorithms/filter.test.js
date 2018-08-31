import filter from './filter';

test('filter should be function', () => {
  expect(typeof filter).toBe('function');
});

test('should filter all items', () => {
  const arr = [1, 2, 3, 4];
  const func = x => x>4;
  expect(filter(arr, func)).toEqual([]);
});

test('should filter some items', () => {
  const arr = [1, 2, 3, 4];
  const func = x => x===2;
  expect(filter(arr, func)).toEqual([2]);
});

test('should filter an empty array', () => {
  expect(filter([], () => {})).toEqual([]);
});
