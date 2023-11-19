// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.

//Создаем массив объектов

let users = [
  { name: 'Zip', age: 22 },
  { name: 'John', age: 25 },
  { name: 'Sasha', age: 29 },
  { name: 'Rostislav', age: 22 },
];

//Создаем функцию сортировки массива объектов

function sortUsers(users) {
  users.sort((a, b) => {
    if (a.age > b.age) return 1; // Сравниваем возраст
    else if (a.age < b.age) return -1; // Проверка условия
    else if (a.name.toLowerCase() > b.name.toLowerCase())
      //Все приводим к нижнему регистру и проверяем на на букву имени
      return 1;
    else return -1;
  });
  console.log(users);
}

sortUsers(users);
