/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;

    this.render();
    this.addEventListener();
  }

  render() {
    let table = document.createElement('TABLE');

    table.innerHTML = `<thead>
                          <tr>
                              <th>Имя</th>
                              <th>Возраст</th>
                              <th>Зарплата</th>
                              <th>Город</th>
                              <th></th>
                          </tr>
                      </thead>` ;
    table.innerHTML += `<tbody>${this.rows.map(({name, age, salary, city}) => `<tr>
    <th>${name}</th>
    <th>${age}</th>
    <th>${salary}</th>
    <th>${city}</th>
    <th><button>X</button></th>
    </tr>`).join('')}</tbody>`;

    this.elem = table;
  }

  addEventListener() {
    this.elem.addEventListener('click', function(event) {
      let button = event.target.closest('BUTTON');
      let th = event.target.closest('TH');
      
      if (button) {
        th.parentElement.hidden = 'true';
      }
    });
  }
}
