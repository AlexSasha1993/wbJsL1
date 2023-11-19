// Массив для хранения постов
let posts = [];

// Количество постов для получения при каждом запросе
const count = 10;

// Переменная для хранения максимального размера localStorage
let localStorageMaxSize;

// Выбор элемента виджета из DOM
const widget = document.querySelector('.widget');

// Функция обратного вызова для обработки ответа от API и отображения постов
const callbackFunc = (result) => {
  // Добавление полученных постов в массив 'posts'
  result.response.items.forEach((item) => {
    posts.push(item);
  });

  // Отображение только что полученных постов
  renderPosts(result.response.items);

  // Обновление localStorage с последними постами
  setLocalStoragePosts(posts);
};

// Функция для получения постов из VK API на основе смещения
const getPosts = (offset) => {
  // Создание элемента SCRIPT с URL VK API и добавление его в head документа
  const script = document.createElement('SCRIPT');
  script.src = `https://api.vk.com/method/wall.get?owner_id=-164992662&domain=ddxfitness/kartini_s_istoriei&offset=${offset}&count=${count}&filter=all&access_token=2914c1c32914c1c32914c1c30d2a0143a8229142914c1c34de7a3b7b2d6996882e55c7b&v=5.131&callback=callbackFunc`;
  document.getElementsByTagName('head')[0].appendChild(script);
};

// Функция для создания элемента поста на основе шаблона
const createPost = () => {
  const postTemplate = document.querySelector('#post-template').content;
  const post = postTemplate.querySelector('.post').cloneNode(true);

  return post;
};

// Функция для добавления поста в DOM
const addPost = ({ attachments, text, likes, reposts, views }) => {
  const post = createPost();

  // Установка содержимого поста на основе данных
  post.querySelector('.text').textContent = text;

  if (attachments.length > 0) {
    if (attachments[0].type === 'photo') {
      // Отображение первого вложения-фотографии как изображения в посте
      post.querySelector('.image').src = attachments[0].photo.sizes.find(
        (size) => size.type === 'q'
      ).url;
      post.querySelector('.image').alt = attachments[0].photo.text;
    }
  }

  // Установка статистики поста
  post.querySelector('.likes').textContent = likes.count;
  post.querySelector('.reposts').textContent = reposts.count;
  post.querySelector('.views').textContent = views.count;

  // Добавление поста в контейнер постов
  document.querySelector('.posts').append(post);
};

// Функция для отображения массива постов
const renderPosts = (data) => {
  data.forEach((post) => {
    addPost(post);
  });
};

// Функция для установки постов в localStorage
const setLocalStoragePosts = (posts) => {
  try {
    // Попытка установить посты в localStorage в виде JSON-строки
    localStorage.setItem('posts', JSON.stringify(posts));
    // Логирование занятого и максимального размера localStorage в MB
    console.log(
      `Занято ${(JSON.stringify(posts).length / 1000000).toFixed(
        1
      )} МБ из ${localStorageMaxSize} МБ`
    );
  } catch {
    // Если произошла ошибка (например, превышение квоты хранилища), удаление старых постов и повторная попытка
    posts = posts.slice(count);
    setLocalStoragePosts(posts);
  }
};

// Функция для отображения виджета на основе данных localStorage или получения новых постов
const renderWidget = () => {
  if (localStorage.getItem('posts')) {
    // Если посты существуют в localStorage, извлечь и отобразить их
    posts = JSON.parse(localStorage.getItem('posts'));
    renderPosts(posts);
    console.log(
      `Занято ${(JSON.stringify(posts).length / 1000000).toFixed(
        1
      )} МБ из ${localStorageMaxSize} МБ`
    );
  } else {
    // Если постов в localStorage нет, получить их из VK API
    getPosts(0);
    console.log(
      `Занято ${
        JSON.stringify(posts).length / 1000000
      } МБ из ${localStorageMaxSize} МБ`
    );
  }
};

// Функция для попытки установки элемента в localStorage и расчета максимального размера
const trySetItem = (testData, step) => {
  try {
    // Попытка установить тестовые данные в localStorage
    localStorage.setItem('test', testData);
    // Обновление тестовых данных для следующей итерации
    testData += step;
    // Рекурсивный вызов функции с обновленными тестовыми данными
    trySetItem(testData, step);
  } catch {
    // Если произошла ошибка (например, превышение квоты хранилища), удаление тестового элемента
    localStorage.removeItem('test');
    // Расчет максимального размера localStorage в MB
    if (localStorage.getItem('posts')) {
      localStorageMaxSize = (
        (testData.length + localStorage.getItem('posts').length) /
        1000000
      ).toFixed(1);
    } else {
      localStorageMaxSize = (testData.length / 1000000).toFixed(1);
    }
  }
};

// Функция для расчета максимального размера localStorage
const countMaxLocalStorageSize = () => {
  let testData = '';
  for (let i = 0; i < 100000; i++) {
    testData += 'aaaaaaaa';
  }
  const step = testData;

  // Запуск теста для расчета максимального размера localStorage
  trySetItem(testData, step);
};

// Вызов функции для расчета максимального размера localStorage
countMaxLocalStorageSize();

// Отображение виджета при загрузке страницы
renderWidget();

// Добавление слушателя события прокрутки виджета для получения дополнительных постов при приближении к концу
widget.addEventListener('scroll', () => {
  if (widget.scrollHeight - widget.scrollTop < 550) {
    getPosts(posts.length);
  }
});
