import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const listImg = document.querySelector('ul.gallery');

function arr(items) {
    return items
    .map(({ preview, original, description }) => `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`)
    .join('');
}
const addImg = arr(galleryItems);

listImg.insertAdjacentHTML('beforeend', addImg);

listImg.addEventListener('click', onclick);

function onclick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const simpleLightbox = new SimpleLightbox('ul.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionType: "alt"
});



//     const instance = basicLightbox.create(`
//     <img src="${evt.target}" width="800" height="600">
// `);
//     instance.show();
//     console.log(instance)
}