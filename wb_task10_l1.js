// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

// function check(value) {
//   if (typeof value === 'string') {
//     return `"${value.trim()}"`;
//   }
//   return console.log('Ошибка! пришла не строка');
// }

// console.log(check('hello'));
// console.log(check(true));

function convertToJson(inputString) {
  try {
    // Попытка разбора строки в формате JSON
    const jsonData = JSON.parse(inputString);

    // Проверка на объект JSON
    if (typeof jsonData != 'string') {
      return jsonData;
    } else {
      return { error: 'Input is not a valid JSON object.' };
    }
  } catch (error) {
    return { error: `JSON parsing error: ${error.message}` };
  }
}

// Пример использования
const inputString = '{"name": "John", "age": 30, "city": "New York"}';
const result = convertToJson(inputString);
console.log(result);
