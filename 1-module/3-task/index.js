function ucFirst(str) {
  if (!str) {
    return '';
  }

  let array = str.split('');
  array[0] = array[0].toUpperCase();

  return array.join('');
}
