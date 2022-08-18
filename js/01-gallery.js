import { galleryItems } from './gallery-items.js';
// Change code below this line



//      1.      Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup)

galleryBox.addEventListener('click', onGalleryBoxKlick);

console.log(createPhotoGalleryMarkup(galleryItems));

function createPhotoGalleryMarkup(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" 
    href="large-image.jpg">
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
//  console.log(galleryItems);
//      2.      Реалізація делегування на div.gallery і отримання url великого зображення.

function onGalleryBoxKlick(event) {
console.log(event.target);
}



