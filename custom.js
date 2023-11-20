function agregarImagenAlElemento(selector, src, clase, altText) {
    document.querySelectorAll(selector).forEach((elemento) => {
        const image = new Image();
        image.src = src;
        image.alt = altText;
        image.classList.add(clase);
        elemento.insertAdjacentElement('afterbegin', image);
    });
}

agregarImagenAlElemento('span.ut-mark--accenture', 'assets/accenture.svg', 'com-icon--accenture', 'Accenture Icon');
agregarImagenAlElemento('span.ut-mark--etsy', 'assets/etsy.png', 'com-icon--etsy', 'Etsy Icon');
agregarImagenAlElemento('span.ut-mark--medium', 'assets/medium.svg', 'com-icon--medium', 'Medium Icon');
