/*
 * Adiciona a classe 'loaded' na tag body após a página ter sido carregada, para iniciar as animações
 */
(function() {
    var body = document.querySelector('body');

    window.addEventListener('load', function() {
        setTimeout(function() {
            body.classList.add('loaded');
        }, 100);
    });
})();


/*
 * Adiciona ou remove a classe 'active' da label, conforme o estado do input
 */
(function() {
    var inputField = document.querySelectorAll('.input-field');

    for(i=0; i<inputField.length; i++) {
        inputField[i].querySelector('input, textarea').addEventListener('focusout', function() {
            var thisLabel = this.parentNode.querySelector('label');

            if(this.value.length > 0) {
                thisLabel.classList.add('active');
            } else {
                thisLabel.classList.remove('active');
            }
        });
    }
})();


/*
 * Navega suavemente até o elemento de id referenciado no href de um link interno, quando o mesmo for clicado
 */
(function() {
    var link = document.querySelectorAll('a[href*="#"]:not([href="#"])');

    for(i=0; i<link.length; i++) {
        link[i].addEventListener('click', function(event) {
            event.preventDefault();

            var alvo = this.getAttribute('href'),
                alvoDistancia = getOffset(document.querySelector(alvo));

            $('body, html').animate({
                scrollTop: alvoDistancia
            }, 500);
        });
    }
})();

function getOffset(el) {
    const box = el.getBoundingClientRect();

    return box.top + window.pageYOffset - document.documentElement.clientTop;
}










// $('a[href*="#"]:not([href="#"])').on('click', function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 500);
//             return false;
//         }
//     }
// });
