function showSalary(users, age) {
  users = users.filter((user) => {
    return user.age <= age;
  });
  let tmpArray = [];
  for (let element of users) {
    tmpArray.push(element.name + ', ' + element.balance);
  }
  return tmpArray.join('\n');
}
