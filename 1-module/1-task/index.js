function factorial(n) {
  n = +n;
  let counter = 1;

  for (let i = n; i > 0; i--) {
    counter *= i;
  };

  return counter;
}
