import flatarray from './flatarray';

test('flatarray should be a function', () => {
  expect(typeof flatarray).toBe('function');
});

test('flatarray([[1], [2]]) should return [1, 2]', () => {
  expect(flatarray([[1], [2]])).toEqual([1, 2]);
});

test('flatarray([[2]]) should return [2]', () => {
  expect(flatarray([[2]])).toEqual([2]);
});

test('flatarray([]) should return []', () => {
  expect(flatarray([])).toEqual([]);
});

test('flatarray([1, [2, [3, 4]], ["[5, 6]"], [[[7]]], [8, 9]]) should return [1, 2, 3, 4, "[5, 6]", 7, 8, 9]', () => {
  const arr = [1, [2, [3, 4]], ["[5, 6]"], [[[7]]], [8, 9]];
  const flatArr = [1, 2, 3, 4, "[5, 6]", 7, 8, 9];
  expect(flatarray(arr)).toEqual(flatArr);
});
