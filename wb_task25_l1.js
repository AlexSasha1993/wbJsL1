// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, добавляет его в DOM и устанавливает для него стиль с помощью CSS.

let my_div;

let createNewStyle = () => {
  // Создаём новый элемент div

  let newDiv = document.createElement('div');
  newDiv.innerHTML = '<h1>Привет!</h1>';

  // добавляем в него стиль
  newDiv.style.color = 'green';

  // Добавляем только что созданный элемент в дерево DOM
  //append() — вставляет элемент в конец узла.
  document.body.appendChild(newDiv, my_div);
  // Присваиваем переменной my_div значение нового div
  my_div = newDiv;
};

createNewStyle();
