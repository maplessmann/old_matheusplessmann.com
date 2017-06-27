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


// (function() {
//     var on = addEventListener;
//     $ = function(q) {
//         return document.querySelector(q)
//     },
//     $body = document.body
//
//     on('load', function() {
//         setTimeout(function() {
//             $body.className = $body.className += ' loaded';
//         }, 500);
//     });
// })();


/*
 * Adiciona ou remove a classe 'active' da label, conforme o estado do input
 */
$('.input-field input, .input-field textarea').on('focusout', function() {
    var thisElem = $(this);
    var textValue = thisElem.val();

    if (textValue === '') {
        thisElem.removeClass('active');
    } else {
        thisElem.addClass('active');
    }
});


/*
 * Smooth Scroll
 */
$('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
            return false;
        }
    }
});
