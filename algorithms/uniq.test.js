import uniq from './uniq';

test('uniq is a function', () => {
  expect(typeof uniq).toBe('function');
});

test('uniq([1, 2, 2] should return [1, 2]', () => {
  expect (uniq([1, 2, 2])).toEqual([1, 2]);
});

test('uniq([1, 2, 3] should return [1, 2, 3]', () => {
  expect (uniq([1, 2, 3])).toEqual([1, 2, 3]);
});

test('uniq([] should return []', () => {
  expect (uniq([])).toEqual([]);
});