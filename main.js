// intercetto il click sui pallini e li associo alle immagini
$('.fa-circle').click(function() {
    // recupero l'indice di ogni pallino e gli assegno un var
    var indice = $(this).index();

    // rimuovo momentaneamente la classe visible alle immagini
    $('img.visible').removeClass('visible');
    // rimuovo momentaneamente la classe bianco ai pallini
    $('.fa-circle').removeClass('bianco');


    // associo le img trovate con l'indice dei pallini, e gli aggiungo la classe visible ogni volta che clicco sul pallino.
    $('.images').find('img').eq(indice).addClass('visible');
    // associo la classe bianco con l'indice dei pallini, cosi facendo avranno lo sfondo bianco ogni volta che li clicco.
    $('.bullets').find('.fa-circle').eq(indice).addClass('bianco');
});


// intecetto il clic sulla freccia destra
$('.freccia-destra').click(function() {
    // recupero l'img che ha la classe visible in questo momento
    var current_image = $('img.visible');
    // recupero il paòlino che ha la classe bianco in questo momento
    var current_bullet = $('.fa-circle.bianco')

    // rimuovo temporaneamente la classe visible all'immagine
    current_image.removeClass('visible');
    // rimuovo temporaneamente la classe bianco al pallino
    current_bullet.removeClass('bianco');

    // assegno
    var next_image = current_image.next('.images img');
    var next_bullet = current_bullet.next('.bullets .fa-circle');

    if (next_image.length !=0) {
        next_image.addClass('visible');
        next_bullet.addClass('bianco');
    } else {
        next_image = $('.images img:first-child');
        next_image.addClass('visible');

        $('.bullets .fa-circle:first-child').addClass('bianco');
    }
});

// intecetto il clic sulla freccia sinistra
$('.freccia-sinistra').click(function() {
    // recupero l'img che ha la classe visible in questo momento
    var current_image = $('img.visible');
    var current_bullet = $('.fa-circle.bianco')

    current_image.removeClass('visible');
    current_bullet.removeClass('bianco');

    var next_image = current_image.prev('.images img');
    var next_bullet = current_bullet.prev('.bullets .fa-circle');

    if (next_image.length !=0) {
        next_image.addClass('visible');
        next_bullet.addClass('bianco');
    } else {
        next_image = $('.images img:last-child');
        next_image.addClass('visible');

        $('.bullets .fa-circle:last-child').addClass('bianco');
    }
});
