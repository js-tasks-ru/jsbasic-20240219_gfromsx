function sumSalary(salaries) {
  let counter = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) {
      counter += salaries[key];
    }
  }
  return counter;
}
