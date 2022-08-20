import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

function createPhotoGalleryMarkup(galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return `
  
    <a class="gallery__item" 
        href="${original}">
    <img class="gallery__image" 
        src="${preview}" 
            alt="${description}" />
    </a>
  
`;
    }).join('');
};
galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);


galleryBox.addEventListener('click', onGalleryBoxClick);

// console.log(createPhotoGalleryMarkup(galleryItems));

function onGalleryBoxClick(event) {
  event.preventDefault();
 var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
};
