/* Adiciona a classe 'loaded' após a página ter sido carregada, para iniciar as animações */
(function() {

    var $window = $(window),
    $body = $('body');

    $window.on('load', function() {

        // window.setTimeout(function() {
        //     $body.addClass('loaded');
        // }, 250);

        /* Carrega as animações uma após a outra */
        $('.animate-onload').each(function(i) {
            var that = $(this);

            setTimeout(function() {
                that.addClass('is-visible');
            }, 350 * i);
        });

    });

})();




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
