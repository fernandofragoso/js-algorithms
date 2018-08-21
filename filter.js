const filter = (arr, func) => {
  if (arr.length === 0) {
    return [];
  }

  const [ head, ...tail ] = arr;
  return (func(head)) ? [head, ...filter(tail, func)] : [...filter(tail, func)];
}

//Test
const arr = [1, 2, 3];
const func = (x) => (x>1);
console.log(filter(arr, func));
