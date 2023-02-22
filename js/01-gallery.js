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
    e.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);

    if (!e.target.classList.contains('gallery__image')) {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
    function onEscKeyPress(e) {
    console.log(e)
    instance.close()
}
};