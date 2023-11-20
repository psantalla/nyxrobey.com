// add icons to key words

function agregarImagenAlElemento(selector, src, clase) {
    const elementos = document.querySelectorAll(selector);

    elementos.forEach((elemento) => {
        const image = document.createElement('img');
        image.src = src;
        image.classList.add(clase);
        elemento.insertBefore(image, elemento.firstChild);
    });
}

// Llamada para agregar la imagen a elementos con la clase 'ut-mark--accenture'
agregarImagenAlElemento('span.ut-mark--accenture', 'assets/accenture.svg', 'com-icon--accenture');

// Llamada para agregar la imagen a elementos con la clase 'ut-mark--etsy'
agregarImagenAlElemento('span.ut-mark--etsy', 'assets/etsy.png', 'com-icon--etsy');

