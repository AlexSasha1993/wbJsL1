//Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

//1 символ = 2 байта

const volumeLS = () => {
  let result = 'q';
  while (true) {
    try {
      localStorage.setItem('key', result);
      result += result;
    } catch {
      break;
    }
  }
  return ((result.length / 4) * 2) / 4;
};

const size = volumeLS();
console.log(size, 'байт');
