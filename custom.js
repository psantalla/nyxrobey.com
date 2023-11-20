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


agregarImagenAlElemento('span.ut-mark--accenture', 'assets/accenture.svg', 'com-icon--accenture');
agregarImagenAlElemento('span.ut-mark--etsy', 'assets/etsy.png', 'com-icon--etsy');
agregarImagenAlElemento('span.ut-mark--medium', 'assets/medium.svg', 'com-icon--medium');

