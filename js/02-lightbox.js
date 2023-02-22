import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
imageContainer.addEventListener('click', onImageContainerClick);

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

function onImageContainerClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    };

    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');
};
