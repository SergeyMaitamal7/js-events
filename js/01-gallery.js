import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onClickModal);

const alleryItemList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', alleryItemList);

function onClickModal(e) {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    const largeImg = e.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src=${largeImg}>
`);
    instance.show();
  }
}

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько
//  подзадач:
// Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элементагалереи.
// Реализация делегирования на ul.gallery и
// получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна
// basicLightbox. Используй CDN сервис jsdelivr и добавь
//  в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.
//  Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img>
// в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из
// примеров библиотеки basicLightbox.
