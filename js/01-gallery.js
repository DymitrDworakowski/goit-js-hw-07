import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const listImg = document.querySelector('ul.gallery');

function arr(items) {
    return items
    .map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
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

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
    instance.show();
    

     // Закриття модального вікна на клавішу "Escape"
const closeOnEscape = (evt) => {
    if (evt.key === "Escape") {
    instance.close();
    }
};

window.addEventListener('keydown', closeOnEscape);

instance.element().addEventListener('click', () => {
    window.removeEventListener('keydown', closeOnEscape);
});
}


// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)

// instance.show()

// (function () {
//     const images = galleryItems.map(({ preview, original, description }) =>`
//         <li class="gallery__item">
// <a class="gallery__link" href="${original}">
//     <img class="gallery__image" src="${preview}" data-source="large-image.jpg" alt="${description}" />
// </a>
// </li>`).join('')
//     listImg.insertAdjacentHTML('beforeend', images);
//     // listImg.innerHTML = images;
//     console.log(images);
// })







