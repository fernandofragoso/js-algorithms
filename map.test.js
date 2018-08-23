import map from './map';

test('map is a function', () => {
  expect(typeof map).toBe('function');
});

test('sum 1 for all items', () => {
  const arr = [1, 2, 3];
  const func = x => x+1;
  expect(map(arr, func)).toEqual([2, 3, 4]);
});

test('map empty array', () => {
  const arr = [];
  const func = x => x+1;
  expect(map(arr, func)).toEqual([]);
});
