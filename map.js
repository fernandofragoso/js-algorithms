const map = (arr, func) => {
  if (arr.length === 0) {
    return [];
  }
  const [ head, ...tail ] = arr;
  return [func(head), ...map(tail, func)];
}

export default map;
