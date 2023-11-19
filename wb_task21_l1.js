//Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let counter = 0;

const counterFunc = () => {
  counter++;
  counterFunc();
};

try {
  counterFunc();
} catch (e) {
  console.log(counter);
}

//Chrome 12552
//Edge 12519
//Firefox 37777
