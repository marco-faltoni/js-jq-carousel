$('.fa-circle').click(function() {
    var indice = $(this).index();
    console.log(indice);
    $('img.visible').removeClass('visible');
    $('.images').find('img').eq(indice).addClass('visible');
});
