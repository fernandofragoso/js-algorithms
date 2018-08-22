const reduce = (arr, reducer, init=0) => {
  if (arr.length === 0) {
    return init;
  }

  const [head, ...tail] = arr;
  return reduce(tail, reducer, reducer(init, head));
}

//tests
const arr = [2, 4, 6];
const reducer = (acc, curr) => acc + curr;

console.log(reduce(arr, reducer));
