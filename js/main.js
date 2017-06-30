/*
 * Adiciona a classe 'loaded' após a página ter sido carregada, para iniciar as animações
 */
(function() {

    var $window = $(window);
    var $body = $('body');

    $window.on('load', function() {
        setTimeout(function() {
            $body.addClass('loaded');
        }, 100);
    });

})();


/*
 * Adiciona ou remove a classe 'active' da label, conforme o estado do input
 */
$('.input-field').on('focusout', 'input, textarea', function() {
    var thisElem = $(this);
    var textValue = thisElem.val();

    if (textValue === '') {
        thisElem.removeClass('active');
    } else {
        thisElem.addClass('active');
    }
});


/*
 * Navega suavemente até o elemento de id referenciado no href de um link interno, quando o mesmo for clicado
 */
$('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});
