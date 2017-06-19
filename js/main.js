/* Adiciona a classe 'loaded' após a página ter sido carregada, para iniciar as animações */
(function() {
    /*
    $body.addClass('is-loading');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-loading');
        }, 250);
    });
    */

    var $window = $(window),
    $body = $('body');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.addClass('loaded');
        }, 250);
    });

})();

/* Carrega as animações uma após a outra */
// $('.has-animation').each(function(i) {
//     var that = $(this);
//
//     setTimeout(function() {
//         that.addClass('is-visible');
//         console.log(200 * i);
//     }, 850 * i);
// });


/*
var on = addEventListener;
    $ = function(q) {
        return document.querySelector(q)
    },
    $$ = function(q) {
        return document.querySelectorAll(q)
    },
    $body = document.body

on('load', function() {
    setTimeout(function() {
        $body.className = $body.className.replace(/\bis-loading\b/, 'is-playing');
        setTimeout(function() {
            $body.className = $body.className.replace(/\bis-playing\b/, 'is-ready');
        }, 3500);
    }, 100);
});

*/

/* Adiciona ou remove a classe 'active' da label, conforme o estado do input */
$('.input-field input, .input-field textarea').focusout(function() {
    var thisElem = $(this);
    var textValue = thisElem.val();

    if (textValue === '') {
        thisElem.removeClass('active');
    } else {
        thisElem.addClass('active');
    }
});
