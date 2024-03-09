function highlight(tbody) {
  let classAvailable = 'available';
  let classUnavailable = 'unavailable';
  
  //выбираю строки таблицы
  let trElements = tbody.getElementsByTagName('TR');
  
  //делаю их авелибл и анавелибл
  for (let trElement of trElements) {
    for (let tdElement of trElement.children) {
      if (tdElement.dataset.available == 'true') {
        tdElement.parentElement.classList.add(classAvailable);
      } 
      if (tdElement.dataset.available == 'false') {
        tdElement.parentElement.classList.add(classUnavailable);
      }
    }
  }

  //скрываю лишние строки
  for (let trElement of trElements) {
    if (trElement.className == '') {
      trElement.hidden = true;
    }
  }

  //добавляю разделение на гендеры
  for (let trElement of trElements) {
    for (let tdElement of trElement.children) {
      if (tdElement.textContent == 'm') {
        tdElement.parentElement.classList.add('male');
      }
      if (tdElement.textContent == 'f') {
        tdElement.parentElement.classList.add('female');
      }
    }
  }

  //добавляю инлайн стиль
  for (let trElement of trElements) {
    for (let tdElement of trElement.children) {
      if (Number(tdElement.textContent) < 18) {
        tdElement.parentElement.style = 'text-decoration: line-through';
      }
    }
  }
  

  return console.log(trElements);
}
