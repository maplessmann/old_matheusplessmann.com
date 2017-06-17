$(document).ready(function() {

    /* Remove a classe 'hidden' dos elementos após a página ter sido carregada */
    $('.hidden').removeClass('hidden');

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

});
