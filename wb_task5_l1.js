// Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

let arrayUsers = [
  { name: 'Sasha', age: 29 },
  { name: 'John', age: 25 },
  { name: 'Nik', age: 33 },
  { name: 'Mike', age: 45 },
];

const jsonUsers = JSON.stringify(arrayUsers);

class userList {
  constructor() {
    this.head = null;
    this.end = null;
  }
  append = (value) => {
    const newList = {
      value: value,
      next: null,
    };

    if (!this.head || !this.end) {
      this.head = newList;
      this.end = newList;
      return this;
    }
    this.end.next = newList;
    this.end = newList;
  };

  getUserList = () => {
    return this.head;
  };
}

//Создаем функцию где преобразуем строку в связанный список
const changeListUsers = (jsonUsers) => {
  const changeList = JSON.parse(jsonUsers);
  const connectList = new userList();
  if (!(Array.isArray(changeList) && changeList.length > 0))
    return 'Массив пустой';

  changeList.forEach((obj) => connectList.append(obj));
  return connectList.getUserList();
};

console.log(changeListUsers(jsonUsers));
