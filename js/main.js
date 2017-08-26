/*
 * Adiciona a classe 'loaded' na tag body após a página ter sido carregada, para iniciar as animações
 */
(function() {
    const body = document.querySelector('body');

    window.addEventListener('load', function() {
        setTimeout(() => body.classList.add('loaded'), 100);
    });
})();


/*
 * Adiciona ou remove a classe 'active' da label, conforme o estado do input
 */
(function() {
    const inputs = document.querySelectorAll('.form-contact input:not([type="submit"]), .form-contact textarea');

    inputs.forEach(input => {
        input.addEventListener('focusout', function() {
            const thisLabel = this.parentNode.querySelector('label');

            if(this.value.length > 0) {
                thisLabel.classList.add('active');
            } else {
                thisLabel.classList.remove('active');
            }
        });
    });
})();


/*
 * Navega suavemente até o elemento de id referenciado no href de um link interno, quando o mesmo for clicado
 */
(function() {
    const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const alvo = this.getAttribute('href'),
                  alvoDistancia = getOffset(document.querySelector(alvo));

            $('body, html').animate({
                scrollTop: alvoDistancia
            }, 500);
        });
    });
})();

function getOffset(el) {
    const box = el.getBoundingClientRect();

    return box.top + window.pageYOffset - document.documentElement.clientTop;
}
