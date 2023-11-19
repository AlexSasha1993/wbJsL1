// Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

// Установим библиотеку Moment.js перед запуском кода: npm install moment
const moment = require('moment');

// Модуль для работы с датами
const dateModule = {
  getCurrentDate: function () {
    return moment().format('YYYY-MM-DD');
  },
  addDays: function (date, days) {
    const newDate = moment(date, 'YYYY-MM-DD').add(days, 'days');
    return newDate.format('YYYY-MM-DD');
  },
  differenceInDays: function (date1, date2) {
    const diff = moment(date1, 'YYYY-MM-DD').diff(
      moment(date2, 'YYYY-MM-DD'),
      'days'
    );
    return Math.abs(diff);
  },
};

// Использование функций модуля
const currentDate = dateModule.getCurrentDate();
console.log('Current Date:', currentDate);

const futureDate = dateModule.addDays(currentDate, 7);
console.log('Date after 7 days:', futureDate);

const date1 = '2023-11-17';
const date2 = '2023-11-24';
const diffDays = dateModule.differenceInDays(date1, date2);
console.log(
  `Difference in days between ${date1} and ${date2}: ${diffDays} days`
);
