const flatarray = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const [head, ...tail] = arr;
  return (Array.isArray(head)) ? [...flatarray(head), ...flatarray(tail)] : [head, ...flatarray(tail)];
}

export default flatarray;
