function map(arr, func) {
  if (arr.length === 0) {
    return [];
  }
  const [ head, ...tail ] = arr;
  return [func(head), ...map(tail, func)];
}

//Test
const func = (x) => x+1;
const arr = [1, 2, 3];
console.log(map(arr, func));
