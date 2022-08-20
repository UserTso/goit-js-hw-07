import { galleryItems } from './gallery-items.js';
// Change code below this line



//      1.      Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

function createPhotoGalleryMarkup(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" 
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> 
`;
    }).join('');
};
galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);



galleryBox.addEventListener('click', onGalleryBoxClick);

// console.log(createPhotoGalleryMarkup(galleryItems));

function onGalleryBoxClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  };
  // console.log(event.target);

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600"/>
`);
  instance.show()


  galleryBox.addEventListener('keydown', onCloseModalEscPress);
  
  function onCloseModalEscPress(event) {
console.log(event.code)
    if (event.code === "Escape") {
      instance.close();
      galleryBox.removeEventListener('keydown', onCloseModalEscPress);
    }
  
  
  };
}

//      2.      Реалізація делегування на div.gallery і отримання url великого зображення.
//      3.       Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
