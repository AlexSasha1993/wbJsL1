// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.

let my_div;

let createNewStyle = () => {
  // Создаём новый элемент div
  let newDiv = document.createElement('div');
  newDiv.innerHTML = '<h1>Привет!</h1>';

  // добавляем в него стиль
  newDiv.style.color = 'green';
  newDiv.style.position = 'relative';

  // Добавляем только что созданный элемент в дерево DOM
  document.body.appendChild(newDiv);

  // Присваиваем переменной my_div значение нового div
  my_div = newDiv;
};

createNewStyle();
// Добавляем обработчик события onclick для элемента my_div
my_div.onclick = function () {
  let start = Date.now(); //Записывается текущее время в момент начала клика.

  let timer = setInterval(function () {
    //Запускается интервальная функция, которая будет выполняться каждые 20 миллисекунд
    let timePassed = Date.now() - start;
    //Рассчитывается время, прошедшее с начала клика.

    my_div.style.left = timePassed / 10 + 'px';
    //Изменяется свойство left элемента my_div так, чтобы он двигался влево со временем. Скорость движения контролируется делением timePassed на 10.
    //https://learn.javascript.ru/js-animation

    if (timePassed > 2000) clearInterval(timer);
  }, 20);
  //   Проверяется, прошло ли уже более 2000 миллисекунд (или 2 секунды). Если это так, то интервал очищается, и анимация завершается.
};
