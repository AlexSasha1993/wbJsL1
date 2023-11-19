// 3. Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
//  вычисление N-го числа в ряду Фибоначчи
//  вычисление всех чисел в ряду Фибоначчи до числа N
//  вычисление N-го просто числа
//  вычисление всех простых чисел до числа N

const MathX = (function () {
  // Функция для вычисления N-го числа Фибоначчи
  function fiboN(n) {
    if (n <= 1) {
      return n;
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }

  // Функция для вычисления всех чисел Фибоначчи до числа N
  function fiboAll(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
      result.push(fiboN(i));
    }
    return result;
  }

  // Функция для проверки, является ли число простым
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  // Функция для вычисления всех простых чисел до числа N
  function primesAll(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  }

  return {
    fiboN,
    fiboAll,
    primesAll,
  };
})();

// Примеры использования
console.log(MathX.fiboN(10)); // 55
console.log(MathX.fiboAll(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(MathX.primesAll(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
