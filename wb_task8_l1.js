// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

// Создаем массив функций
let arrayFunctions = [
  (firstFunction = () => {
    return 'вызвали первую функцию';
  }),
  (secondFunction = () => {
    return 'вызвали вторую функцию';
  }),
  (thirdFunction = () => {
    return 'вызвали третью функцию';
  }),
  (fourthFunction = () => {
    return 'вызвали четвертую функцию';
  }),
];

let mainFunction = (array) => {
  return (function () {
    let resultOfFunction = array.map((element) => element()); // не forEach так как он в конце ничего не возвращает

    return resultOfFunction;
  })();
};
console.log(mainFunction(arrayFunctions));
