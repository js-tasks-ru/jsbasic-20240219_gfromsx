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
    <td>${name}</td>
    <td>${age}</td>
    <td>${salary}</td>
    <td>${city}</td>
    <td><button>X</button></td>
    </tr>`).join('')}</tbody>`;

    this.elem = table;
  }

  addEventListener() {
    this.elem.addEventListener('click', function(event) {
      let button = event.target.closest('BUTTON');
      let tr = event.target.closest('Tr');
      
      if (button) {
        tr.remove();
      }
    });
  }
}
