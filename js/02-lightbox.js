import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
    <a class="gallery__item" 
        href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
    </a>
    `
    }).join('');
};

new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
});

