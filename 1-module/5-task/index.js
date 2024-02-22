function truncate(str, maxlength) {
  let dots = '…';
  let array = [];
  if (str.length <= maxlength) {
    return str;
  } else {
    for (let i = 0; i < maxlength - 1; i++) {
      array.push(str[i]);
    }
    return array.join('') + dots;
  }
}
