//Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

// Вызов document.write() внутри document.write() может привести к непредсказуемым результатам, и его использование не рекомендуется. При этом, если  вызывать document.write() после завершения загрузки документа, он перезаписывает весь HTML документа. Если вызывать document.write() внутри себя, это может вызвать неправильное разрешение контента и, вероятно, приведет к ошибкам в документе.

document.write('Hello, ');
document.write('World!');

//Это будет работать корректно и выведет "Hello, World!" в документ.

document.write('Hello, ');
document.write("document.write('World!')");

//Результат может быть неожиданным. Возможно, вы увидите в документе что-то вроде
Hello, document.write('World!');
// Вместо того чтобы выполнить второй вызов document.write(), он просто выведет строку как текст.

// Это происходит потому, что document.write() принимает аргументы как строки и вставляет их в текущий поток документа. Если вы передадите строку с вызовом document.write() в качестве аргумента, она просто будет воспринята как текст, а не как исполняемый код.

// В любом случае, рекомендуется избегать использования document.write() в пользу более современных методов манипуляции DOM, таких как использование innerHTML или создание элементов с последующим добавлением их к DOM.

//  Что выводит консоль при вызове
document.write('Hello, ');
document.write('World!');
// Uncaught TypeError: Failed to execute 'write' on 'Document': This document requires 'TrustedHTML' assignment.
//     at <anonymous>:1:10

// Ошибка "Uncaught TypeError: Failed to execute 'write' on 'Document': This document requires 'TrustedHTML' assignment" возникает в современных версиях браузеров, когда попытка использования document.write() происходит в контексте, который требует безопасного присвоения (TrustedHTML).

// Эта ошибка связана с улучшениями безопасности и предотвращением внедрения скриптов. В современных браузерах, таких как Chrome и Firefox, document.write() становится все менее поддерживаемым и его использование в различных контекстах может привести к подобным ошибкам.

// Вместо использования document.write(), рекомендуется использовать более безопасные методы манипуляции DOM, такие как innerHTML, createElement, appendChild, и другие. Эти методы обеспечивают более явное и безопасное управление содержимым документа.

//У каждого браузера свой размер колстэка, от размера колстэка зависит кол-во вызова.
