// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

function isStrangeNumber(number) {
  if (number <= 0) {
    return false; // Отрицательные числа и ноль не могут быть странными
  }

  let sumOfDivisors = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      // Если i является делителем числа number, добавляем его к сумме делителей
      sumOfDivisors += i;
    }
  }

  return sumOfDivisors === number;
}

// Примеры использования
console.log(isStrangeNumber(6)); // true, потому что 6 = 1 + 2 + 3
console.log(isStrangeNumber(12)); // false, потому что 12 ≠ 1 + 2 + 3 + 4 + 6
