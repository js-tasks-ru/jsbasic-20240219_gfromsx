function getMinMax(str) {
  str = str.split(' ');
  str = str.map((element) => {
    return parseFloat(element);
  });
  str = str.filter((element) => {
    return !isNaN(element)
  })
  return {max: Math.max(...str), min: Math.min(...str)};
}
