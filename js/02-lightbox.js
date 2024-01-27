import { galleryItems } from './gallery-items.js';
// Change code below this line
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js.
// Разбей его на несколько подзадач:
// 1Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// 2Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
//  Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3Инициализация библиотеки после того как элементы галереи созданы и
// добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox
// - в первую очередь секции «Usage» и «Markup».
// 4Посмотри в документации секцию «Options» и добавь отображение подписей
// к изображениям из атрибута alt. Пусть подпись будет снизу и появляется
// через 250 миллисекунд после открытия изображения.

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onClick);
document.addEventListener('keydown', onCloseModal);

const galleryItemList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryItemList);

function onClick(e) {
  e.preventDefault();
}

 function onCloseModal(e) {
  if(lightbox.isOpen && e.code === 'ESCAPE') {
    lightbox.isOpen='false' 
   }
 }

let lightboxModal = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
