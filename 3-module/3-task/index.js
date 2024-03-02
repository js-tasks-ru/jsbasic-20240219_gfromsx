function camelize(str) {
  str = str.split('');
  while (str.includes('-')) {
    let index = str.indexOf('-');
    if (index !== -1) {
      str[index] = '';
      str[index + 1] = str[index + 1].toUpperCase();
    }    
  }
  return (str.join(''));
}
