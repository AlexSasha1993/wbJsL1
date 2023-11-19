// Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

const sum = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Успех'), 1000);
    setTimeout(() => reject(new Error('Провал')), 1000);
  });
};

const myFunc = async () => {
  const result = await sum();
  return result;
};

myFunc()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
