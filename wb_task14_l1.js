//Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, который разрешается с данными об изображении, когда оно загружено. Когда говорится "промис разрешается с данными об изображении", это означает, что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.

const loadPic = (url) => {
  return new Promise((resolve, reject) => {
    const picture = document.createElement('img');
    picture.onload = () => {
      resolve({
        width: picture.width,
        heigth: picture.height,
        img: picture,
      });
    };

    //событие которое отлавливает ошибки
    picture.onerror = (error) => {
      reject(error);
    };
    picture.src = url;
  });
};

loadPic(
  'https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg'
)
  .then(() => {
    console.log('картинка загружена');
  })
  .catch(() => {
    console.log('ошибка при загрузки');
  });
