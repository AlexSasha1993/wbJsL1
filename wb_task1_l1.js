// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

function isPalindrome(str) {
  // Удаляем пробелы и приводим строку к нижнему регистру
  str = str.replace(/\s/g, '').toLowerCase();

  // Сравниваем строку с ее обратным порядком
  return str === str.split('').reverse().join('');
}

const testString = 'аргентина манит негра';
const result = isPalindrome(testString);

if (result) {
  console.log('Строка является палиндромом.');
} else {
  console.log('Строка не является палиндромом.');
}
