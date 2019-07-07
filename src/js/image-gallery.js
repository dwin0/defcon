const imageVisibleClass = "image-gallery__image--visible";

window.addEventListener("load", () => {
    if(!hasImageGallery()) {
        return
    }

    const galleryImages = [];

    getInitialImage(galleryImages);
    lazyLoadImages(galleryImages);
    activateGallery(galleryImages);
});

function hasImageGallery() {
    return document.getElementsByClassName('image-gallery').length
}

function getInitialImage(galleryImages) {
    const initialImages = document.querySelectorAll(
        "img.image-gallery__image[src]"
    );
    Array.from(initialImages).forEach(image => {
        galleryImages.push(image);
    });
}

function lazyLoadImages(galleryImages) {
    const notLoadedImages = document.querySelectorAll(
        "img.image-gallery__image[data-src]"
    );

    Array.from(notLoadedImages).forEach(image => {
        image.onload = () => galleryImages.push(image);
        image.src = image.dataset.src; // load the image
    });
}

function activateGallery(galleryImages) {
    let index = 0;

    setInterval(() => {
        const lastImageIndex = index;
        index = (index + 1) % galleryImages.length;

        const lastImage = galleryImages[lastImageIndex];
        const nextImage = galleryImages[index];

        showImage(lastImage, nextImage);
    }, 5000);
}

function showImage(lastImage, nextImage) {
    lastImage.classList.toggle(imageVisibleClass);
    nextImage.classList.toggle(imageVisibleClass);
}
