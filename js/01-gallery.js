import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('afterbegin', cardsMarkup);


imageContainer.addEventListener('click', onImageContainerClick);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `
    }).join('');
};

function onImageContainerClick(e) { 
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    };

    console.log(e.target);
};

// console.log(galleryItems);
