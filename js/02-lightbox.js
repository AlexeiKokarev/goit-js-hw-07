import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerEl = document.querySelector('.gallery');

const markup = galleryItems
    .map(element => {
        return `<div class="gallery__item">
    <a class="gallery__item" href="${element.original}">
    <img class="gallery__image"
    src="${element.preview}"
     alt="${element.description}" 
     title = "${element.description}" 
    captionDelay = 250ms>
    </a>
    </div>`;
    })
    .join('');
containerEl.insertAdjacentHTML('afterbegin', markup);

const gallery = new simpleLightbox('.gallery__item a');
gallery.on('show.simpleLightbox', function() {

});