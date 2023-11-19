// Реализовать функцию конвертации JSON в строку

function check(value) {
  if (typeof value === 'string') {
    return value;
  }
  return JSON.stringify(value);
}

console.log(check({ name: 'Mike', age: 45 }));
